import { testimonials } from "@/app/lib/testimonials"
import Image from "next/image"
import { TestimonialsCards } from "./TestimonialsCards"



export const Testimonials = () => {
  return (
    <div className="mt-20 text-black text-center mb-20 ">
        <h6 className="text-gray-500 text-xl">Bewertungen unserer Kunden</h6>
        <h1 className="text-6xl font-semibold lg:text-9xl  lg:font-medium mb-10" >Sie vertrauen uns!</h1>
        <div className="bg-white flex flex-col lg:flex-row flex-wrap justify-center items-center lg:gap-x-2 gap-y-16 md:gap-y-2">
            <div className="flex flex-col gap-y-16 md:gap-y-2 items-center justify-center">
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
            </div>

            <div className="hidden lg:flex flex-col gap-y-2"> 
                <Image
                    src={'/working_man.jpg'}
                    alt="working man"
                    width={1200}
                    height={0}
                    className="w-[500px] h-[592px] rounded-2xl"
                 />     
                <Image
                    src={'/office.jpg'}
                    alt="office"
                    width={1200}
                    height={0}
                    className="w-[500px] h-[592px]  rounded-2xl"
                 />     
            </div>
            
            <div>{/* imagen 2 */}</div>

        </div>
    </div>
  )
}


