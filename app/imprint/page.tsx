import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { div } from "motion/react-client";

export const metadata = {
  title: "Impressum – Meits Origins",
  description: "Impressum / Legal notice of Meits Origins",
};

export default function Imprint() {
  return (
    <div>
      <div className="relative w-full">
        <Image
          src={"/id-img-03.jpg"}
          alt="standart hero photo"
          width={1920}
          height={1080}
          priority
          className="w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[350px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row justify-between px-6 sm:px-12 pb-10 text-white z-10">
          {/* Izquierda */}
          <div className="max-w-[90%] sm:max-w-[50%]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
              Impressum
            </h1>
            <div className="flex items-center gap-x-2 text-sm text-gray-300">
              <Link href={"/"}>metisOrigins</Link>
              <FaArrowRight className="text-white" />
              <p className="text-white">Impressum</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col gap-y-8 text-black px-24">
        <div className="text-black py-10">
          <h3 className="text-2xl font-bold mt-12">Angaben gemäß §5 TMG:</h3>
          <p className="text-gray-500">
            metisOrigins UG (haftungsbeschränkt) <br />
            Leibniz-Campus 9 <br />
            89520 Heidenheim an der Brenz
          </p>
          <br />
          <p className="text-gray-500">
            Handelsregister: HRB 750021 <br />
            Registergericht: Amtsgericht Ulm
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold ">Geschäftsführer</h3>
          <p className="text-gray-500 text-xl">Marcel Richter</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mt-2">Kontakt:</h3>
          <a
            href="mailto:hello@metisorigins.com"
            className="text-[#2ea3f2] text-xl"
          >
            <span className="text-gray-500">Email:</span> hello@metisorigins.com
          </a>
        </div>
        <div>
          <div>
            <h3 className="text-2xl font-bold ">Umsatzsteuer:</h3>
            <p className="text-gray-500 text-xl">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a <br />{" "}
              Umsatzsteuergesetz: BEANTRAGT
            </p>
          </div>
        </div>



        <div> 
          <h3 className="text-2xl font-bold ">Rechtliche Hinweise:</h3>
        </div>
        
        
        <div>
          <h3 className="text-2xl font-bold mt-2">EU-Streitschlichtung:</h3>
          <p className="text-gray-500 text-xl">Die Europäische Kommission stellt eine Plattform zur <br /> Online-Streitbeilegung (OS) bereit.</p>
          <a
            target="_blank"
            href="https://consumer-redress.ec.europa.eu/site-relocation_en"
            className="text-[#2ea3f2] text-xl"
          >
           Zur Plattform der Europäischen Kommission
          </a>
        </div>
        
        
        <div>
           <h3 className="text-2xl font-bold ">Haftung für Inhalte & Links:</h3>
            <p className="text-gray-500 text-xl">
              Wir übernehmen keine Haftung für die Inhalte externer <br /> Links. Für die Inhalte der  verlinkten Seiten ist stets der <br />jeweilige Anbieter verantwortlich.
            </p>
        </div>
        <div>
           <h3 className="text-2xl font-bold ">Urheberrecht:</h3>
            <p className="text-gray-500 text-xl">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke <br /> auf diesen Seiten unterliegen dem deutschen <br /> Urheberrecht.
            </p>
        </div>

        <p className="text-xl text-gray-500 mb-5">© 2024 Meits Origins – Alle Rechte vorbehalten</p>
      </div>
    </div>
  );
}
