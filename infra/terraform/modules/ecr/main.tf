resource "aws_ecr_repository" "frontend" {
  name                 = "${var.project_name}-frontend"
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = {
    Name = "${var.project_name}-frontend"
  }
}

resource "terraform_data" "push_frontend_image" {
  depends_on = [aws_ecr_repository.frontend]

  provisioner "local-exec" {
    command = <<EOT
      # Authenticate Docker with ECR using the specified AWS CLI profile
      docker logout
      aws ecr get-login-password --region ${var.region} --profile ${var.profile} | docker login --username AWS --password-stdin ${aws_ecr_repository.frontend.repository_url}

      # Build and push frontend image
      cd ../client
      docker build -t frontend:latest .
      docker tag frontend:latest ${aws_ecr_repository.frontend.repository_url}:latest
      docker push ${aws_ecr_repository.frontend.repository_url}:latest
    EOT
  }
}
