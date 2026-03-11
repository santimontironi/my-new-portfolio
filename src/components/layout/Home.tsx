"use client"
import Typewriter from "typewriter-effect"
import useLanguage from "@/hooks/useLanguage"

const Home = () => {
  const { language } = useLanguage()

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center containerHome">

      <div className="relative z-10 flex flex-col items-center text-center md:text-left px-6 w-full">
        <div className="max-w-xl 2xl:max-w-2xl w-full">

          <h1 className="text-white leading-[1.1] text-[40px] md:text-[50px] 2xl:text-[70px] mb-5 md:mb-6">
            {language === "es" ? "Hola, soy" : "Hello, I'm"}{" "}
            <span className="text-[#7ecf8e] font-bold">
              Santiago
              <br />
              Montironi
            </span>
          </h1>

          <div className="w-full h-px bg-[#85f29b] mb-5 md:mb-6" />

          <div className="text-white/90 text-base md:text-lg lg:text-xl">
            <Typewriter
              options={{
                strings:
                  language === "es"
                    ? ["Desarrollador Fullstack", "Stack MERN", "Transformo ideas en software"]
                    : ["Fullstack Developer", "MERN Stack", "Transform ideas into software"],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 80,
              }}
            />
          </div>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-5">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-[#7ecf8e] text-[#0a1a0f] tracking-widest hover:bg-[#54a665] hover:text-white transition-all transform hover:-translate-y-3 duration-300">
              {language === "es" ? "Ver proyectos" : "View projects"}
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg px-6 py-3 border border-white/30 text-white tracking-widest hover:border-[#7ecf8e] hover:text-[#7ecf8e] transition-all transform hover:-translate-y-3 duration-300">
              {language === "es" ? "Contacto" : "Contact"}
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Home