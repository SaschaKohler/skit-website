import React from 'react'
import LegalLayout from '../components/layouts/LegalLayout'

const Datenschutz: React.FC = () => {
  return (
    <LegalLayout title="Datenschutzerklärung" lastUpdated="08.06.2024">
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Einleitung und Überblick</h2>
          <p>
            Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der
            Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und
            anwendbaren nationalen Gesetzen zu erklären, welche
            personenbezogenen Daten wir verarbeiten, zukünftig verarbeiten
            werden und welche rechtmäßigen Möglichkeiten Sie haben.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Kontaktdaten des Verantwortlichen
          </h2>
          <p>
            Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung
            personenbezogener Daten haben, finden Sie nachfolgend die
            Kontaktdaten der verantwortlichen Person bzw. Stelle:
          </p>
          <p className="mt-2">
            Sascha Kohler
            <br />
            Furth 6<br />
            4311 Schwertberg
            <br />
            E-Mail: office@sascha-kohler.at
            <br />
            Telefon: 0650/9030372
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Speicherdauer</h2>
          <p>
            Dass wir personenbezogene Daten nur so lange speichern, wie es für
            die Bereitstellung unserer Dienstleistungen und Produkte unbedingt
            notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet,
            dass wir personenbezogene Daten löschen, sobald der Grund für die
            Datenverarbeitung nicht mehr vorhanden ist.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Rechte laut Datenschutz-Grundverordnung
          </h2>
          <p>
            Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden
            Rechte:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Recht auf Auskunft (Artikel 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
            <li>
              Recht auf Löschung ("Recht auf Vergessenwerden") (Artikel 17
              DSGVO)
            </li>
            <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
            <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
          </ul>
        </div>

        {/* Weitere Sektionen wie im Originaltext */}
      </section>
    </LegalLayout>
  )
}

export default Datenschutz
