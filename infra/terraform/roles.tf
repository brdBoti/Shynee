resource "aws_iam_role" "demo_eks_role" {
  name = "shynee-eks-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = { Service = "eks.amazonaws.com" }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "demo_attach" {
  role       = aws_iam_role.demo_eks_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
}
