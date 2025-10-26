
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Impressum – Meits Origins",
  description: "Impressum / Legal notice of Meits Origins",
};

export default function Imprint() {
    return (
        <main className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Breadcrumb / small nav */}
        <nav className="text-sm text-gray-500 mb-8">
          <ul className="flex gap-3 items-center">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-800 font-medium">Impressum</li>
          </ul>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Impressum</h1>
          <p className="text-gray-600 max-w-2xl">
            Angaben gemäß §5 TMG
          </p>
        </header>

        {/* Content columns */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Company / Address */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Angaben gemäß §5 TMG</h2>

            <address className="not-italic text-gray-800 space-y-1">
              <div>Meits Origins – Einzelunternehmen Marcel Barth</div>
              <div>Leibniz-Campus 9</div>
              <div>89520 Heidenheim an der Brenz</div>
            </address>

            <h3 className="mt-4 font-semibold">Vertreten durch</h3>
            <p>Meits Origins – Einzelunternehmen Marcel Barth</p>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Kontakt</h2>
            <p className="text-gray-800">
              Telefon:{" "}
              <a href="tel:+4917697780664" className="text-blue-600 hover:underline">
                +49 176 97780664
              </a>
            </p>
            <p className="text-gray-800">
              E-Mail:{" "}
              <a href="mailto:info@metisorigins.com" className="text-blue-600 hover:underline">
                info@metisorigins.com
              </a>
            </p>

            <h3 className="mt-4 font-semibold">Umsatzsteuer</h3>
            <p>Umsatzsteuer-Identifikationsnummer: <strong>DE342508817</strong></p>
          </div>

          {/* Column 3: Legal */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Rechtliches</h2>

            <div>
              <h4 className="font-medium">EU-Streitschlichtung</h4>
              <p className="text-gray-700">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
              </p>
              <p className="mt-2">
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zur Plattform der Europäischen Kommission
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-medium mt-4">Haftung für Inhalte &amp; Links</h4>
              <p className="text-gray-700">
                Wir übernehmen keine Haftung für die Inhalte externer Links. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
              </p>
            </div>

            <div>
              <h4 className="font-medium mt-4">Urheberrecht</h4>
              <p className="text-gray-700">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
              </p>
            </div>
          </div>
        </section>

        {/* Footer / social */}
        <footer className="mt-12 border-t pt-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-gray-600">© {new Date().getFullYear()} Meits Origins – Alle Rechte vorbehalten</p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/metisorigins/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="Instagram"
              >
                {/* small inline icon placeholder */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.3 1 .6 1.4 1 .4.4.7.8 1 1.4.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.3.6-.6 1-1 1.4-.4.4-.8.7-1.4 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.3-1-.6-1.4-1-.4-.4-.7-.8-1-1.4-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.3-.6.6-1 1-1.4.4-.4.8-.7 1.4-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zM12 0C8.7 0 8.3 0 7 0 5.7 0 4.7.1 3.9.3 3.1.5 2.4.9 1.8 1.6c-.6.6-1.1 1.3-1.3 2.1C.1 5.4 0 6.4 0 7.7 0 9 0 9.4 0 12s0 3.1.1 4.4c.2.8.7 1.5 1.3 2.1.6.6 1.3 1.1 2.1 1.3.8.2 1.8.3 3.1.3s2.3 0 3.6-.1c1.2-.1 1.9-.3 2.4-.5.6-.3 1-.6 1.4-1 .4-.4.7-.8 1-1.4.2-.5.4-1.2.5-2.4.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.2-.3-1.9-.5-2.4-.3-.6-.6-1-1-1.4-.4-.4-.8-.7-1.4-1-.5-.2-1.2-.4-2.4-.5C15.7.1 15.3 0 12 0z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/metisorigins/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v15H.22V8zm7.5 0h4.37v2.1h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.01V23h-4.56v-6.46c0-1.54-.03-3.52-2.15-3.52-2.15 0-2.48 1.68-2.48 3.41V23H7.72V8z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
    )
}