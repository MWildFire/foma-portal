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
| `iam.tf` | deploy role, trust only `repo:MWildFire/foma-portal:ref:refs/heads/main` |

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
contains the Basic Auth strings, so keep it private and never copy it out.

## Passwords
`infra/auth.auto.tfvars` (gitignored; see `auth.auto.tfvars.example`) holds `foma_password` and
`dmitry_password`. Generate with `openssl rand -base64 18` and keep a copy in
`~/.foma-portal/credentials.txt` (chmod 600). Never print or commit them. A fresh checkout needs
this file before `plan`. To rotate: change both files, `terraform apply`.

## Step 1 - everything on *.cloudfront.net
```sh
cd infra && terraform init && terraform apply
terraform output name_servers   # four NS for the registrar
```
Only [redacted] changes DNS: Spaceship -> Nameservers -> Custom -> paste the four NS.

## Step 2 - real domain, after delegation
Run only when `dig NS fomalearningportal.academy +short` lists the four Route 53 servers:
```sh
terraform apply -var custom_domain_enabled=true
```
Then set the default of `custom_domain_enabled` to `true` in `variables.tf` and commit it,
otherwise a later plain `terraform apply` removes the aliases and certificate again.

## GitHub deploy
`.github/workflows/deploy.yml` assumes the deploy role through OIDC (no keys stored). Repo
variables, set once from the outputs:
```sh
gh variable set AWS_ROLE_ARN --repo MWildFire/foma-portal --body "$(terraform output -raw deploy_role_arn)"
gh variable set S3_BUCKET --repo MWildFire/foma-portal --body "$(terraform output -raw site_bucket)"
gh variable set CF_DISTRIBUTION_ID --repo MWildFire/foma-portal --body "$(terraform output -raw distribution_id)"
```
Everything except `index.html` is uploaded as immutable (one year), so file names in `dist/` must
be content-hashed. Only `index.html` is `no-cache` and invalidated.

## Cost
About $1-2 per month: Route 53 zone $0.50, the rest (CloudFront, function, S3) is cents or free
tier, ACM is free.
