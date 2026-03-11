import type { StatListProps } from "@/types"

const StatList = ({labelES, labelEN, language, textES, textEN }: StatListProps) => {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-[#7ecf8e] text-3xl md:text-4xl xl:text-5xl">
                {language === "es" ? textES : textEN}
            </span>
            <span className="text-white/40 text-xs md:text-sm font-mono tracking-wider uppercase">
                {language === "es" ? labelES : labelEN}
            </span>
        </div>
    )
}

export default StatList