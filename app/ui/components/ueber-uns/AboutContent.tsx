import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

export const AboutContent = () => {
  return (
    <div className="flex px-6 sm:px-12 mt-20 justify-between gap-x-8 lg:gap-x-16 mb-10 flex-col lg:flex-row">
        <div className="w-full lg:w-[75%]">
          <h1 className="text-4xl lg:text-6xl font-bold mb-3">Hinter den Kulissen</h1>
          <h4 className="text-xl font-black mb-3">bei metisOrigins</h4>
          <p className="text-gray-500 mb-3">
            Erhalten Sie einen Einblick in die kreative Arbeit und den
            Innovationsgeist, die hinter unseren Projekten stecken. Bei
            metisOrigins entsteht jedes Ergebnis durch Teamarbeit und
            Leidenschaft <br />– von der Idee bis zur Umsetzung. Entdecken Sie,
            wie wir gemeinsam Ihre Visionen Wirklichkeit werden lassen.
          </p>
          <Link className="flex items-center gap-x-2" href={"/ueber-uns"}>
            <p className="text-lg">Erfahre mehr über uns</p>
            <FaArrowRight />
          </Link>
        </div>

        <div>
          <Image
            src={"/2016-scaled.jpg"}
            alt="Ein Mann füllt ein Formular aus"
            width={1200}
            height={0}
            className="lg:w-[800px] lg:h-[275px] rounded-3xl mt-2"
          />
        </div>
      </div>
  )
}

export default AboutContent
