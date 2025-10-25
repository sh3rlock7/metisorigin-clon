"use client"
import { Testimonial } from "@/app/lib/testimonials"
import Image from "next/image"
import Link from "next/link"
import { FaStar } from "react-icons/fa"
import { RiDoubleQuotesL } from "react-icons/ri"
import { motion } from "motion/react"


export const TestimonialsCards = ({id, comment, url, name, role, avatar}: Testimonial) => {
  return (
   <div className=" bg-black rounded-2xl w-[90%] lg:w-[500px] h-auto p-10 text-left">
               <RiDoubleQuotesL className="text-green-500 text-7xl" />
                <div className="flex text-green-500 mt-5 mb-4 items-center">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <p className="ml-2 text-white text-xl">(5/5)</p>
                </div>
               <p className="text-white text-xl text-left w-[90%]">
                {comment}
               </p>
               <Link 
                target="_blank"
                href={url}
                > 
                    <p className="text-green-500 text-xl mt-5">-Zur Bewertung</p>  
                </Link>

                <div className="flex mt-10 items-center">
                    <motion.div
                        initial={{opacity: 0, y: 5}}
                        whileInView={{opacity: 1, y:0}}
                        transition={{duration: 1}}
                    >
                        <Image 
                            src={avatar}
                            alt="Kunden"
                            height={0}
                            width={1200}
                            className="w-16 h-16 rounded-full"
                        />
                    </motion.div>
                    <div className="flex flex-col ml-5">
                        <h3 className="text-white text-xl">{name}</h3>
                        <p className="text-white text-sm">{role}</p>
                    </div>
                </div>
            </div>
  )
}


