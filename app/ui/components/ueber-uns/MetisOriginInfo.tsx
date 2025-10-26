import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'
import Counter from '../../Counter'
import Link from 'next/link'

export const MetisOriginInfo = () => {
  return (
    <div className="mx-auto rounded-4xl bg-(--drawerBg) h-auto w-[80%] mb-10">
        <div className="flex flex-col lg:flex-row justify-center text-center">
          <div className="w-full md:px-24 lg:px-0 lg:w-[33%]">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mt-12 px-2">Unsere Geschichte</h3>
              <p className="text-sm px-2 text-gray-400 font-medium">
                metisOrigins wurde 2016 gegründet, zunächst mit einem
                Schwerpunkt auf Designprojekten. Unser Gründer, der von Anfang
                an eine Leidenschaft für kreative Lösungen hatte, erweiterte
                2020 das Angebot um den Videoschnitt für YouTuber. Im Jahr 2021
                folgte die Entwicklung von Softwarelösungen, um den wachsenden
                Anforderungen unserer Kunden gerecht zu werden. Heute bieten wir
                ein breites Spektrum an Dienstleistungen an, die von Hosting und
                Entwicklung bis hin zu modernem Design und umfassendem Branding
                reichen.
              </p>
            </div>
            <div className="text-left mb-5">
              <h3 className="text-2xl font-semibold mt-12 px-2">Unsere Werte</h3>
              <p className="text-sm px-2 text-gray-400 font-medium">Bei metisOrigins stehen Innovation, Teamarbeit und kontinuierliches Lernen im Mittelpunkt unserer Unternehmenskultur. Wir glauben daran, dass die besten Ergebnisse durch enge Zusammenarbeit und den Austausch von Ideen entstehen. Deshalb legen wir großen Wert auf eine offene Kommunikation und eine partnerschaftliche Zusammenarbeit mit unseren Kunden.</p>
            </div>
          </div>
          {/* middle column */}
          <div className="w-full lg:w-[33%] flex flex-col gap-y-12 text-2xl font-semibold mt-12 px-2">
            <h1>Ein paar Statistiken über metisOrigins</h1>
            <div className="flex flex-col justify-center mt-12">
                <div className="flex justify-center lg:text-5xl">
                    <Counter end={1300}/>
                    <p>+</p>
                </div>
                <p className="text-lg font-medium mt-2">Registrierte Kunden</p>
            </div>
            <div className="flex flex-col justify-center lg:text-5xl">
                <Counter end={16}/>
                <p className="text-lg font-medium mt-2"> Angestellte & Freelancer</p>
            </div>
            <div className="flex flex-col justify-center lg:text-5xl">
                <Counter end={2025}/>
                <p className="text-lg font-medium mt-2 mb-5">
                    Gegründet
                </p>
            </div>
          </div>
          {/* last column */}
          <div className="w-full lg:w-[33%] md:px-24 lg:px-0">
            <h1 className="text-2xl font-semibold mt-12 px-2">Das sagen unsere Kunden</h1>
            <RiDoubleQuotesL className="text-black text-5xl ml-5 mt-2" />
            <p className="text-left p-5 text-gray-500 text-sm">
                Ich kann diese Firma bzw. dieses Unternehmen nur Empfehlen. Die Website ist zwar schon seit einigen Monaten im aufbau, aber hat durch Social Media viel Aufmerksamkeit bekommen, darunter auch meine. <br /> <br />
                Absolut zu empfehlen und Preise sind auch Fair. Auf eine weiterhin gute zusammenarbeit. Danke!
            </p>
            <RiDoubleQuotesL className="text-black text-5xl ml-5 mt-2" />
            <p className="text-left p-5 text-gray-500 text-sm">
                Ich hatte das Vergnügen, mit Metis Origins an der Neugestaltung unserer Firmenwebsite zu arbeiten, und ich könnte nicht zufriedener sein! Herr Barth und sein Team haben von Anfang an einen professionellen und engagierten Eindruck hinterlassen.
                <br /><br />
                Der gesamte Prozess war reibungslos und gut organisiert…. 
            </p>
          </div>
        </div>
        <div className="w-full bg-black rounded-b-4xl text-center text-white p-3">
          <p>
            Du möchtest mehr über unsere Geschichte erfahren?
            <Link href={"/"}>
              <span className="ml-2 underline">Klick hier</span>
            </Link>
          </p>
        </div>
      </div>
  )
}

