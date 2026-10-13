# infra/ - hosting for the Foma Learning Portal

Terraform for a private static site: S3 + CloudFront (OAC) with Basic Auth, Route 53, ACM and a
GitHub Actions deploy role. Region `us-east-1`, AWS profile `foma-portal` only (hard-wired, with an
account-id guard). The account is shared with other projects: everything here is named
`foma-portal-*`, and the account-wide GitHub OIDC provider is only read, never changed.

| File | Purpose |
|---|---|
| `versions.tf` `backend.tf` `variables.tf` | provider, S3 state backend, inputs |
| `storage.tf` | private site bucket: versioning, SSE, OAC-only read, 30-day old-version expiry |
| `cdn.tf` | distribution, OAC, CachingOptimized, HTTP/2+3, PriceClass_200 |
| `auth.tf` `auth-function.js.tftpl` | viewer-request function: www to apex redirect, then Basic Auth |
| `headers.tf` | HSTS, nosniff, Referrer-Policy, `X-Robots-Tag: noindex, nofollow` |
| `dns.tf` | Route 53 zone (step 1); ACM, validation, A/AAAA aliases (step 2) |
| `iam.tf` | deploy role, trusts only the `main` branch of this repo (immutable OIDC `sub`) |

## State bucket (once, by hand)
Terraform cannot create the bucket that holds its own state (name is literal in `backend.tf`):
```sh
export AWS_PROFILE=foma-portal AWS_REGION=us-east-1; B=foma-portal-tfstate-<account-id>
aws s3api create-bucket --bucket $B --object-ownership BucketOwnerEnforced
aws s3api put-public-access-block --bucket $B --public-access-block-configuration \
  BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
aws s3api put-bucket-versioning --bucket $B --versioning-configuration Status=Enabled
aws s3api put-bucket-encryption --bucket $B --server-side-encryption-configuration \
  '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
```
The bucket is private (all public access blocked), versioned and encrypted (AES256). The state
holds SHA-256 digests of the Basic Auth headers, not the passwords. Versions written before that
change still hold the old base64 strings, so keep the bucket private and never copy the state out.

## Passwords
`infra/auth.auto.tfvars` (gitignored; see `auth.auto.tfvars.example`) holds `foma_password` and
`dmitry_password`. Generate with `openssl rand -base64 18` and keep a copy in
`~/.foma-portal/credentials.txt` (chmod 600). Never print or commit them. To rotate: change both
files, `terraform apply`. For one run you can pass them as `TF_VAR_foma_password` and
`TF_VAR_dmitry_password` instead, which leaves no copy on disk. A fresh checkout or worktree
otherwise needs `auth.auto.tfvars` before `plan`; rebuild it:
```sh
umask 077; awk -F': ' '$1=="foma"{f=$2} $1=="dmitry"{d=$2} END{printf "foma_password   = \"%s\"\ndmitry_password = \"%s\"\n", f, d}' \
  ~/.foma-portal/credentials.txt > infra/auth.auto.tfvars
```

## Step 1 - everything on *.cloudfront.net
```sh
cd infra && terraform init && terraform apply
terraform output name_servers   # four NS for the registrar
```
Only [redacted] changes DNS: Spaceship -> Nameservers -> Custom -> paste the four NS.

## Step 2 - real domain, after delegation
Run only when `dig NS fomalearningportal.academy +short` lists the four Route 53 servers. In this order:
1. In `variables.tf` set the default of `custom_domain_enabled` to `true`.
2. `terraform plan` (expect the certificate, its validation, the A/AAAA records and the distribution aliases).
3. `terraform apply`, and only then commit `variables.tf`.

Never remove the flag or set it back to `false` and run a plain `terraform apply`: it deletes the
certificate and the aliases.

## GitHub deploy
`.github/workflows/deploy.yml` has two jobs. `build` (read-only token, no OIDC) runs `npm ci`,
`npm run check` and `npm run build`, then uploads `dist/` as the `site` artifact. `deploy` runs only on
`main`, is the only job with `id-token: write`, runs no npm and assumes the deploy role through OIDC
(no keys stored). Repo variables, set once from the outputs:
```sh
gh variable set AWS_ROLE_ARN --repo MWildFire/foma-portal --body "$(terraform output -raw deploy_role_arn)"
gh variable set S3_BUCKET --repo MWildFire/foma-portal --body "$(terraform output -raw site_bucket)"
gh variable set CF_DISTRIBUTION_ID --repo MWildFire/foma-portal --body "$(terraform output -raw distribution_id)"
```
The role trusts only the immutable `sub` of this repo's `main` branch,
`repo:MWildFire@28848477/foma-portal@1416563569:ref:refs/heads/main` (this repo has immutable subject
claims, so a name-based `repo:owner/name:...` never matches). Re-check with
`gh api repos/MWildFire/foma-portal/actions/oidc/customization/sub` and keep `github_oidc_sub_prefix`
in `variables.tf` equal to its `sub_claim_prefix`.

Upload order, safe even if a run is cancelled (nothing is deleted before the new `index.html` is live):
1. `assets/` (content-hashed by Vite): `public,max-age=31536000,immutable`.
2. everything else, including unhashed `public/` files: `no-cache`.
3. `index.html`: `no-cache`.
4. CloudFront invalidation of `/index.html` and `/`.
5. prune with `--delete --size-only`, skipping `assets/` and `index.html`. Old hashed assets stay on
   purpose, so tabs that are still open keep working.

## Cost
About $1-2 per month: Route 53 zone $0.50, the rest (CloudFront, function, S3) is cents or free
tier, ACM is free.
