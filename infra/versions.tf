terraform {
  required_version = ">= 1.10"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

# Hard-wired to the foma-portal profile and account: the same AWS account also
# hosts other projects, and this stack must never run against them.
provider "aws" {
  region              = "us-east-1"
  profile             = "foma-portal"
  allowed_account_ids = [var.aws_account_id]

  default_tags {
    tags = {
      Project   = "foma-portal"
      ManagedBy = "terraform"
    }
  }
}
