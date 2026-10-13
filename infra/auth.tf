locals {
  # Expected Authorization header values for the two logins.
  basic_auth_tokens = [
    "Basic ${base64encode("foma:${var.foma_password}")}",
    "Basic ${base64encode("dmitry:${var.dmitry_password}")}",
  ]
}

# Viewer-request function: www -> apex redirect, then Basic Auth (foma, dmitry).
# The rendered code embeds the encoded credentials, so Terraform treats it as
# sensitive (it is derived from sensitive variables) and keeps it out of plans.
resource "aws_cloudfront_function" "auth" {
  name    = "foma-portal-basic-auth"
  comment = "Basic Auth for foma and dmitry, www to apex redirect"
  runtime = "cloudfront-js-2.0"
  publish = true

  code = templatefile("${path.module}/auth-function.js.tftpl", {
    apex_domain = var.domain_name
    tokens      = local.basic_auth_tokens
  })
}
