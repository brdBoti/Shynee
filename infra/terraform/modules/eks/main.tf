# Biztonsági csoport a clusterhez
resource "aws_security_group" "eks_cluster" {
  vpc_id = var.vpc_id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port       = 443
    to_port         = 443
    protocol        = "tcp"
    security_groups = [aws_security_group.eks_nodes.id]
    description     = "Allow worker nodes to communicate with control plane"
  }

  tags = {
    Name = "${var.project_name}-eks-cluster-sg"
  }
}

# Biztonsági csoport a node-okhoz
resource "aws_security_group" "eks_nodes" {
  vpc_id = var.vpc_id

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    self        = true
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "eks-nodes-sg"
  }
}

# EKS cluster
resource "aws_eks_cluster" "this" {
  name     = "${var.project_name}-eks"
  role_arn = aws_iam_role.eks_cluster.arn

  vpc_config {
    subnet_ids         = [var.public_subnet_id, var.private_subnet_id]
    security_group_ids = [aws_security_group.eks_cluster.id]
  }

  enabled_cluster_log_types = ["api", "audit", "authenticator", "controllerManager", "scheduler"]

  depends_on = [
    aws_iam_role_policy_attachment.eks_cluster_policy,
    aws_iam_role_policy_attachment.eks_service_policy
  ]
}

# OIDC provider (service account IAM bindingekhez)
resource "aws_iam_openid_connect_provider" "eks" {
  url             = aws_eks_cluster.this.identity[0].oidc[0].issuer
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["9e99a48a9960b14926bb7f3b02e22da2b0ab7280"]
}

# Node group (frontend / ingress node-ok)
resource "aws_eks_node_group" "frontend" {
  cluster_name    = aws_eks_cluster.this.name
  node_group_name = "frontend-nodes"
  node_role_arn   = aws_iam_role.eks_node.arn
  subnet_ids      = [var.public_subnet_id]

  scaling_config {
    desired_size = 2
    max_size     = 3
    min_size     = 1
  }

  instance_types = ["t3.medium"]

  labels = {
    "node-type" = "frontend"
  }

  tags = {
    Name = "frontend-nodes"
  }

  depends_on = [
    aws_iam_role_policy_attachment.eks_worker_policy,
    aws_iam_role_policy_attachment.eks_vpc_resource_controller,
    aws_iam_role_policy_attachment.eks_cni_policy
  ]
}

# Opcionális: kubeconfig automata frissítés
resource "terraform_data" "configure_kubectl" {
  count = var.configure_kubectl ? 1 : 0
  depends_on = [aws_eks_cluster.this]

  provisioner "local-exec" {
    command = <<EOT
      aws eks update-kubeconfig --region ${var.aws_region} --name ${aws_eks_cluster.this.name} --profile ${var.aws_cli_profile}
    EOT
  }
}
