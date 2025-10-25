import { testimonials } from "@/app/lib/testimonials"
import Image from "next/image"
import Link from "next/link"
import { BiSolidQuoteSingleLeft } from "react-icons/bi"
import { RiDoubleQuotesL } from "react-icons/ri"
import { TestimonialsCards } from "./TestimonialsCards"



export const Testimonials = () => {
  return (
    <div className="mt-20 text-black text-center mb-20 ">
        <h6 className="text-gray-500 text-xl">Bewertungen unserer Kunden</h6>
        <h1 className="text-6xl font-semibold lg:text-9xl  lg:font-medium mb-10" >Sie vertrauen uns!</h1>
        <div className="bg-white flex flex-col justify-center items-center gap-y-16">
            {
                testimonials.map(t => (
                    <TestimonialsCards 
                        key={t.id}
                        comment={t.comment}
                        url={t.url}
                        avatar={t.avatar}
                        name={t.name}
                        role={t.role}
                    />
                ))
            }

            
            <div> {/* imagen 1 */} </div>
            <div></div>
            <div>{/* imagen 2 */}</div>

        </div>
    </div>
  )
}


