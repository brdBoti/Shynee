# Shynee – Car Detailing Web Application

Visit the live site at [shynee.hu](https://shynee.hu)

Shynee is a **React-based** web application designed to present the Shynee car detailing services in a clean and elegant way.  
Currently, the app functions as a **company introduction page** with service descriptions, branding elements (including the official Shynee logo), and a redirection to an external booking platform (Salonic).  

This repository (`shynee`) will serve as the **monorepo** containing:

- The **frontend** (React)  
- Infrastructure as Code (IaC) using **Terraform** for AWS EKS  
- Docker setup for containerization and local development  

---

## Project Roadmap

### Phase 1 – Core Development (Done)

- Build React frontend (client-side app)  
- Setup React Router for navigation  
- Integrate company branding (logo, colors, design)  
- Add redirection to external booking platform (Salonic)  

### Phase 2 – Containerization (In Progress)

- Dockerize frontend React app  
- Add `.env.example` for environment variables  

---

### Phase 3 – Infrastructure on AWS (Planned)

- Provision AWS resources with Terraform:  
  - VPC, subnets, security groups  
  - EKS cluster for future deployments  
- Push Docker images to Amazon ECR  
- Deploy React app to EKS in the future  

Planned monorepo structure:  
```bash
Shynee/
├── client/                     # React frontend
│
├── infra/
│   └── terraform/
│       ├── .gitignore          
│       ├── main.tf         
│       ├── variables.tf
│       ├── terraform.tfvars
│       ├── providers.tf
│       ├── versions.tf
│       │
│       └── modules/
│           ├── vpc/
│           │   ├── main.tf
│           │   ├── outputs.tf
│           │   └── variables.tf
│           │
│           ├── eks/
│           │   ├── main.tf
│           │   ├── outputs.tf
│           │   └── variables.tf
│           │
│           └── ecr/
│               ├── main.tf
│               ├── outputs.tf
│               └── variables.tf
│
└── README.md
```
## Tech Stack

**Frontend**  
- React (Vite or CRA)  
- React Router  
- CSS (custom design + Shynee branding)  

**Infrastructure**  
- Docker for containerization  
- Terraform (AWS provider) for IaC  
- AWS EKS (cluster provisioned via Terraform, deployments planned)  
- AWS ECR for container registry  

---

## Current Deployment

The Shynee React app is currently hosted on **Netlify** for production.  
Future deployments will be handled through **Docker + AWS EKS** for scalability and reliability.  

---
