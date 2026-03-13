"use client"
import useLanguage from "@/hooks/useLanguage"
import Image from "next/image"

const Footer = () => {
    const { language } = useLanguage()

    return (
        <footer className="w-full bg-[#0a1a0f] border-t border-[#7ecf8e]/10 py-10 md:py-12 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
            <div className="max-w-6xl mx-auto flex flex-col gap-8">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                    <div className="flex flex-col gap-1">
                        <span
                            className="text-white text-xl md:text-2xl"
                        >
                            Santiago Montironi
                        </span>
                        <span className="text-[#7ecf8e] text-xs font-bold tracking-[0.25em] uppercase">
                            Fullstack Developer
                        </span>
                    </div>

                    <nav className="flex flex-wrap gap-5 md:gap-8">
                        <a href="#home" className="text-white/70 hover:text-[#7ecf8e] text-xs font-mono tracking-widest uppercase transition-colors duration-300">
                            {language === "es" ? "Inicio" : "Home"}
                        </a>
                        <a href="#about" className="text-white/70 hover:text-[#7ecf8e] text-xs font-mono tracking-widest uppercase transition-colors duration-300">
                            {language === "es" ? "Sobre mí" : "About"}
                        </a>
                        <a href="#services" className="text-white/70 hover:text-[#7ecf8e] text-xs font-mono tracking-widest uppercase transition-colors duration-300">
                            {language === "es" ? "Servicios" : "Services"}
                        </a>
                        <a href="#projects" className="text-white/70 hover:text-[#7ecf8e] text-xs font-mono tracking-widest uppercase transition-colors duration-300">
                            {language === "es" ? "Proyectos" : "Projects"}
                        </a>
                        <a href="#contact" className="text-white/70 hover:text-[#7ecf8e] text-xs font-mono tracking-widest uppercase transition-colors duration-300">
                            {language === "es" ? "Contacto" : "Contact"}
                        </a>
                    </nav>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <p className="text-white/70 text-xs tracking-wide">
                        © {new Date().getFullYear()} Santiago Montironi.{" "}
                        {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
                    </p>

                    <div className="flex items-center gap-5">
                        <a href="https://github.com/santimontironi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white/70 hover:text-[#7ecf8e] text-lg transition-colors duration-300">
                            <Image priority src="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff" alt="GitHub" width={20} height={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/santiago-montironi-649652215/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-[#7ecf8e] text-lg transition-colors duration-300">
                            <Image priority src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" width={20} height={20} />
                        </a>
                        <a href="mailto:santiagomontironi21@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-white/70 hover:text-[#7ecf8e] text-lg transition-colors duration-300">
                            <Image priority src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" alt="Email" width={20} height={20} />
                        </a>
                    </div>

                </div>

            </div >
        </footer >
    )
}

export default Footer