import { SkillListProps } from "@/types"
import Image from "next/image"

const SkillList = ({ icon, name }: SkillListProps) => {
  return (
    <div className="group flex flex-col items-center gap-2 p-3 md:p-4 border-3 border-white/10 hover:border-[#15803c9d] bg-white/5 hover:bg-white/5 transition-all duration-300 cursor-default min-w-20">
      <Image
        src={icon}
        alt={name}
        width={60}
        height={60}
        className="w-8 h-8 md:h-10 md:w-10 xl:w-15 xl:h-15 object-contain group-hover:scale-110 transition-transform duration-300"
      />
      <span className="text-white/50 group-hover:text-[#7ecf8e] text-[10px] md:text-xs font-mono tracking-wide transition-colors duration-300 text-center">
        {name}
      </span>
    </div>
  )
}

export default SkillList