#!/bin/bash

# GitHub Container Registry Secret Update Script
# Dieses Script aktualisiert das ghcr-secret im skit Namespace

echo "🔐 GitHub Container Registry Secret Update"
echo "=========================================="
echo ""

# Prüfen ob kubectl verfügbar ist
if ! command -v kubectl &> /dev/null; then
    echo "❌ kubectl ist nicht installiert!"
    exit 1
fi

# Eingabe des GitHub Tokens
echo "Bitte geben Sie Ihren GitHub Personal Access Token ein:"
echo "(Der Token benötigt die Berechtigung 'read:packages')"
echo ""
read -sp "GitHub Token: " GITHUB_TOKEN
echo ""
echo ""

# Eingabe des GitHub Usernames
echo "Bitte geben Sie Ihren GitHub Username ein:"
read -p "GitHub Username: " GITHUB_USERNAME
echo ""

# Eingabe der Email
echo "Bitte geben Sie Ihre Email-Adresse ein:"
read -p "Email: " GITHUB_EMAIL
echo ""

# Bestätigung
echo "=========================================="
echo "Folgende Daten werden verwendet:"
echo "Username: $GITHUB_USERNAME"
echo "Email: $GITHUB_EMAIL"
echo "Token: ${GITHUB_TOKEN:0:10}..."
echo "Namespace: skit"
echo "Secret Name: ghcr-secret"
echo "=========================================="
echo ""
read -p "Fortfahren? (j/n): " CONFIRM

if [ "$CONFIRM" != "j" ] && [ "$CONFIRM" != "J" ]; then
    echo "❌ Abgebrochen"
    exit 0
fi

echo ""
echo "🗑️  Lösche altes Secret..."
kubectl delete secret ghcr-secret -n skit 2>/dev/null || echo "   (Secret existierte nicht)"

echo "✨ Erstelle neues Secret..."
kubectl create secret docker-registry ghcr-secret \
  --docker-server=ghcr.io \
  --docker-username="$GITHUB_USERNAME" \
  --docker-password="$GITHUB_TOKEN" \
  --docker-email="$GITHUB_EMAIL" \
  --namespace=skit

if [ $? -eq 0 ]; then
    echo "✅ Secret erfolgreich erstellt!"
    echo ""
    echo "🔄 Starte Deployment neu..."
    kubectl rollout restart deployment skit-website -n skit
    echo ""
    echo "✅ Deployment wird neu gestartet!"
    echo ""
    echo "📊 Status überprüfen mit:"
    echo "   kubectl get pods -n skit -l app=skit-website"
    echo "   kubectl describe pod -n skit -l app=skit-website"
else
    echo "❌ Fehler beim Erstellen des Secrets!"
    exit 1
fi
