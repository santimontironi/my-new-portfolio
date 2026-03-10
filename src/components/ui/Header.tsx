"use client"

import { useState } from "react"
import Image from "next/image"
import useLanguage from "@/hooks/useLanguage"
import NavItem from "./NavItem"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const { language, setLanguage } = useLanguage()

  return (
    <header
      className="sticky bg-linear-to-r from-[#14532d] to-[#15803d] top-0 z-50 text-white backdrop-blur-sm"
    >
      
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 xl:px-14 2xl:px-20">
        <div className="flex items-center justify-between h-23 md:h-18 xl:h-24 2xl:h-28">

          <a href="#inicio" className="flex items-center gap-2 no-underline mt-3">
            <Image src="/images/logoWeb.png" alt="Logo" width={100} height={100} priority/>
          </a>

          <nav className="hidden md:flex items-center gap-3">
            <NavItem href="#inicio" textEs="Inicio" textEn="Home" language={language} variant="desktop" />
            <NavItem href="#sobre-mi" textEs="Sobre mí" textEn="About" language={language} variant="desktop" />
            <NavItem href="#servicios" textEs="Servicios" textEn="Services" language={language} variant="desktop" />
            <NavItem href="#habilidades" textEs="Habilidades" textEn="Skills" language={language} variant="desktop" />
            <NavItem href="#proyectos" textEs="Proyectos" textEn="Projects" language={language} variant="desktop" />
            <NavItem href="#contacto" textEs="Contacto" textEn="Contact" language={language} variant="desktop" />
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setLanguage("es")}
              title="Español"
              className={`flex items-center gap-1.5 px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg text-sm font-semibold transition-all duration-250 cursor-pointer bg-[rgba(255,255,255,0.08)] border border-white/50 ${language === "es" ? "bg-[rgba(255,255,255,0.95)] text-[#166534] shadow-[0_2px_8px_rgba(74,222,128,0.3)]" : ""}`}
            >
              <Image src="https://img.icons8.com/?size=100&id=17967&format=png&color=000000" alt="Español" width={20} height={20} />
              <span className="hidden xl:inline">ES</span>
            </button>
            <button
              onClick={() => setLanguage("en")}
              title="English"
              className={`flex items-center gap-1.5 px-3 py-1.5 xl:px-4 xl:py-2 rounded-lg text-sm font-semibold transition-all duration-250 cursor-pointer bg-[rgba(255,255,255,0.08)] border border-white/50 ${language === "en" ? "bg-[rgba(255,255,255,0.95)] text-[#166534] shadow-[0_2px_8px_rgba(74,222,128,0.3)]" : ""}`}
            >
              <Image src="https://img.icons8.com/?size=100&id=15534&format=png&color=000000" alt="English" width={20} height={20} />
              <span className="hidden xl:inline">EN</span>
            </button>
          </div>

          <button
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-xl mr-4 border border-white/0.15 transition-all duration-200 cursor-pointer ${menuOpen ? "bg-white/0.15" : "bg-white/0.08"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} text-xl`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"}`}>
        <div
          className="mx-3 mb-3 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/12"
        >
          <div className="p-3 flex flex-col gap-1">
            <NavItem href="#inicio" textEs="Inicio" textEn="Home" language={language} variant="mobile" setMenuOpen={setMenuOpen} />
            <NavItem href="#sobre-mi" textEs="Sobre mí" textEn="About" language={language} variant="mobile" setMenuOpen={setMenuOpen} />
            <NavItem href="#servicios" textEs="Servicios" textEn="Services" language={language} variant="mobile" setMenuOpen={setMenuOpen} />
            <NavItem href="#habilidades" textEs="Habilidades" textEn="Skills" language={language} variant="mobile" setMenuOpen={setMenuOpen} />
            <NavItem href="#proyectos" textEs="Proyectos" textEn="Projects" language={language} variant="mobile" setMenuOpen={setMenuOpen} />
            <NavItem href="#contacto" textEs="Contacto" textEn="Contact" language={language} variant="mobile" setMenuOpen={setMenuOpen} />

            <div className="flex gap-2 px-1 pb-1">
              <button
                onClick={() => setLanguage("es")}
                className={`flex items-center gap-2 flex-1 justify-center px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${language === "es" ? "bg-white/95 text-[#166534] shadow-[0_2px_8px_rgba(74,222,128,0.3)]" : "bg-white/0.08 text-white/70 border border-white/0.12"}`}
              >
                <Image src="https://img.icons8.com/?size=100&id=17967&format=png&color=000000" alt="Español" width={20} height={20} />
                Español
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`flex items-center gap-2 flex-1 justify-center px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${language === "en" ? "bg-white/95 text-[#166534] shadow-[0_2px_8px_rgba(74,222,128,0.3)]" : "bg-white/0.08 text-white/70 border border-white/0.12"}`}
              >
                <Image src="https://img.icons8.com/?size=100&id=15534&format=png&color=000000" alt="English" width={20} height={20} />
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header