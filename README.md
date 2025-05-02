# React Web App Deployment with Kubernetes and ArgoCD

This project demonstrates how to deploy a React web application using Docker, Kubernetes, and ArgoCD. The app is built with React and served using Nginx inside a Docker container. Kubernetes is used for container orchestration, and ArgoCD (configured via its UI) is used for continuous deployment following GitOps principles.

---

## ✨ Features

- ⚛️ React frontend with modern JavaScript
- 🐳 Dockerized and served via Nginx
- ☸️ Kubernetes deployment for container orchestration
- 🚀 GitOps-style CI/CD using ArgoCD UI
- 📦 Clean, modular, and reproducible project setup


---

## 🚀 Getting Started

### 🔧 Prerequisites

Make sure the following are installed:

- Docker
- Kubernetes (Minikube, Kind, or any cluster)
- kubectl
- Node.js and npm (for local development/testing)
- ArgoCD (installed in your cluster)

---

## 📥 Clone the Repository

```bash
git clone https://github.com/Kobby-Jones/react-deployment-with-k8s-ArgoCD.git
cd react-deployment-with-k8s-ArgoCD


```

## Run React App Locally (Optional)
```bash
npm install
npm start

```
- Visit (https://localhost:3000)


## 🚀 Set Up ArgoCD (Using UI)
### This project uses the ArgoCD Web UI for configuring the deployment.
1. ### Access the ArgoCD UI
Port-forward
```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443

```
- Visit (https://localhost:8080)

2. ### Login to ArgoCD.(Username = admin)
### Use the following command to get the initial password for argocd 'admin' user(This command works when you have the ArgoCD CLI installed on your device)
```bash
argocd admin initial-password -n argocd

```

3. ### Click "New App" and fill in:
Application Name: react-k8s-app

Project: default

Sync Policy: Manual or Automatic (your choice)

Repository URL: Your GitHub repo URL

Path: k8s

Cluster: https://kubernetes.default.svc

Namespace: e.g., default(The namespace should be created to match the ones in the service.yml and deployment.yml files)


4. ### Click "Create", then "Sync" to deploy the app.

5. ### You can visit the running web page by running the following command:
```bash
minikube service your-service-name -n your-namespace

```
<!-- ## Monitoring with Prometheus and Grafana
Adding the Helm repo for kube-prometheus-stack
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

```
create k8s namespace for prometheus
```bash
kubectl create namespace prometheus

```
# deploy chart
```bash
helm install prometheus prometheus-community/kube-prometheus-stack -n prometheus

```
## Access Grafana
```bash
kubectl port-forward svc/prometheus-grafana -n prometheus 3000:80

```
### Open your browser and visit: http://localhost:3000
### Use the following command (Windows) to get the initial password for the grafana admin user
```bash
 [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String((kubectl -n prometheus get secret prometheus-grafana -o jsonpath="{.data.admin-password}")))

``` -->





# 📸 Screenshots
<p float="left">
  <img src="screenshorts\argocd-flow.png" width="400"/>
  <img src="screenshorts\argocd-ui-tree.png" width="400"/>
  <img src="screenshorts\argocd-ui-list.png" width="400"/>
  <img src="screenshorts\webpage-1.png" width="400"/>
  <img src="screenshorts\webpage-2.png" width="400"/>
</p>


# 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [ArgoCD](https://argo-cd.readthedocs.io/)
- [Nginx](https://www.nginx.com/)
