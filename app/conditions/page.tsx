import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { AGBPage } from "../ui/components/conditions/AGB";

export default function Conditions(){
    return(
        <div>
           <div className="relative w-full">
                <Image
                src={"/id-img-03.jpg"}
                alt="circuits photo"
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
                    Allgemeine Geschäftsbedingungen (AGB)
                    </h1>
                    <div className="flex items-center gap-x-2 text-sm text-gray-300">
                    <Link href={"/"}>metisOrigins</Link>
                    <FaArrowRight className="text-white" />
                    <p className="text-white">Allgemeine Geschäftsbedingungen (AGB)</p>
                    </div>
                </div>
                </div>
            </div>
            <AGBPage />
        </div>
    )
}