"use client"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { RiCloseFill } from "react-icons/ri"


interface Props {
    open: boolean
    setOpen: () => void
}

export const DrawerMenu = ({open = false, setOpen}: Props) => {
  return (
    <AnimatePresence>

    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity: 0}}
    transition={{duration:0.5}}
    className={`${open ? "flex" : "hidden"} flex-col text-center fixed z-50 inset-0 h-screen bg-(--drawerBg)`} >
    
    {/* Icono de cierre a la derecha */}
    <motion.div
        key="menu"
        initial={{ opacity: 0, rotateX: -90}}
        animate={{ opacity: 1, rotateX: 0}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.2 }}
        className="flex justify-end p-6"
        onClick={setOpen}
        >
        <RiCloseFill className="text-3xl text-black" />
    </motion.div>

    {/* Menú de links */}
    <div className="flex flex-col justify-center gap-y-6 mt-18">
        <Link href={'/'}>
            <div className="bg-white text-center shadow-2xl w-[75%] mx-auto p-3">
                <p className="text-black text-xl">Home</p>       
            </div>
        </Link>
        <Link href={'/about'} >
            <div className="bg-white text-center w-[75%] shadow-2xl mx-auto p-3">
                <p className="text-black text-xl">About</p>       
            </div>
        </Link>
        <Link href={'/kontakt'}>
            <div className="bg-white text-center w-[75%] shadow-2xl mx-auto p-3">
                <p className="text-black text-xl">Contact</p>       
            </div>
        </Link>
    </div>
</motion.div>
</AnimatePresence>

  )
}

