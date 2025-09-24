# Shynee – Car Detailing Web Application

Visit the live site at [shynee.hu](https://shynee.hu)

Shynee is a **React-based** web application designed to present the Shynee car detailing services in a clean and elegant way.  
Currently, the app functions as a **company introduction page** with service descriptions, branding elements (including the official Shynee logo), and a redirection to an external booking platform (Salonic).  

This repository (`shynee`) will serve as the **monorepo** containing:

- The **frontend** (React)  
- Infrastructure as Code (IaC) using **Terraform** for AWS EKS  
- Kubernetes manifests for deployment  
- Docker setup for containerization and local development  

---

## Project Roadmap

### Phase 1 – Core Development (Done)

- Build React frontend (client-side app)  
- Setup React Router for navigation  
- Integrate company branding (logo, colors, design)  
- Add redirection to external booking platform (Salonic)  

Project structure (current):  
```bash
client/               # React frontend
```

### Phase 2 – Containerization (In Progress)

- Dockerize frontend React app  
- Setup `docker-compose` for local development  
- Add `.env.example` for environment variables  

Example `Dockerfile` for React app:  
```dockerfile
# Stage 1 – Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 – Serve
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist . 
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

### Phase 3 – Infrastructure on AWS

- Provision AWS resources with Terraform  
  - VPC, subnets, security groups  
  - EKS cluster for Kubernetes  
- Push Docker images to Amazon ECR  
- Deploy React app to EKS with Kubernetes manifests  

Planned monorepo structure:  
```bash
infra/                       # Infra-as-code (Terraform + K8s)
│   ├── terraform/
│   │   ├── provider.tf       # AWS provider config
│   │   ├── vpc.tf            # VPC definition
│   │   ├── eks.tf            # EKS cluster creation
│   │   ├── outputs.tf
│   │   └── variables.tf
│   │
│   └── k8s/                  # Kubernetes manifests
│       ├── react-deployment.yaml
│       ├── react-service.yaml
```

---

## Tech Stack

**Frontend**  
- React (Vite or CRA)  
- React Router  
- CSS (custom design + Shynee branding)  

**Infrastructure**  
- Docker & Docker Compose  
- Terraform (AWS provider)  
- Kubernetes (AWS EKS)  
- AWS ECR for container registry  

---

## Current Deployment

The Shynee React app is currently hosted on **Netlify** for production.  
Future deployments will be handled through **Docker + AWS EKS** for scalability and reliability.
