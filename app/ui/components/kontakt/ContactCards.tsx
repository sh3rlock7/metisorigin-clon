export const ContactCards = () => {
  return (
    <div>
      <h1 className="text-black/80 text-3xl text-center mt-5">Kontakt jetzt</h1>

      <div className="text-green-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-10 mb-10 mt-10 lg:px-24 px-5">
        {/* Card 1 */}
        <div className="flex flex-col text-left border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-6">
          <h1 className="text-black text-2xl font-black mt-4">Kunden Support</h1>
          <p className="text-lg lg:text-sm text-gray-500 mt-2">
            Haben Sie Fragen oder benötigen Sie Unterstützung? Unser Kundensupport-Team ist hier, um Ihnen zu helfen und Ihre Anliegen schnell zu klären.
          </p>
          <a href="mailto:hello@metisorigins.com" className="text-xl underline text-black mt-2">
            hello@metisorigins.com
          </a>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col text-left border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-6">
          <h1 className="text-black text-2xl font-black mt-4">Technischer Support</h1>
          <p className="text-lg lg:text-sm text-gray-500 mt-2">
            Bei technischen Problemen oder Fragen zu unseren Dienstleistungen steht Ihnen unser Technischer Support mit kompetenter Hilfe zur Seite.
          </p>
          <a href="mailto:technic@metisorigins.com" className="text-xl underline text-black mt-2">
            technic@metisorigins.com
          </a>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col text-left border-b md:border-b-0 border-gray-300 md:border-r lg:border-r-0 pb-4 md:pb-0">
          <h1 className="text-black text-2xl font-black mt-4">Hosting Support</h1>
          <p className="text-lg lg:text-sm text-gray-500 mt-2">
            Für alle Anliegen rund um unsere Hosting-Dienste steht Ihnen unser Hosting-Support bereit. Kontaktieren Sie uns bei Fragen oder Problemen.
          </p>
          <a href="mailto:hosting@metisorigins.com" className="text-xl underline text-black mt-2">
            hosting@metisorigins.com
          </a>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col text-left border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-6">
          <h1 className="text-black text-2xl font-black mt-4">Designberatung</h1>
          <p className="text-lg lg:text-sm text-gray-500 mt-2">
            Benötigen Sie professionelle Designberatung? Unser Team bietet Ihnen maßgeschneiderte Lösungen, um Ihre Marke und Ihr Design zu optimieren.
          </p>
          <a href="mailto:design@metisorigins.com" className="text-xl underline text-black mt-2">
            design@metisorigins.com
          </a>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col text-left border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-6">
          <h1 className="text-black text-2xl font-black mt-4">Projektmanagement</h1>
          <p className="text-lg lg:text-sm text-gray-500 mt-2">
            Erfahren Sie mehr über unsere Projektmanagement-Dienstleistungen und wie wir Ihre Projekte effizient und erfolgreich umsetzen können.
          </p>
          <a href="mailto:pm@metisorigins.com" className="text-xl underline text-black mt-2">
            pm@metisorigins.com
          </a>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col text-left pb-4 md:pb-0">
          <h1 className="text-black text-2xl font-black mt-4">After-Sales Support</h1>
          <p className="text-lg lg:text-sm text-gray-500 mt-2">
            Unsere Unterstützung endet nicht mit dem Verkauf. Unser After-Sales-Support-Team ist hier, um Ihnen nach dem Kauf weiterzuhelfen.
          </p>
          <a href="mailto:support@metisorigins.com" className="text-xl underline text-black mt-2">
            support@metisorigins.com
          </a>
        </div>
      </div>
    </div>
  );
};
