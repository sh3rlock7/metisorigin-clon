


export const Services = () => {
  return (
    <div className="mb-10 flex flex-col relative -top-15 sm:top-0">
        {/* Principal text */}
        <div>
            <h3 className="text-black text-xl sm:text-3xl font-bold text-center px-6 lg:mt-24 lg:px-64">Unsere Mission ist es, weltweit inspirierende und effektive Werbekampagnen zu schaffen. Mit unserer globalen Reichweite und tiefgehenden lokalen Expertise setzen wir uns dafür ein, Ihr Unternehmen erfolgreich zu machen. Lassen Sie uns gemeinsam Großartiges erreichen.</h3>
            <h4 className="text-l text-center text-black font-semibold mt-4">Marcel Richter</h4>
            <h6 className="text-xs text-gray-500 font-extrabold text-center">Founder & CEO</h6>
        </div>

        <div className="flex flex-col sm:flex-row text-black px-6 gap-y-6 sm:px-2 mt-6">
            <div className="h-px bg-gray-600" />
            <div className="flex flex-col">
               <h1 className="text-xl font-extrabold">Professional Hosting</h1>
               <p className="text-gray-500">Unser managed/unmanaged Hosting bietet Ihnen weltweit zuverlässige und sichere Lösungen, damit Ihre Online-Präsenz jederzeit optimal performt.</p>
            </div>
            <div className="h-px bg-gray-600" />
            <div>
                <h1 className="text-xl font-extrabold">Globale Entwicklung</h1>
                <p className="text-gray-500">Wir bieten umfassende Entwicklungsdienstleistungen, die alle Arten von Projekten abdecken, um Ihre individuellen Anforderungen präzise und effizient umzusetzen.</p>
            </div>
            <div className="h-px bg-gray-600" />
            <div >
                <h1 className="text-xl font-extrabold">Branding & Design</h1>
                <p className="text-gray-500">Unsere modernen Designs und Brandings machen Ihre Marke einzigartig und ansprechend, um Ihre Zielgruppe optimal zu erreichen und zu begeistern.</p>
            </div>
        </div>
    </div>
  )
}

