"use client";
import useLanguage from "@/hooks/useLanguage";
import { allSkills } from "@/services/skillsServices";
import SkillList from "../ui/SkillList";

const Skills = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full bg-black py-20 md:py-28 xl:py-10 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 xl:gap-16">
       
        <div className="flex flex-col gap-4">
          <p className="text-[#7ecf8e] font-mono text-xs tracking-[0.3em] uppercase">
            {language === "es" ? "Mis habilidades" : "My skills"}
          </p>
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <h2
              className="text-white text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.1]"
            >
              {language === "es" ? (
                <>
                  Stack &amp;{" "}
                  <span className="text-[#7ecf8e]">tecnologías</span>
                </>
              ) : (
                <>
                  Stack &amp;{" "}
                  <span className="text-[#7ecf8e]">technologies</span>
                </>
              )}
            </h2>
          </div>
          <div className="w-12 h-px bg-[#7ecf8e]" />
        </div>

        <div className="flex flex-col gap-10 xl:gap-12">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-xs font-mono tracking-[0.25em] uppercase whitespace-nowrap">
                {language === "es" ? "Lenguajes" : "Languages"}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
              {allSkills.languages.map((skill) => (
                <SkillList key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Web Design */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-xs font-mono tracking-[0.25em] uppercase whitespace-nowrap">
                {language === "es" ? "Diseño Web" : "Web Design"}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
              {allSkills.webDesignAndLayout.map((skill) => (
                <SkillList key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-xs font-mono tracking-[0.25em] uppercase whitespace-nowrap">
                Frontend
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
              {allSkills.frontendFrameworks.map((skill) => (
                <SkillList key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-xs font-mono tracking-[0.25em] uppercase whitespace-nowrap">
                Backend
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
              {allSkills.backendFrameworks.map((skill) => (
                <SkillList key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-xs font-mono tracking-[0.25em] uppercase whitespace-nowrap">
                {language === "es" ? "Bases de Datos" : "Databases"}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
              {allSkills.databases.map((skill) => (
                <SkillList key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-white/30 text-xs font-mono tracking-[0.25em] uppercase whitespace-nowrap">
                {language === "es" ? "Herramientas" : "Tools"}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
              {allSkills.tools.map((skill) => (
                <SkillList key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
