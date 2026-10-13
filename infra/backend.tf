# The state bucket is created once by hand (see README.md) because Terraform
# cannot create the bucket that stores its own state. Backend blocks cannot use
# variables, so the bucket name and account id are literal.
terraform {
  backend "s3" {
    bucket              = "foma-portal-tfstate-747554529644"
    key                 = "foma-portal/terraform.tfstate"
    region              = "us-east-1"
    profile             = "foma-portal"
    allowed_account_ids = ["747554529644"]
    encrypt             = true
    use_lockfile        = true
  }
}
