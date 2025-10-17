# Cookie-Consent & Google Tag Manager Setup

## Übersicht

Ihre Website verwendet jetzt eine eigene, GDPR-konforme Cookie-Consent-Lösung mit Google Tag Manager Integration (Consent Mode V2).

## Features

✅ **GDPR/DSGVO-konform** - Entspricht den EU-Datenschutzrichtlinien  
✅ **Google Consent Mode V2** - Modernste Integration mit Google Tag Manager  
✅ **Responsive Design** - Funktioniert auf allen Geräten perfekt  
✅ **Design-Integration** - Passt perfekt zu Ihrem rose/amber Farbschema  
✅ **Granulare Kontrolle** - User können einzelne Cookie-Kategorien steuern  
✅ **LocalStorage-Speicherung** - Präferenzen werden lokal gespeichert  
✅ **Permanenter Cookie-Button** - Jederzeit Zugriff auf Einstellungen (linke untere Ecke)  

## Google Tag Manager ID einrichten

### Schritt 1: GTM-ID in index.html eintragen

Öffnen Sie `/index.html` und ersetzen Sie **`GTM-XXXXXXX`** an **2 Stellen**:

1. **Im `<head>` Bereich** (Zeile 87):
```javascript
})(window,document,'script','dataLayer','GTM-XXXXXXX'); // Hier Ihre GTM-ID eintragen
```

2. **Im `<body>` Bereich** (Zeile 121):
```html
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
```

### Schritt 2: Ihre GTM-ID finden

1. Gehen Sie zu [Google Tag Manager](https://tagmanager.google.com/)
2. Wählen Sie Ihren Container aus
3. Ihre GTM-ID steht oben rechts (Format: `GTM-XXXXXXX`)

Beispiel: `GTM-N8GH7KL`

## Cookie-Kategorien

Die Lösung bietet 3 Cookie-Kategorien:

### 1. Notwendige Cookies ✓ (immer aktiv)
- Speichern Cookie-Präferenzen
- Session-Management
- Security

### 2. Analyse & Statistik (optional)
- Google Analytics
- Google Tag Manager Events
- Anonyme Nutzungsstatistiken

**GTM Consent Signals:**
- `analytics_storage`: granted/denied
- `personalization_storage`: granted/denied

### 3. Marketing & Personalisierung (optional)
- Google Ads
- Social Media Plugins
- Retargeting

**GTM Consent Signals:**
- `ad_storage`: granted/denied
- `ad_user_data`: granted/denied
- `ad_personalization`: granted/denied

## Google Tag Manager Konfiguration

### Consent Mode V2 nutzen

In GTM können Sie nun Consent-basierte Tags erstellen:

1. **Analytics Tag erstellen:**
   - Trigger: Alle Seiten
   - Zusätzliche Einstellungen > Consent Settings
   - Erforderliche Consents: `analytics_storage`

2. **Marketing Tag erstellen:**
   - Trigger: Alle Seiten
   - Consent Settings
   - Erforderliche Consents: `ad_storage`, `ad_user_data`

### Custom Events

Die Cookie-Consent-Lösung sendet folgende Events an GTM:

```javascript
dataLayer.push({
  event: 'cookie_consent_update',
  consent_analytics: true/false,
  consent_marketing: true/false
})
```

Sie können damit Trigger in GTM erstellen, z.B.:
- Event Name: `cookie_consent_update`
- Bedingung: `consent_analytics` equals `true`

## Design-Anpassungen

Die Cookie-Banner nutzt Ihre bestehenden CSS-Variablen:

```css
/* Primärfarben */
--color-primary: rose-500
--color-secondary: amber-500

/* Buttons */
- Akzeptieren: bg-gradient-to-r from-rose-500 to-rose-600
- Ablehnen: bg-gray-200
- Einstellungen: border-2 border-gray-300
```

### Farben anpassen

Wenn Sie die Farben ändern möchten, bearbeiten Sie:
`/src/components/common/CookieConsent.tsx`

Suchen Sie nach:
- `from-rose-500 to-rose-600` → Ihre Farben
- `border-rose-200` → Ihre Border-Farbe
- `bg-rose-50` → Ihre Hintergrundfarbe

## Wie es funktioniert

### Für Besucher:innen
1. Banner erscheint nach 1 Sekunde beim ersten Besuch
2. Sie können wählen:
   - Alle akzeptieren
   - Nur Notwendige
   - Individuelle Einstellungen
3. Präferenzen werden in LocalStorage gespeichert
4. **Nach dem Consent:** Permanenter Cookie-Button erscheint in der linken unteren Ecke
   - Rose/Amber Gradient (fixed bottom-6 left-6)
   - Hover-Effekt mit Scale & Rotation
   - Klick öffnet Einstellungs-Modal
   - User können Präferenzen jederzeit ändern

## Testen der Implementierung

### 1. Cookie-Banner testen

1. Öffnen Sie Ihre Website
2. Der Banner erscheint nach 1 Sekunde
3. Testen Sie alle Buttons:
   - "Alle akzeptieren"
   - "Nur Notwendige"
   - "Einstellungen"
4. **Nach Consent:** Prüfen Sie, ob Cookie-Button links unten erscheint
5. Klicken Sie auf Cookie-Button → Einstellungen sollten öffnen

### 2. GTM Consent testen

1. Öffnen Sie Chrome DevTools
2. Console-Tab
3. Geben Sie ein:
```javascript
console.log(dataLayer)
```

Sie sollten Consent-Events sehen:
```javascript
{
  event: 'consent',
  consent_analytics: true,
  consent_marketing: false
}
```

### 3. LocalStorage prüfen

1. Chrome DevTools > Application > Local Storage
2. Suchen Sie nach:
   - `cookie-consent` → Gespeicherte Präferenzen
   - `cookie-consent-date` → Zeitstempel

### 4. GTM Preview Mode

1. GTM öffnen > Preview
2. Ihre Website aufrufen
3. Prüfen Sie, welche Tags feuern:
   - Mit Consent ✓
   - Ohne Consent ✗

## Datenschutzerklärung aktualisieren

Vergessen Sie nicht, Ihre Datenschutzerklärung zu aktualisieren:

**Hinzufügen:**
- Beschreibung der Cookie-Kategorien
- Google Tag Manager Nutzung
- Google Consent Mode V2
- Widerrufsrecht
- Speicherdauer (LocalStorage)

**Seite:** `/src/pages/datenschutz.tsx`

## Troubleshooting

### Banner erscheint nicht

1. Prüfen Sie Browser-Console auf Fehler
2. Löschen Sie LocalStorage: `localStorage.removeItem('cookie-consent')`
3. Seite neu laden

### GTM funktioniert nicht

1. Prüfen Sie, ob GTM-ID korrekt ist (beide Stellen!)
2. Prüfen Sie GTM-Container-Status (aktiv?)
3. Network-Tab prüfen: Wird `gtm.js` geladen?

### Consent wird nicht gespeichert

1. Browser erlaubt LocalStorage?
2. Inkognito-Modus deaktiviert LocalStorage
3. Browser-Einstellungen prüfen

## Support & Anpassungen

Bei Fragen oder gewünschten Anpassungen:
- Design-Änderungen: `/src/components/common/CookieConsent.tsx`
- GTM-Events: Siehe `updateGTMConsent()` Funktion
- Neue Cookie-Kategorien: `CookiePreferences` Interface erweitern

## Weitere Ressourcen

- [Google Consent Mode V2 Dokumentation](https://support.google.com/analytics/answer/9976101)
- [Google Tag Manager Guide](https://support.google.com/tagmanager/answer/6103696)
- [DSGVO Cookie-Richtlinien](https://www.datenschutz.org/cookies/)

---

**Erstellt:** Oktober 2024  
**Version:** 1.0  
**Status:** ✅ Production-ready
