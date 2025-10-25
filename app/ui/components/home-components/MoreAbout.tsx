"use client";
import Image from "next/image";
import Map from "./Map";
import { CiHardDrive } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { FaPencilAlt, FaRegKeyboard } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";

const MoreAbout = () => {
  return(
    <div className="flex flex-col">
        <p className="text-sm mt-10 text-center text-gray-500 font-medium">Das ist unser vorgehen</p>
        <h1 className="text-5xl text-center text-black font-bold">Erfahre mehr über uns</h1>
        <div className="flex px-7 mt-4 items-center justify-between">
            <Map />
            <div className="flex flex-col items-start justify-start px-5">
                <Image 
                    src="/bibiliotheck.jpg"
                    alt="bibiliotheck"
                    width={450}
                    height={0}
                    className="rounded-2xl h-58 "
                    />
                <div className="">
                    <p className="text-black text-2xl mt-7 font-black">Unser Vorgehen</p>
                    <p className="text-[16px] text-gray-500 w-[450px] mt-2">Unser Ansatz ist strukturiert und zielgerichtet, um Ihre Anforderungen optimal zu erfüllen. Wir beginnen mit einer ausführlichen Analyse Ihrer Bedürfnisse, gefolgt von einer maßgeschneiderten Strategieentwicklung. Unsere Experten setzen die Lösungen effizient um und begleiten Sie kontinuierlich, um den Erfolg langfristig zu sichern.</p>
                </div>
            </div>
        </div>

        <div className="text-green-700 flex justify-between  mb-10 mt-10 px-20 ">
            <div className="w-[250px] flex flex-col justify-start text-start">
                <CiHardDrive className="text-7xl text-left" />
                <h1 className="text-black text-2xl font-black mt-4">Hosting / Managed Hosting</h1>
                <p className="text-sm text-gray-500 w-[250px] mt-2">
                    Unser Managed Hosting bietet weltweit zuverlässige und sichere Lösungen mit lokalem Support in verschiedenen Sprachen. Wir gewährleisten hohe Performance, Sicherheit und Verfügbarkeit Ihrer Online-Präsenz. Unser Service umfasst die vollständige Verwaltung Ihres Hostings, einschließlich Updates, Sicherheit, Backups und technischem Support.
                </p>
            </div>
            <div className="hidden md:block w-px bg-gray-300 mx-6"></div> 
            
            <div className="w-[250px] flex flex-col justify-start">
                <FaPencilAlt className="text-7xl text-left"/>
                 <h1 className="text-black text-2xl font-black mt-4">Design</h1>
                <p className="text-sm text-gray-500 w-[250px] mt-2">
                    Unser Design-Service umfasst die Erstellung von Logos, Markenidentitäten, Webdesign und grafischen Elementen für Print- und Online-Medien. Wir legen großen Wert auf modernes und ansprechendes Design, das Ihre Marke optimal repräsentiert. Unsere Referenzen und Fallstudien belegen die Zufriedenheit unserer Kunden und den Erfolg unserer Designprojekte.
                </p>
            </div>
            <div className="hidden md:block w-px bg-gray-300 mx-6"></div> 
            <div className="w-[250px] flex flex-col justify-start">
                <FaRegKeyboard className="text-7xl text-left" />
                 <h1 className="text-black text-2xl font-black mt-4">Entwicklung</h1>
                <p className="text-sm text-gray-500 w-[250px] mt-2">
                    Unser Managed Hosting bietet weltweit zuverlässige und sichere Lösungen mit lokalem Support in verschiedenen Sprachen. Wir gewährleisten hohe Performance, Sicherheit und Verfügbarkeit Ihrer Online-Präsenz. Unser Service umfasst die vollständige Verwaltung Ihres Hostings, einschließlich Updates, Sicherheit, Backups und technischem Support.
                </p>
            </div>
            <div className="hidden md:block w-px bg-gray-300 mx-6"></div> 
            <div className="w-[250px] flex flex-col justify-start">
                <BiBuildings className="text-7xl text-left" />
                 <h1 className="text-black text-2xl font-black mt-4">Startups & Branding</h1>
                <p className="text-sm text-gray-500 w-[250px] mt-2">
                    Wir bieten umfassende Branding-Dienstleistungen, die Startups helfen, starke Markenidentitäten zu entwickeln. Dazu gehören Logo-Design, Markenstrategie und visuelle Kommunikation, um Ihre Marke im Markt herausragen zu lassen. Unsere Dienstleistungen schaffen eine konsistente Identität, die Vertrauen und Wiedererkennung fördert.
                </p>
            </div>
        </div>
    </div>
  )
};

export default MoreAbout;
