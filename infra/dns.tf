# Step 1: the hosted zone. Its four name servers go into the registrar by hand.
resource "aws_route53_zone" "site" {
  name    = var.domain_name
  comment = "Foma Learning Portal"
}

# Step 2 (custom_domain_enabled = true): certificate, validation records, aliases.
# Apply only after `dig NS <domain> +short` shows the Route 53 name servers,
# otherwise DNS validation cannot succeed.
resource "aws_acm_certificate" "site" {
  count = var.custom_domain_enabled ? 1 : 0

  domain_name               = var.domain_name
  subject_alternative_names = ["www.${var.domain_name}"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = var.custom_domain_enabled ? {
    for dvo in aws_acm_certificate.site[0].domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    }
  } : {}

  zone_id         = aws_route53_zone.site.zone_id
  name            = each.value.name
  type            = each.value.type
  records         = [each.value.record]
  ttl             = 60
  allow_overwrite = true
}

resource "aws_acm_certificate_validation" "site" {
  count = var.custom_domain_enabled ? 1 : 0

  certificate_arn         = aws_acm_certificate.site[0].arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

locals {
  alias_records = {
    apex_a    = { name = var.domain_name, type = "A" }
    apex_aaaa = { name = var.domain_name, type = "AAAA" }
    www_a     = { name = "www.${var.domain_name}", type = "A" }
    www_aaaa  = { name = "www.${var.domain_name}", type = "AAAA" }
  }
}

resource "aws_route53_record" "alias" {
  for_each = var.custom_domain_enabled ? local.alias_records : {}

  zone_id = aws_route53_zone.site.zone_id
  name    = each.value.name
  type    = each.value.type

  alias {
    name                   = aws_cloudfront_distribution.site.domain_name
    zone_id                = aws_cloudfront_distribution.site.hosted_zone_id
    evaluate_target_health = false
  }
}
