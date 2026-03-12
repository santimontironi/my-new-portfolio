"use client";
import useLanguage from "@/hooks/useLanguage";
import { allSkills } from "@/services/skillsServices";
import SkillCategory from "../ui/SkillCategory";

const Skills = () => {
  const { language } = useLanguage();

  const categories = [
    { label: language === "es" ? "Lenguajes" : "Languages", skills: allSkills.languages },
    { label: language === "es" ? "Diseño Web" : "Web Design", skills: allSkills.webDesignAndLayout },
    { label: "Frontend", skills: allSkills.frontendFrameworks },
    { label: "Backend", skills: allSkills.backendFrameworks },
    { label: language === "es" ? "Bases de Datos" : "Databases", skills: allSkills.databases },
    { label: language === "es" ? "Herramientas" : "Tools", skills: allSkills.tools },
  ];

  return (
    <section className="w-full bg-black py-20 md:py-28 xl:py-22 px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 xl:gap-16">

        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <h2 className="text-white font-bold text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.1]">
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
          {categories.map((cat) => (
            <SkillCategory key={cat.label} label={cat.label} skills={cat.skills} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
