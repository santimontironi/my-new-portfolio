"use client"
import useLanguage from "@/hooks/useLanguage"
import TechList from "../ui/TechList"
import StatList from "../ui/StatList"

const About = () => {
  const { language } = useLanguage()

  return (
    <section className="w-full bg-zinc-950 py-20 md:py-28 xl:py-36 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 overflow-hidden relative">

      <div className="hidden xl:block absolute top-10 left-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-[#7ecf8e]/12 blur-3xl pointer-events-none" />
      <div className="hidden xl:block absolute -bottom-10 right-0 w-40 h-40 md:w-64 md:h-64 rounded-full bg-[#7ecf8e]/12 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-12 xl:gap-24 items-start xl:items-center">

        <div className="xl:w-2/5 flex flex-col gap-6">
          <p className="text-[#7ecf8e] text-xs xl:text-[15px] tracking-[0.3em] uppercase">
            {language === "es" ? "Sobre mí" : "About me"}
          </p>

          <h2 className="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.1] font-bold">
            {language === "es" ? (
              <>Desarrollador<br /><span className="text-[#7ecf8e]">Full Stack</span></>
            ) : (
              <>Full Stack<br /><span className="text-[#7ecf8e]">developer</span></>
            )}
          </h2>

          <div className="w-12 h-px bg-[#7ecf8e]" />

          <div className="flex flex-wrap gap-2 mt-2">
            <TechList name="MongoDB" />
            <TechList name="Express" />
            <TechList name="React" />
            <TechList name="Node.js" />
            <TechList name="Next.js" />
            <TechList name="TypeScript" />
          </div>
        </div>

        <div className="xl:w-3/5 flex flex-col gap-8">

          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            {language === "es"
              ? "Soy Santiago Montironi, tengo 23 años y soy Técnico Superior en Desarrollo de Software. Me especializo en el stack MERN y en construir aplicaciones web modernas con Next.js, TypeScript y las últimas tecnologías del ecosistema JavaScript."
              : "I'm Santiago Montironi, 23 years old and a Higher Technician in Software Development. I specialize in the MERN stack and building modern web applications with Next.js, TypeScript, and the latest JavaScript ecosystem technologies."}
          </p>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            {language === "es"
              ? "Me apasiona transformar ideas en productos digitales funcionales, cuidando tanto la experiencia de usuario como la calidad del código. Siempre estoy aprendiendo y buscando nuevos desafíos."
              : "I'm passionate about turning ideas into functional digital products, caring about both user experience and code quality. I'm always learning and looking for new challenges."}
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <StatList value="23" language={language} textES="23" textEN="23" labelES="Años" labelEN="Years old" />
            <StatList value="+10" language={language} textES="+10" textEN="+10" labelES="Proyectos" labelEN="Projects" />
            <StatList value="+3" language={language} textES="+3" textEN="+3" labelES="Años de experiencia" labelEN="Years of experience" />
          </div>

          <div className="pt-2">
            <a href="/CV - Santiago José Montironi.pdf" download className="group inline-flex items-center gap-3 px-8 py-4 bg-[#7ecf8e] text-[#0a1a0f] text-sm font-bold tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(146,307,142,0.5)] hover:shadow-[0_0_45px_rgba(126,207,142,0.75)] hover:scale-[1.03] active:scale-[0.97]">
              <i className="bi bi-download relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
              {language === "es" ? "Descargar CV" : "Download CV"}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About