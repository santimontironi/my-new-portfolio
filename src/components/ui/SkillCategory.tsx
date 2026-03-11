import SkillList from "./SkillList";
import { SkillListProps } from "@/types";

interface SkillCategoryProps {
  label: string;
  skills: SkillListProps[];
}

const SkillCategory = ({ label, skills }: SkillCategoryProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-white/30 text-xs font-mono tracking-[0.25em] uppercase whitespace-nowrap">
          {label}
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-3">
        {skills.map((skill) => (
          <SkillList key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
