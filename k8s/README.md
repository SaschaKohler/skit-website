# Kubernetes Deployment Setup

## GitHub Container Registry Authentication

Um das private Image von GitHub Container Registry (GHCR) zu pullen, benötigen Sie ein Kubernetes Secret mit Ihren GitHub-Zugangsdaten.

### Schritt 1: GitHub Personal Access Token erstellen

1. Gehen Sie zu GitHub Settings: https://github.com/settings/tokens
2. Klicken Sie auf **"Generate new token"** → **"Generate new token (classic)"**
3. Geben Sie dem Token einen Namen (z.B. "k8s-ghcr-pull")
4. Wählen Sie folgende Berechtigung:
   - ✅ `read:packages` (Download packages from GitHub Package Registry)
5. Klicken Sie auf **"Generate token"**
6. **Kopieren Sie den Token sofort** (er wird nur einmal angezeigt!)

### Schritt 2: Kubernetes Secret erstellen

Ersetzen Sie `YOUR_GITHUB_USERNAME` und `YOUR_GITHUB_TOKEN` mit Ihren Daten:

```bash
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=YOUR_GITHUB_USERNAME \
  --docker-password=YOUR_GITHUB_TOKEN \
  --docker-email=YOUR_EMAIL@example.com
```

**Beispiel:**
```bash
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username=saschakohler \
  --docker-password=ghp_xxxxxxxxxxxxxxxxxxxx \
  --docker-email=sascha@example.com
```

### Schritt 3: Deployment anwenden

```bash
kubectl apply -f k8s/deployment.yaml
```

### Schritt 4: Status überprüfen

```bash
# Deployment Status
kubectl get deployment skit-website

# Pod Status
kubectl get pods -l app=skit-website

# Pod Details (inkl. Image Pull Status)
kubectl describe pod -l app=skit-website
```

## Bestehende Secrets überprüfen

```bash
# Alle Secrets auflisten
kubectl get secrets

# Spezifisches Secret anzeigen
kubectl get secret ghcr-secret -o yaml
```

## Secret aktualisieren

Falls Sie den Token ändern müssen:

```bash
# Altes Secret löschen
kubectl delete secret ghcr-secret

# Neues Secret erstellen (siehe Schritt 2)
kubectl create secret docker-registry ghcr-secret ...

# Deployment neu starten
kubectl rollout restart deployment skit-website
```

## Troubleshooting

### ImagePullBackOff Error

```bash
# Pod Events anzeigen
kubectl describe pod -l app=skit-website

# Pod Logs anzeigen
kubectl logs -l app=skit-website
```

Häufige Ursachen:
- ❌ Token hat nicht die richtige Berechtigung (`read:packages`)
- ❌ Token ist abgelaufen
- ❌ Username/Token falsch eingegeben
- ❌ Secret-Name stimmt nicht mit `imagePullSecrets` überein

### Image ist privat?

Überprüfen Sie die Sichtbarkeit Ihres Packages:
1. Gehen Sie zu: https://github.com/users/saschakohler/packages/container/skit-services/settings
2. Unter "Danger Zone" → "Change visibility"
3. Stellen Sie sicher, dass Sie Zugriff haben

## Weitere Ressourcen

- [Kubernetes: Pull an Image from a Private Registry](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)
- [GitHub: Working with the Container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
