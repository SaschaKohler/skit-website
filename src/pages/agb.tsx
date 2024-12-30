import React from 'react'
import LegalLayout from '../components/layouts/LegalLayout'

const AGB: React.FC = () => {
  return (
    <LegalLayout
      title="Allgemeine Geschäftsbedingungen"
      lastUpdated="21.12.2024"
    >
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten
            für alle Verträge zwischen Sascha Kohler (nachfolgend "wir" oder
            "uns") und unseren Kunden (nachfolgend "Kunde" oder "Sie").
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">2. Vertragsschluss</h2>
          <p>
            Die Darstellung unserer Dienstleistungen stellt kein rechtlich
            bindendes Angebot, sondern eine unverbindliche Aufforderung zur
            Bestellung dar. Durch die Beauftragung unserer Dienstleistungen
            geben Sie ein verbindliches Angebot zum Vertragsschluss ab.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">3. Leistungsumfang</h2>
          <p>
            Der genaue Umfang unserer Leistungen ergibt sich aus der jeweiligen
            Leistungsbeschreibung im Angebot bzw. der Auftragsbestätigung. Wir
            behalten uns vor, die vereinbarten Leistungen zu ändern oder von
            ihnen abzuweichen, wenn die Änderung oder Abweichung unter
            Berücksichtigung unserer Interessen für den Kunden zumutbar ist.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            4. Preise und Zahlungsbedingungen
          </h2>
          <p>
            Alle Preise verstehen sich in Euro und zuzüglich der gesetzlichen
            Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach
            Rechnungsdatum ohne Abzug zur Zahlung fällig.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            5. Mitwirkungspflichten des Kunden
          </h2>
          <p>
            Der Kunde ist verpflichtet, uns alle für die Durchführung unserer
            Leistungen erforderlichen Informationen, Materialien und Zugänge
            rechtzeitig zur Verfügung zu stellen.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            6. Urheberrecht und Nutzungsrechte
          </h2>
          <p>
            Alle von uns erstellten Werke (Websites, Grafiken, Texte etc.) sind
            urheberrechtlich geschützt. Nach vollständiger Bezahlung erhält der
            Kunde ein einfaches, nicht übertragbares Nutzungsrecht.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            7. Gewährleistung und Haftung
          </h2>
          <p>
            Wir haften für Schäden nur bei Vorsatz oder grober Fahrlässigkeit.
            Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit
            keine wesentlichen Vertragspflichten betroffen sind.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">8. Vertraulichkeit</h2>
          <p>
            Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit
            erhaltenen Informationen vertraulich zu behandeln und nicht an
            Dritte weiterzugeben.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">9. Schlussbestimmungen</h2>
          <p>
            Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
            Gerichtsstand ist Schwertberg, Österreich, soweit gesetzlich
            zulässig.
          </p>
        </div>
      </section>
    </LegalLayout>
  )
}

export default AGB
