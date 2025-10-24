"use client";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiCloseFill, RiInstagramFill, RiLinkedinFill,  RiMenuFill } from "react-icons/ri";
import { motion } from "motion/react"


export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2) {
            setScrolled(true);
            } else {
            setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
    //Mobile Navbar
    <>
        <div className=
                {`fixed top-0 left-0 flex w-full justify-between md:hidden items-center h-20 px-5 lg:mx-8 z-20 transition-colors duration-300
                    ${scrolled ? 'bg-black' : 'bg-transparent'}    
                `}
        >
            <Image
                src="/weiss.png"
                alt="Metis Origins Logo"
                width={130}
                height={130}
                className="object-contain"
                priority
            />

             <div className="w-10 h-10 relative">
            <AnimatePresence >
                {open ? (
                <motion.div
                    key="menu"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={() => setOpen(false)}
                >
                    <RiCloseFill className="text-3xl" />
                </motion.div>
                ) : (
                <motion.div
                    key="close"
                    initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setOpen(true)}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <RiMenuFill className="text-3xl" />
                </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>


        {/* // Desktop navbar */}
        <nav className={`hidden fixed top-0 left-0 w-full lg:flex items-center justify-between  px-28 py-8  z-20 ${scrolled ? 'bg-black' : 'bg-transparent'} transition-colors duration-300 ease-in-out`}>
        {/* Logo */}
        <Link href="/" className="flex items-center">
            <Image
            src="/weiss.png"
            alt="Metis Origins Logo"
            width={130}
            height={130}
            className="object-contain"
            priority
            />
        </Link>

        {/* Links */}
        <div className="flex items-center gap-x-8 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/ueber-uns">About</Link>

            {/* Botón "Kontakt" */}
            <Link
            href="/kontakt"
            className="ml-2 inline-flex items-center justify-center rounded-full border border-white bg-white text-black px-5 py-2 font-semibold"
            >
            Kontakt
            </Link>

            {/* Iconos sociales */}
            <div className="flex items-center gap-x-4 text-xl ml-2">
            <Link
                target="_blank"
                href="https://www.instagram.com/metisorigins/"
                aria-label="Instagram"
                >
                <RiInstagramFill />
            </Link>
            <Link
                target="_blank"
                href="https://www.linkedin.com/company/metisorigins/"
                aria-label="LinkedIn"
                >
                <RiLinkedinFill />
            </Link>
            </div>
        </div>
        </nav>
    </>
  );
};
