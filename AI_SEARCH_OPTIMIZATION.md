# KI-Suchmaschinen Optimierung für skit-website

## Übersicht

Diese Dokumentation beschreibt die implementierten Maßnahmen zur Optimierung der skit-website für KI-gestützte Suchmaschinen wie ChatGPT, Claude, Perplexity, Google Bard/Gemini und Bing Copilot.

**Ziel:** Maximale Sichtbarkeit bei KI-Suchen nach Themen wie "WordPress für Gründer:innen", "Website für Einzelunternehmer:innen Österreich", "AMS Gründerprogramm digitale Unterstützung" etc.

---

## 🚀 Implementierte Optimierungen

### 1. Erweiterte JSON-LD Strukturierte Daten

**Datei:** `/index.html`

#### Organization/ProfessionalService Schema
- Vollständige Beschreibung des Services
- Detailliertes `hasOfferCatalog` mit allen Paketen
- `founder` Person-Schema mit Credentials
- `knowsAbout` Felder für Fachkompetenz
- `aggregateRating` für Trust-Signale
- Geo-Koordinaten für lokale Suchen

#### FAQ Schema (FAQPage)
- 10 umfassende Fragen und Antworten
- Deckt alle wichtigen Themen ab:
  - Zeitrahmen (14 Tage)
  - Vorkenntnisse (keine nötig)
  - Kosten (Pakete)
  - DSGVO-Konformität
  - USP (3 Kompetenzen)
  - Service-Umfang
  - Zielgruppe
  - Individuelle Entwicklung
  - Mentoring
  - Erstgespräch

**Warum wichtig?** KI-Systeme bevorzugen strukturierte Daten, da sie leichter zu parsen und zu verstehen sind.

---

### 2. FAQ-Sektion auf der Website

**Dateien:** 
- `/src/components/sections/FAQSection.tsx` (neu)
- `/src/pages/HomePage.tsx` (erweitert)

#### Features:
- Interaktive Accordion-Komponente
- Alle 10 FAQs aus dem Schema
- Visuell ansprechend mit Icons
- CTA für Erstgespräch
- Semantisches HTML mit `<section id="faq">`

**Warum wichtig?** KI-Crawler können sowohl strukturierte Daten als auch sichtbaren Content auswerten. Die Kombination maximiert die Relevanz.

---

### 3. Breadcrumb Schema (BreadcrumbList)

**Dateien:**
- `/src/components/seo/BreadcrumbSchema.tsx` (neu)
- `/src/components/common/Breadcrumbs.tsx` (bereits vorhanden)
- `/src/App.tsx` (erweitert)

#### Features:
- JSON-LD BreadcrumbList Schema
- Dynamische Generierung basierend auf URL
- Position-Attribute für Hierarchie
- Mikrodaten im sichtbaren Breadcrumb

**Warum wichtig?** Klare Seitenstruktur hilft KI-Systemen, die Website-Hierarchie zu verstehen.

---

### 4. AI-Crawler freundliche robots.txt

**Datei:** `/src/utils/generateRobots.js` (erweitert)

#### Explizit erlaubte AI-Crawler:
- **GPTBot** (OpenAI ChatGPT, GPT-4) - Crawl-delay: 1
- **Claude-Web** (Anthropic Claude) - Crawl-delay: 1
- **PerplexityBot** (Perplexity AI) - Crawl-delay: 1
- **Google-Extended** (Google Bard/Gemini) - Crawl-delay: 1
- **BingPreview** (Bing AI/Copilot) - Crawl-delay: 1
- **CCBot** (Common Crawl für AI Training) - Crawl-delay: 2

#### Standard-Crawler:
- Googlebot, Bingbot, DuckDuckBot - alle optimiert

**Warum wichtig?** Explizite Erlaubnis mit niedrigen Crawl-Delays signalisiert Bereitschaft für AI-Indexierung.

---

### 5. AI-Plugin Manifest

**Dateien:**
- `/public/.well-known/ai-plugin.json` (neu)
- `/public/.well-known/openapi.json` (neu)

#### AI-Plugin Features:
- Maschinenlesbare Beschreibung des Services
- `description_for_model` mit ausführlichen Details
- OpenAPI Spezifikation für API-Endpunkte
- Logo und Kontaktinformationen

**Warum wichtig?** Einige KI-Systeme (wie ChatGPT Plugins) können diese Manifeste nutzen, um Services besser zu verstehen.

---

### 6. Optimierte Meta-Descriptions

**Datei:** `/src/utils/seo.ts` (erweitert)

#### Änderungen:
- **Längere, ausführlichere Descriptions** (200-300 Zeichen)
- **Konversationeller Ton** (wie KI-Systeme "denken")
- **Keyword-reich** aber natürlich
- **Alle USPs eingebunden:**
  - "14 Tage"
  - "keine Vorkenntnisse"
  - "AMS Unternehmer-Gründer-Programm"
  - "dipl. Lebens- und Sozialberater"
  - "seit den frühen 90ern"
  - "GDPR Consent V2"
  - "make.com Automatisierung"

#### Optimierte Seiten:
- `/` (Homepage)
- `/about` (Über Sascha Kohler)
- `/services` (Services)
- `/contact` (Kontakt)

**Warum wichtig?** KI-Systeme nutzen Meta-Descriptions als primäre Informationsquelle für Zusammenfassungen.

---

## 🎯 Zielgruppen-Keywords

Die Optimierung fokussiert auf folgende Suchbegriffe:

### Primär:
- WordPress für Gründer:innen Österreich
- Website Einzelunternehmer:innen
- AMS Unternehmer-Gründer-Programm Website
- DSGVO konforme Website Österreich
- Digitaler Mentor Gründung
- WordPress Website 14 Tage

### Sekundär:
- Google Analytics Setup Österreich
- GDPR Cookie-Banner
- Email-Marketing Brevo
- Prozessautomatisierung make.com
- Lebens- und Sozialberater IT
- WordPress Entwickler Wien

### Long-Tail:
- "Wer kann mir bei meiner Website für die Unternehmensgründung helfen?"
- "Brauche ich technische Kenntnisse für WordPress?"
- "Wie lange dauert es, bis meine Website online ist?"
- "Ist meine Website DSGVO-konform?"
- "WordPress Website für AMS Gründerprogramm Teilnehmer"

---

## 📊 Wie KI-Systeme die Website jetzt interpretieren

### ChatGPT / GPT-4:
- Versteht durch FAQ-Schema direkt alle wichtigen Fragen
- Erkennt durch Person-Schema Sascha Kohlers Qualifikationen
- Kann aus Organization-Schema Service-Pakete extrahieren
- Nutzt ausführliche Meta-Descriptions für Antworten

### Claude:
- Parsed strukturierte Daten effizient
- Wertet FAQs als primäre Informationsquelle
- Versteht Zielgruppe durch Keywords und Descriptions
- Erkennt USP (3 Kompetenzen)

### Perplexity:
- Kombiniert strukturierte Daten mit sichtbarem Content
- Zitiert FAQ-Antworten direkt
- Nutzt Breadcrumbs für Kontext
- Verlinkt auf relevante Unterseiten

### Google Bard/Gemini:
- Bevorzugt Schema.org strukturierte Daten
- Wertet FAQ-Schema hoch
- Nutzt Organization-Schema für Knowledge Graph
- Erkennt lokale Relevanz (Wien, Österreich)

---

## 🔄 Wartung & Updates

### Regelmäßig aktualisieren:

1. **FAQ-Schema & FAQ-Sektion:**
   - Bei neuen häufigen Fragen erweitern
   - Antworten bei Service-Änderungen anpassen
   - Beide Dateien synchron halten:
     - `/index.html` (JSON-LD)
     - `/src/components/sections/FAQSection.tsx` (UI)

2. **Organization-Schema:**
   - Neue Services in `serviceType` hinzufügen
   - `hasOfferCatalog` bei Paket-Änderungen aktualisieren
   - `aggregateRating` bei neuen Reviews anpassen

3. **Meta-Descriptions:**
   - Bei neuen Seiten in `/src/utils/seo.ts` ergänzen
   - Bei Service-Änderungen Descriptions aktualisieren
   - Keywords bei Trend-Änderungen anpassen

4. **robots.txt:**
   - Nach Build neu generieren: `npm run generate-robots`
   - Bei neuen AI-Crawlern erweitern

---

## 🚀 Deployment

### Nach jeder Änderung:

```bash
# 1. robots.txt neu generieren
npm run generate-robots

# 2. Build erstellen
npm run build

# 3. Deployen
# (Ihr Deployment-Prozess)
```

### Wichtige Dateien für Deployment:
- `/public/robots.txt` (automatisch generiert)
- `/public/.well-known/ai-plugin.json` (statisch)
- `/public/.well-known/openapi.json` (statisch)
- `/public/sitemap.xml` (automatisch generiert)

---

## 📈 Erfolg messen

### Indikatoren für erfolgreiche AI-Optimierung:

1. **Direkte Tests:**
   - ChatGPT fragen: "Wer kann mir bei einer WordPress-Website für meine Unternehmensgründung in Österreich helfen?"
   - Claude fragen: "Brauche ich für WordPress technische Vorkenntnisse?"
   - Perplexity suchen: "WordPress AMS Gründerprogramm"

2. **Analytics:**
   - Referrer von perplexity.ai
   - Neue organische Keywords in Google Search Console
   - Direkte Zugriffe nach AI-Erwähnungen

3. **Qualitative Signale:**
   - Anfragen erwähnen "habe Sie über ChatGPT gefunden"
   - Bessere Vorqualifizierung der Leads
   - Präzisere Fragen im Erstgespräch

---

## 🎓 Best Practices für zukünftige Inhalte

### Beim Erstellen neuer Seiten:

1. **FAQ-first denken:**
   - Was würden Nutzer:innen fragen?
   - Antworten ausführlich und konversationell

2. **Strukturierte Daten hinzufügen:**
   - Passende Schema.org Types nutzen
   - JSON-LD im `<head>` einfügen

3. **Ausführliche Meta-Descriptions:**
   - 200-300 Zeichen
   - Alle wichtigen Keywords natürlich einbinden
   - Konversationeller Ton

4. **Semantisches HTML:**
   - `<article>`, `<section>`, `<aside>` korrekt nutzen
   - Überschriften-Hierarchie (`<h1>` bis `<h6>`)
   - `<time>`, `<address>` für strukturierte Infos

5. **Long-Form Content:**
   - KI-Systeme bevorzugen ausführliche Antworten
   - Mindestens 500 Wörter pro Unterseite
   - Natürliche Keyword-Dichte (1-2%)

---

## 📚 Weitere Ressourcen

### Schema.org Dokumentation:
- [ProfessionalService](https://schema.org/ProfessionalService)
- [FAQPage](https://schema.org/FAQPage)
- [Person](https://schema.org/Person)
- [BreadcrumbList](https://schema.org/BreadcrumbList)

### AI-Crawler User-Agents:
- [GPTBot](https://platform.openai.com/docs/gptbot)
- [Google-Extended](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers)
- [Common Crawl](https://commoncrawl.org/faq)

### Testing Tools:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [OpenAI ChatGPT](https://chat.openai.com) - Direkter Test
- [Claude](https://claude.ai) - Direkter Test
- [Perplexity](https://perplexity.ai) - Direkter Test

---

## ✅ Checkliste für neue Inhalte

- [ ] FAQ-Schema in `index.html` aktualisiert?
- [ ] FAQ-Sektion in UI aktualisiert?
- [ ] Meta-Description in `src/utils/seo.ts` ergänzt?
- [ ] Keywords recherchiert und eingebunden?
- [ ] Strukturierte Daten hinzugefügt?
- [ ] Semantisches HTML verwendet?
- [ ] robots.txt neu generiert?
- [ ] Sitemap aktualisiert?
- [ ] In ChatGPT/Claude getestet?
- [ ] Google Rich Results Test durchgeführt?

---

**Erstellt am:** 2025-01-17  
**Version:** 1.0  
**Autor:** Sascha Kohler  
**Kontakt:** office@sascha-kohler.at
