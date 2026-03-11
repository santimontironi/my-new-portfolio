"use client"
import useLanguage from "@/hooks/useLanguage"
import { allSkills } from "@/services/skillsServices";
import SkillList from "../ui/SkillList";

const Skills = () => {
  const { language } = useLanguage();

  const { languages, frontendFrameworks, backendFrameworks, databases, tools, webDesignAndLayout } = allSkills;

  return (
    <section>

    </section>
  )
}

export default Skills