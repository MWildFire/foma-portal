output "account_id" {
  description = "AWS account id."
  value       = local.account_id
}

output "state_bucket" {
  description = "Terraform state bucket (created by hand, see README)."
  value       = "foma-portal-tfstate-${local.account_id}"
}

output "site_bucket" {
  description = "Private origin bucket. GitHub variable S3_BUCKET."
  value       = aws_s3_bucket.site.bucket
}

output "distribution_id" {
  description = "CloudFront distribution id. GitHub variable CF_DISTRIBUTION_ID."
  value       = aws_cloudfront_distribution.site.id
}

output "distribution_arn" {
  description = "CloudFront distribution ARN."
  value       = aws_cloudfront_distribution.site.arn
}

output "distribution_domain_name" {
  description = "The *.cloudfront.net hostname."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "auth_function_name" {
  description = "CloudFront function that does Basic Auth and the www redirect."
  value       = aws_cloudfront_function.auth.name
}

output "response_headers_policy_id" {
  description = "CloudFront response headers policy id."
  value       = aws_cloudfront_response_headers_policy.site.id
}

output "oidc_provider_arn" {
  description = "GitHub OIDC provider used by the deploy role."
  value       = local.github_oidc_provider_arn
}

output "deploy_role_arn" {
  description = "Role assumed by GitHub Actions. GitHub variable AWS_ROLE_ARN."
  value       = aws_iam_role.deploy.arn
}

output "hosted_zone_id" {
  description = "Route 53 hosted zone id."
  value       = aws_route53_zone.site.zone_id
}

output "name_servers" {
  description = "The four Route 53 name servers to enter at the registrar."
  value       = aws_route53_zone.site.name_servers
}
