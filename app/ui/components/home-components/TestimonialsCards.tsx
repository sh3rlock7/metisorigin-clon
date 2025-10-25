import { Testimonial } from "@/app/lib/testimonials"
import Image from "next/image"
import Link from "next/link"
import { RiDoubleQuotesL } from "react-icons/ri"


export const TestimonialsCards = ({id, comment, url, name, role, avatar}: Testimonial) => {
  return (
   <div className=" bg-black rounded-2xl w-[500px] h-auto p-10 text-left">
               <RiDoubleQuotesL className="text-green-500 text-7xl" />
               {/* estrellas */}
               <p className="text-white text-xl text-left">
                {comment}
               </p>

               <Link 
                target="_blank"
                href={url}
                > 
                    <p className="text-green-500 text-xl mt-5">-Zur Bewertung</p>  
                </Link>

                <div className="flex mt-10">
                    <Image 
                        src={avatar}
                        alt="Kunden"
                        height={0}
                        width={0}
                        className="w-16 h-16 rounded-full"
                    />
                    <div className="flex flex-col ml-5">
                        <h3 className="text-white text-xl">{name}</h3>
                        <p className="text-white text-sm">{role}</p>
                    </div>
                </div>
            </div>
  )
}


