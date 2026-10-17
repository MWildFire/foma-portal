variable "aws_account_id" {
  description = "AWS account that hosts the portal. The provider refuses to run against any other account."
  type        = string
  default     = "747554529644"
}

variable "domain_name" {
  description = "Apex domain of the portal. The www. host is derived from it and redirected to the apex."
  type        = string
  default     = "fomalearningportal.academy"
}

# GitHub issues OIDC tokens for this repository with the immutable subject format
# (owner and repository ids), so a name-based "repo:owner/name:..." condition never
# matches. The ids are public identifiers, not secrets. To re-check, run
#   gh api repos/MWildFire/foma-portal/actions/oidc/customization/sub
# and copy sub_claim_prefix.
variable "github_oidc_sub_prefix" {
  description = "Prefix of the GitHub OIDC sub claim for this repository (immutable format with owner and repo ids). Only its main branch may assume the deploy role."
  type        = string
  default     = "repo:MWildFire@28848477/foma-portal@1420984463"
}

variable "custom_domain_enabled" {
  description = "Step 2 switch: ACM certificate, validation records, alias records and distribution aliases. Set to true only after the registrar delegates the domain to the Route 53 name servers."
  type        = bool
  default     = true
}

variable "create_github_oidc_provider" {
  description = "Create the account-wide GitHub OIDC provider. Leave false when the account already has token.actions.githubusercontent.com (it does, other projects use it)."
  type        = bool
  default     = false
}

variable "foma_password" {
  description = "Basic Auth password for the login foma. Lives in infra/auth.auto.tfvars (gitignored)."
  type        = string
  sensitive   = true

  validation {
    condition     = length(var.foma_password) >= 16 && !startswith(var.foma_password, "CHANGE_ME")
    error_message = "foma_password must be at least 16 characters and must not be the CHANGE_ME placeholder."
  }
}

variable "dmitry_password" {
  description = "Basic Auth password for the login dmitry. Lives in infra/auth.auto.tfvars (gitignored)."
  type        = string
  sensitive   = true

  validation {
    condition     = length(var.dmitry_password) >= 16 && !startswith(var.dmitry_password, "CHANGE_ME")
    error_message = "dmitry_password must be at least 16 characters and must not be the CHANGE_ME placeholder."
  }
}
