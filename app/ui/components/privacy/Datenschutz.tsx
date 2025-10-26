"use client";

import Link from "next/link";

export const Datenschutz = () => {
  return (
    <div className="bg-white flex flex-col  gap-y-8 text-black px-12 lg:px-24 py-16">

      {/* Datenschutz Intro */}
      <div>
        <h3 className="text-2xl font-bold mb-2">Datenschutz:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns strikt an die Regeln der Datenschutzgesetze. Personenbezogene Daten werden auf dieser Webseite nur im technisch notwendigen Umfang erhoben. In keinem Fall werden die erhobenen Daten verkauft oder aus anderen Gründen an Dritte weitergegeben.
        </p>
      </div>

      {/* §1 Verantwortliche Stelle */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§1 Verantwortliche Stelle:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:

          Meits Origins – Einzelunternehmen Marcel Barth
          Leibniz-Campus 9
          89520 Heidenheim an der Brenz

          Telefon: +49 176 97780664
          E-Mail: <Link href="mailto:hello@metisorigins.com" className="text-[#2ea3f2] underline">hello@metisorigins.com</Link>
        </p>
      </div>

      {/* §2 Erhebung */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§2 Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Besuch der Website
          Beim Aufrufen unserer Website https://www.metisorigins.com werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:

          IP-Adresse des anfragenden Rechners
          Datum und Uhrzeit des Zugriffs
          Name und URL der abgerufenen Datei
          Website, von der aus der Zugriff erfolgt (Referrer-URL)
          verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers
          Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:

          Gewährleistung eines reibungslosen Verbindungsaufbaus der Website
          Gewährleistung einer komfortablen Nutzung unserer Website
          Auswertung der Systemsicherheit und -stabilität sowie
          zu weiteren administrativen Zwecken
          Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.
        </p>
      </div>

      {/* §3 individuelle Verträge */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§3 Datenverarbeitung bei individuellen Verträgen:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Im Rahmen individueller Verträge erheben, speichern und verarbeiten wir personenbezogene Daten, die für die Vertragsdurchführung notwendig sind. Diese Daten umfassen unter anderem:

          Name und Anschrift
          Kontaktinformationen (z.B. E-Mail-Adresse, Telefonnummer)
          Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenaufträge)
          Zahlungsinformationen
          Diese Daten werden zur Erfüllung unserer vertraglichen Pflichten und zur Kontaktaufnahme im Rahmen der Vertragsdurchführung benötigt. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 S. 1 lit. b DSGVO.
        </p>
      </div>

      {/* §4 Software & Drittanbieter */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§4 Nutzung von Software und Drittanbietern:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          1. Flowers Software
          Zur Verwaltung und Organisation unserer Kundenaufträge nutzen wir die Software „Flowers“. In dieser Software werden die oben genannten Daten gespeichert und verarbeitet, um eine effiziente Bearbeitung Ihrer Aufträge zu gewährleisten. Die Software „Flowers“ entspricht den geltenden Datenschutzbestimmungen und bietet angemessene Sicherheitsmaßnahmen zum Schutz Ihrer Daten.

          2. sevDesk für Buchhaltung
          Für die Buchhaltung und Rechnungsstellung verwenden wir die Software „sevDesk“. Ihre personenbezogenen Daten, insbesondere Zahlungsinformationen und Vertragsdaten, werden in „sevDesk“ eingepflegt, um eine ordnungsgemäße Buchführung zu gewährleisten. Auch die Software „sevDesk“ erfüllt die Anforderungen der Datenschutzgesetze und schützt Ihre Daten durch geeignete technische und organisatorische Maßnahmen.

          3. Google Cloud
          Zur Speicherung und Verwaltung von Daten verwenden wir die Dienste der Google Cloud. Google Cloud bietet umfassende Sicherheits- und Datenschutzmaßnahmen, um Ihre Daten zu schützen. Weitere Informationen finden Sie in der Datenschutzerklärung von Google Cloud.

          4. Dropbox
          Für die Speicherung und gemeinsame Nutzung von Dateien nutzen wir Dropbox. Dropbox setzt ebenfalls hohe Sicherheitsstandards, um die Vertraulichkeit und Integrität Ihrer Daten zu gewährleisten. Weitere Informationen finden Sie in der Datenschutzerklärung von Dropbox.
        </p>
      </div>

      {/* §5 Weitergabe */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§5 Weitergabe von Daten:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn:

          Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 S. 1 lit. a DSGVO)
          die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben
          für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie
          dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist
        </p>
      </div>

      {/* §6 Cookies */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§6 Cookies:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware. In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben.

          Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese werden nach Verlassen unserer Seite automatisch gelöscht. Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen Sie getätigt haben, um diese nicht noch einmal eingeben zu müssen. Zum anderen setzen wir Cookies ein, um die Nutzung unserer Website statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten (siehe §7). Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer Seite automatisch zu erkennen, dass Sie bereits bei uns waren. Diese Cookies werden nach einer jeweils definierten Zeit automatisch gelöscht. Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich. Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.
        </p>
      </div>

      {/* §7 Analyse-Tools */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§7 Analyse-Tools:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Die im Folgenden aufgeführten und von uns eingesetzten Tracking-Maßnahmen werden auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO durchgeführt. Mit den zum Einsatz kommenden Tracking-Maßnahmen wollen wir eine bedarfsgerechte Gestaltung und die fortlaufende Optimierung unserer Webseite sicherstellen. Zum anderen setzen wir die Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten (Google Analytics).
        </p>
      </div>

      {/* §8 Social Media Plug-ins */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§8 Social Media Plug-ins:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Wir setzen auf unserer Website auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO Social Plug-ins der sozialen Netzwerke Facebook, Twitter und Instagram ein, um unser Unternehmen hierüber bekannter zu machen. Der dahinterstehende werbliche Zweck ist als berechtigtes
        </p>
        </div>

         {/* §9 Betroffenenrechte */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§9 Betroffenenrechte:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Sie haben das Recht:

          gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;
          gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;
          gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;
          gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;
          gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;
          gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen und
          gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden.
        </p>
      </div>

      {/* §10 Widerspruchsrecht */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§10 Widerspruchsrecht:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird. Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an <Link href="mailto:hello@metisorigins.com" className="text-[#2ea3f2] underline">hello@metisorigins.com</Link>.
        </p>
      </div>

      {/* §11 Datensicherheit */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§11 Datensicherheit:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schlüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers. Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
        </p>
      </div>

      {/* §12 Aktualität */}
      <div>
        <h3 className="text-2xl font-bold mb-2">§12 Aktualität und Änderung dieser Datenschutzerklärung:</h3>
        <p className="text-gray-500 text-xl whitespace-pre-line">
          Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2024. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter <Link href="https://www.metisorigins.com/datenschutz" className="text-[#2ea3f2] underline">https://www.metisorigins.com/datenschutz</Link> von Ihnen abgerufen und ausgedruckt werden.
            <br />
        </p>
      </div>

        <span className="text-gray-500 text-xl whitespace-pre-line"> © 2024 Meits Origins – Alle Rechte vorbehalten</span>
    </div>
)}