# Google Tag Manager Setup Guide

## Übersicht

Ihre Website sendet jetzt folgende Events an GTM (Container-ID: `GTM-P7STZ72R`):

### 1. **consent_default** (beim Seitenload)
Initialer Consent-Status - alles auf "denied"

### 2. **consent_update** (bei User-Entscheidung)
Aktualisierter Consent-Status basierend auf User-Wahl

### 3. **cookie_consent_update** (Custom Event)
Zusätzliches Event mit boolean Werten für einfachere Trigger

---

## GTM Events im Detail

### Event: `consent_default`
Wird beim Seitenload ausgelöst, bevor User eine Wahl getroffen hat.

**DataLayer Variablen:**
```javascript
{
  event: 'consent_default',
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500
}
```

### Event: `consent_update`
Wird ausgelöst, wenn User Consent erteilt oder ändert.

**DataLayer Variablen:**
```javascript
{
  event: 'consent_update',
  analytics_storage: 'granted' | 'denied',
  ad_storage: 'granted' | 'denied',
  ad_user_data: 'granted' | 'denied',
  ad_personalization: 'granted' | 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'granted' | 'denied',
  security_storage: 'granted'
}
```

### Event: `cookie_consent_update`
Custom Event für einfachere Trigger-Konfiguration.

**DataLayer Variablen:**
```javascript
{
  event: 'cookie_consent_update',
  consent_analytics: true | false,
  consent_marketing: true | false,
  consent_necessary: true
}
```

---

## GTM Konfiguration

### Schritt 1: DataLayer-Variablen erstellen

Gehen Sie zu **Variablen** → **Neu**:

1. **Variable: `consent_analytics`**
   - Typ: Datenschichtvariable
   - Name der Datenschichtvariable: `consent_analytics`
   - Speichern

2. **Variable: `consent_marketing`**
   - Typ: Datenschichtvariable
   - Name der Datenschichtvariable: `consent_marketing`
   - Speichern

3. **Variable: `analytics_storage`**
   - Typ: Datenschichtvariable
   - Name der Datenschichtvariable: `analytics_storage`
   - Speichern

4. **Variable: `ad_storage`**
   - Typ: Datenschichtvariable
   - Name der Datenschichtvariable: `ad_storage`
   - Speichern

---

### Schritt 2: Trigger erstellen

#### Trigger 1: "Analytics Consent Granted"
```
Trigger-Typ: Benutzerdefiniertes Ereignis
Ereignisname: cookie_consent_update
Dieses Tag wird ausgelöst, wenn: Einige benutzerdefinierte Ereignisse
  consent_analytics ist gleich true
```

#### Trigger 2: "Marketing Consent Granted"
```
Trigger-Typ: Benutzerdefiniertes Ereignis
Ereignisname: cookie_consent_update
Dieses Tag wird ausgelöst, wenn: Einige benutzerdefinierte Ereignisse
  consent_marketing ist gleich true
```

#### Trigger 3: "Consent Update - Any"
```
Trigger-Typ: Benutzerdefiniertes Ereignis
Ereignisname: consent_update
```

---

### Schritt 3: Google Analytics 4 Tag erstellen (Beispiel)

**Tag-Name:** GA4 - Configuration  
**Tag-Typ:** Google Analytics: GA4-Konfiguration

**Konfiguration:**
- Mess-ID: `G-XXXXXXXXXX` (Ihre GA4 Mess-ID)

**Erweiterte Einstellungen:**
- Consent-Einstellungen:
  - ✓ Erfordert Zustimmung für Analytics Storage
  - ✓ Erfordert Zustimmung für Personalization Storage

**Trigger:**
- Seitenaufruf - Alle Seiten
- Analytics Consent Granted

**So funktioniert es:**
1. GA4 lädt erst, wenn Analytics Consent erteilt wurde
2. Bei consent_update wird GA4 automatisch aktiviert
3. Ohne Consent → Kein Tracking

---

### Schritt 4: Google Ads Conversion Tag (Beispiel)

**Tag-Name:** Google Ads - Conversion  
**Tag-Typ:** Google Ads Conversion Tracking

**Konfiguration:**
- Conversion-ID: `AW-XXXXXXXXXX`
- Conversion-Label: `xxxxxxxxxxxxx`

**Consent-Einstellungen:**
- ✓ Erfordert Zustimmung für Ad Storage
- ✓ Erfordert Zustimmung für Ad User Data
- ✓ Erfordert Zustimmung für Ad Personalization

**Trigger:**
- Marketing Consent Granted
- Form Submission (oder anderer Conversion-Event)

---

### Schritt 5: Custom HTML Tags (Optional)

Für andere Tracking-Tools (z.B. Facebook Pixel, Hotjar):

**Tag-Name:** Facebook Pixel  
**Tag-Typ:** Benutzerdefiniertes HTML

**HTML:**
```html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

**Consent-Einstellungen:**
- ✓ Erfordert Zustimmung für Ad Storage

**Trigger:**
- Marketing Consent Granted

---

## Testing & Debugging

### 1. GTM Preview Mode

1. Öffnen Sie GTM → **Preview**
2. Geben Sie Ihre Website-URL ein
3. Die Preview öffnet sich

**Was Sie sehen sollten:**

**Beim Seitenload (vor Consent):**
```
Event: consent_default
  analytics_storage: denied
  ad_storage: denied
```

**Nach "Alle akzeptieren":**
```
Event: consent_update
  analytics_storage: granted
  ad_storage: granted
  
Event: cookie_consent_update
  consent_analytics: true
  consent_marketing: true
```

**Nach "Nur Notwendige":**
```
Event: consent_update
  analytics_storage: denied
  ad_storage: denied
  
Event: cookie_consent_update
  consent_analytics: false
  consent_marketing: false
```

### 2. Browser Console

Öffnen Sie die Browser-Console (F12) und geben Sie ein:

```javascript
// DataLayer anzeigen
console.log(dataLayer)

// Consent Status prüfen
dataLayer.filter(event => event.event === 'consent_update')

// Letzte Cookie-Consent-Entscheidung
dataLayer.filter(event => event.event === 'cookie_consent_update').pop()
```

Sie sollten sehen:
```javascript
✅ Cookie Consent updated: {
  analytics: true,
  marketing: false,
  dataLayer_events: 8
}
```

### 3. Chrome Extension: Google Tag Assistant

1. Installieren Sie: [Tag Assistant](https://tagassistant.google.com/)
2. Öffnen Sie Ihre Website
3. Klicken Sie auf das Tag Assistant Icon
4. Prüfen Sie:
   - GTM Container lädt ✓
   - Events werden gefeuert ✓
   - Tags werden blockiert/aktiviert basierend auf Consent ✓

---

## Best Practices

### 1. Server-side Tagging (Erweitert)
Für noch bessere Performance und Datenschutz:
- Richten Sie einen GTM Server-Container ein
- Leiten Sie Events über Ihren eigenen Server
- Reduziert Client-side Tracking

### 2. Consent Mode v2 Compliance
Ihre Implementation ist bereits v2-ready mit:
- ✓ `ad_user_data`
- ✓ `ad_personalization`
- ✓ `analytics_storage`
- ✓ `ad_storage`

### 3. Tag-Firing Regeln

**Notwendige Tags** (immer feuern):
- Error Tracking
- Core Website Funktionalität
- Security-relevante Tags

**Analytics Tags** (nur mit Consent):
- Google Analytics
- Matomo/Piwik
- Hotjar
- Microsoft Clarity

**Marketing Tags** (nur mit Consent):
- Google Ads
- Facebook Pixel
- LinkedIn Insight Tag
- TikTok Pixel

### 4. Regelmäßige Audits
- Prüfen Sie monatlich, welche Tags aktiv sind
- Entfernen Sie ungenutzte Tags
- Aktualisieren Sie Consent-Einstellungen

---

## Häufige GTM Tag-Setups

### Google Analytics 4 (GA4)

**Tag erstellen:**
1. Tag-Typ: Google Analytics: GA4-Konfiguration
2. Mess-ID: Ihre GA4 Property-ID
3. Consent: Analytics Storage erforderlich
4. Trigger: Seitenaufruf + Analytics Consent Granted

**Events tracken:**
```javascript
// Custom Event in GTM erstellen
window.dataLayer.push({
  event: 'button_click',
  button_name: 'CTA Button',
  button_location: 'Hero Section'
});
```

### Google Ads Conversion

**Tag erstellen:**
1. Tag-Typ: Google Ads Conversion Tracking
2. Conversion-ID & Label eintragen
3. Consent: Ad Storage + Ad User Data + Ad Personalization
4. Trigger: Marketing Consent + Conversion-Event

### Facebook Pixel

**Tag erstellen:**
1. Tag-Typ: Custom HTML
2. Facebook Pixel Code einfügen
3. Consent: Ad Storage erforderlich
4. Trigger: Marketing Consent Granted

---

## Troubleshooting

### Problem: Tags feuern nicht

**Lösung:**
1. Prüfen Sie GTM Preview Mode
2. Checken Sie Consent-Status: `console.log(dataLayer)`
3. Verifizieren Sie Trigger-Bedingungen
4. Prüfen Sie, ob Tag Consent-Einstellungen hat

### Problem: Doppeltes Tracking

**Lösung:**
1. Prüfen Sie, ob Tags mehrfach ausgelöst werden
2. Nutzen Sie "Event feuert nur einmal pro Ereignis"
3. Checken Sie Trigger-Prioritäten

### Problem: Consent wird nicht gespeichert

**Lösung:**
1. Prüfen Sie LocalStorage: `localStorage.getItem('cookie-consent')`
2. Browser erlaubt LocalStorage?
3. Inkognito-Modus aktiv?

---

## Support & Ressourcen

- [GTM Dokumentation](https://support.google.com/tagmanager)
- [Consent Mode v2 Guide](https://support.google.com/analytics/answer/9976101)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)

---

**Setup-Status:** ✅ Production-ready  
**Container-ID:** GTM-P7STZ72R  
**Letzte Aktualisierung:** Oktober 2024
