import type { TechListProps } from "@/types"

const TechList = ({ name }: TechListProps) => {
    return (
        <span key={name} className="px-3 py-1 border border-white/10 text-white/50 text-xs font-mono tracking-wider hover:border-[#7ecf8e]/50 hover:text-[#7ecf8e] transition-colors duration-300">
            {name}
        </span>
    )
}

export default TechList