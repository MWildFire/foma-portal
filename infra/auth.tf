locals {
  # SHA-256 digests of the Authorization header each login must send, that is of
  # "Basic base64(login:password)". Only the digests reach the function code and the
  # state. A digest of a random 24-character password cannot be reversed in practice.
  basic_auth_token_hashes = [
    sha256("Basic ${base64encode("foma:${var.foma_password}")}"),
    sha256("Basic ${base64encode("dmitry:${var.dmitry_password}")}"),
  ]
}

# Viewer-request function: www -> apex redirect, then Basic Auth (foma, dmitry).
# The rendered code embeds the digests above, which are derived from sensitive
# variables, so Terraform treats it as sensitive and keeps it out of plans.
resource "aws_cloudfront_function" "auth" {
  name    = "foma-portal-basic-auth"
  comment = "Basic Auth for foma and dmitry, www to apex redirect"
  runtime = "cloudfront-js-2.0"
  publish = true

  code = templatefile("${path.module}/auth-function.js.tftpl", {
    apex_domain  = var.domain_name
    token_hashes = local.basic_auth_token_hashes
  })
}
