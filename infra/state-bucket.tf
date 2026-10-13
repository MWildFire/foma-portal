# The state bucket is created by hand (see README.md), so Terraform manages only its
# lifecycle configuration. Current state versions never expire. An older state version
# is removed after 90 days, but the 5 most recent older versions are always kept as
# rollback points, even when they are older than 90 days.
resource "aws_s3_bucket_lifecycle_configuration" "state" {
  bucket = "foma-portal-tfstate-${data.aws_caller_identity.current.account_id}"

  rule {
    id     = "expire-old-state-versions"
    status = "Enabled"

    filter {}

    noncurrent_version_expiration {
      noncurrent_days           = 90
      newer_noncurrent_versions = 5
    }
  }
}
