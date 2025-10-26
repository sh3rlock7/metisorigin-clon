import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";


export const HeroContact = () => {
  return (
    <div className="relative w-full">
               <Image
                 src={"/kontakt.jpg"}
                 alt="circuits photo"
                 width={1920}
                 height={1080}
                 priority
                 className="w-full h-[420px] sm:h-[460px] md:h-[500px] lg:h-[520px] object-cover object-center"
               />
       
               <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent z-0"></div>
       
               <div className="absolute bottom-0 left-0 right-0 flex flex-col sm:flex-row justify-between px-6 sm:px-12 pb-10 text-white z-10">
                 {/* Izquierda */}
                 <div className="max-w-[90%] sm:max-w-[50%]">
                   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                     Kontakt
                   </h1>
                   <div className="flex items-center gap-x-2 text-sm text-gray-300">
                     <Link href={"/"}>
                       metisOrigins
                     </Link>
                     <FaArrowRight className="text-white" />
                     <p className="text-white">Kontakt</p>
                   </div>
                 </div>
       
                 {/* Derecha */}
                 <div className="max-w-[350px] text-left md:max-w-[250px]  mt-6 sm:mt-0">
                   <h3 className="text-lg sm:text-xl font-semibold">Behind the Scenes</h3>
                   <p className="text-gray-200 text-sm mt-1 leading-snug">
                     Erhalten Sie exklusive Einblicke in unsere Arbeitsweise und Projekte. Begleiten Sie uns hinter die Kulissen und erleben Sie, wie unsere kreativen Lösungen entstehen.
                   </p>
                 </div>
               </div>
             </div>
  )
}


