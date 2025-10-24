"use client"
import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io"


export const HeroContent = () => {
  return (
    <div className="absolute z-10 text-white sm:mb-64 sm:px-32 lg:px-64">
      <h1 className="text-[clamp(4rem,19vw,10rem)] ml-6 sm:ml-0 sm:text-center font-semibold mt-10 sm:mt-48 lg:mt-80">metis</h1>
      <div className="text-left  lg:w-[50%] mt-12 sm:mt-0">
        <h3 className="text-xl font-bold">
            Wir stehen für Globalität
        </h3>
        <h4 className="text-gray-300 font-extralight mt-2 text-xl">
            Wir sind eine weltweit agierende Werbeagentur, die globale Perspektiven und lokale Expertise vereint.
        </h4>
        <Link href={"ueber-uns"} className="flex items-center font-bold mt-2 mb-10">
            <span>Erfahre mehr </span>
            <IoIosArrowRoundForward  className="text-xl"/>  
        </Link> 
      </div>
    </div>
  )
}


