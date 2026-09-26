"use client"
import Link from "next/link"
import useLanguage from "@/hooks/useLanguage"

const NotFound = () => {
  const { language } = useLanguage()

  return (
    <section className="w-full min-h-screen bg-zinc-950 flex items-center justify-center px-6 overflow-hidden relative">

      <div className="hidden xl:block absolute top-10 left-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#7ecf8e]/12 blur-3xl pointer-events-none" />
      <div className="hidden xl:block absolute -bottom-10 right-0 w-40 h-40 md:w-64 md:h-64 rounded-full bg-[#7ecf8e]/12 blur-2xl pointer-events-none" />

      <div className="flex flex-col items-center text-center gap-6 relative z-10">
        <span className="text-[#7ecf8e] text-7xl md:text-9xl font-bold leading-none">404</span>

        <div className="w-12 h-px bg-[#7ecf8e]" />

        <h1 className="text-white text-2xl md:text-4xl font-bold">
          {language === "es" ? "Página no encontrada" : "Page not found"}
        </h1>

        <p className="text-white/60 text-base md:text-lg max-w-md">
          {language === "es"
            ? "La página que buscás no existe o fue movida."
            : "The page you're looking for doesn't exist or was moved."}
        </p>

        <Link
          href="/"
          className="group inline-flex items-center gap-3 px-8 py-4 mt-2 bg-[#7ecf8e] text-[#0a1a0f] text-sm font-bold tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(126,207,142,0.5)] hover:shadow-[0_0_45px_rgba(126,207,142,0.75)] hover:scale-[1.03] active:scale-[0.97]"
        >
          <i className="bi bi-arrow-left relative z-10 transition-transform duration-300 group-hover:-translate-x-1" />
          {language === "es" ? "Volver al inicio" : "Back to home"}
        </Link>
      </div>
    </section>
  )
}

export default NotFound
