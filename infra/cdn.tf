locals {
  s3_origin_id = "site-s3"

  # AWS managed cache policy "CachingOptimized".
  cache_policy_caching_optimized = "658327ea-f89d-4fab-a63d-7e88639e58f6"
}

resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "foma-portal-site"
  description                       = "OAC for the Foma Learning Portal site bucket"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "site" {
  comment             = "Foma Learning Portal"
  enabled             = true
  is_ipv6_enabled     = true
  http_version        = "http2and3"
  price_class         = "PriceClass_200"
  default_root_object = "index.html"

  # Step 1 serves on *.cloudfront.net only. Step 2 adds the real hostnames.
  aliases = var.custom_domain_enabled ? [var.domain_name, "www.${var.domain_name}"] : []

  origin {
    origin_id                = local.s3_origin_id
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  default_cache_behavior {
    target_origin_id           = local.s3_origin_id
    viewer_protocol_policy     = "redirect-to-https"
    allowed_methods            = ["GET", "HEAD"]
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    cache_policy_id            = local.cache_policy_caching_optimized
    response_headers_policy_id = aws_cloudfront_response_headers_policy.site.id

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.auth.arn
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = !var.custom_domain_enabled
    acm_certificate_arn            = one(aws_acm_certificate_validation.site[*].certificate_arn)
    ssl_support_method             = var.custom_domain_enabled ? "sni-only" : null
    minimum_protocol_version       = var.custom_domain_enabled ? "TLSv1.2_2021" : null
  }
}
