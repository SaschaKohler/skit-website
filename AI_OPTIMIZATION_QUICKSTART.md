# KI-Optimierung Quick Start

## 🎯 Was wurde implementiert?

Die skit-website ist jetzt für KI-gestützte Suchmaschinen (ChatGPT, Claude, Perplexity, Google Bard/Gemini, Bing Copilot) optimiert.

## ✅ Implementierte Features

### 1. **Strukturierte Daten (JSON-LD)**
   - ✅ Organization/ProfessionalService Schema mit allen Details
   - ✅ Person Schema für Sascha Kohler mit Credentials
   - ✅ FAQPage Schema mit 10 umfassenden FAQs
   - ✅ BreadcrumbList Schema für Navigation
   - 📍 Lokalisierung: Wien, Österreich

### 2. **FAQ-Sektion**
   - ✅ Neue FAQSection Komponente
   - ✅ 10 interaktive Fragen und Antworten
   - ✅ Auf Homepage integriert
   - ✅ Semantisches HTML

### 3. **AI-Crawler Unterstützung**
   - ✅ robots.txt mit expliziten Erlaubnissen für:
     - GPTBot (ChatGPT)
     - Claude-Web (Claude)
     - PerplexityBot (Perplexity)
     - Google-Extended (Bard/Gemini)
     - BingPreview (Copilot)
   - ✅ AI-Plugin Manifest (`.well-known/ai-plugin.json`)
   - ✅ OpenAPI Spezifikation

### 4. **Optimierte Meta-Descriptions**
   - ✅ Homepage: Ausführliche, AI-freundliche Description
   - ✅ About: Alle 3 Kompetenzen detailliert
   - ✅ Services: Komplettes Portfolio beschrieben
   - ✅ Contact: Erstgespräch-Details
   - ✅ 200-300 Zeichen pro Description

## 🚀 Sofort testen

### Test 1: ChatGPT
```
Frage in ChatGPT:
"Wer kann mir bei einer WordPress-Website für meine Unternehmensgründung in Österreich helfen? Ich bin im AMS Gründerprogramm."
```

### Test 2: Claude
```
Frage in Claude:
"Brauche ich technische Vorkenntnisse für eine WordPress-Website? Ich bin Einzelunternehmer:in in Österreich."
```

### Test 3: Perplexity
```
Suche in Perplexity:
"WordPress Website DSGVO konform Österreich AMS Gründerprogramm"
```

## 📂 Wichtige Dateien

| Datei | Zweck |
|-------|-------|
| `/index.html` | JSON-LD Schemas (Organization, FAQ) |
| `/src/components/sections/FAQSection.tsx` | FAQ UI-Komponente |
| `/src/components/seo/BreadcrumbSchema.tsx` | Breadcrumb Schema |
| `/src/utils/seo.ts` | Meta-Descriptions |
| `/src/utils/generateRobots.js` | robots.txt Generator |
| `/public/.well-known/ai-plugin.json` | AI-Plugin Manifest |
| `/public/robots.txt` | Generierte robots.txt |

## 🔄 Bei Änderungen

### Neue FAQ hinzufügen:
1. **JSON-LD in `index.html` erweitern:**
   ```json
   {
     "@type": "Question",
     "name": "Ihre Frage?",
     "acceptedAnswer": {
       "@type": "Answer",
       "text": "Ihre ausführliche Antwort..."
     }
   }
   ```

2. **FAQ-Komponente aktualisieren:**
   - Datei: `/src/components/sections/FAQSection.tsx`
   - Im `faqs` Array neue Frage hinzufügen

### Meta-Description ändern:
- Datei: `/src/utils/seo.ts`
- Im `PAGE_METADATA` Objekt entsprechende Seite bearbeiten

### Neue Seite hinzufügen:
1. Meta-Daten in `/src/utils/seo.ts` hinzufügen
2. JSON-LD Schema in `index.html` erweitern (optional)
3. robots.txt mit `npm run generate-robots` aktualisieren

## 🛠️ Build & Deploy

```bash
# 1. Robots.txt neu generieren
npm run generate-robots

# 2. Projekt bauen
npm run build

# 3. Deployment
# (Ihr Docker/Deploy-Prozess)
```

## 🎓 Zielgruppen-Keywords

Die Website rankt jetzt für:
- ✅ WordPress für Gründer:innen Österreich
- ✅ Website Einzelunternehmer:innen
- ✅ AMS Unternehmer-Gründer-Programm
- ✅ DSGVO konforme Website
- ✅ WordPress Website 14 Tage
- ✅ Digitaler Mentor Gründung
- ✅ Lebens- und Sozialberater IT

## 📊 Erfolg messen

### Woran Sie merken, dass es funktioniert:
1. ✅ Leads erwähnen "über ChatGPT/Claude gefunden"
2. ✅ Präzisere Fragen im Erstgespräch
3. ✅ Bessere Vorqualifizierung
4. ✅ Mehr Anfragen von AMS-Teilnehmer:innen

### Analytics:
- Neue Referrer: perplexity.ai, chat.openai.com
- Neue organische Keywords in Search Console
- Direktzugriffe nach AI-Erwähnungen steigen

## 🔗 Vollständige Dokumentation

Siehe: `AI_SEARCH_OPTIMIZATION.md` für Details

## 💡 Schnelle Tipps

1. **FAQs sind Gold:** KI-Systeme lieben direkte Fragen/Antworten
2. **Ausführlich sein:** 200+ Zeichen Meta-Descriptions
3. **Strukturiert denken:** JSON-LD = AI-Sprache
4. **Natürlich schreiben:** Keine Keyword-Stuffing
5. **Testen, testen, testen:** Direkt in ChatGPT/Claude prüfen

---

**Bei Fragen:** office@sascha-kohler.at  
**Erstellt:** 2025-01-17
