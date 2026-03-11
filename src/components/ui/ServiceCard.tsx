import type { ServiceCardProps } from "@/types"

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
    return (
        <div className="group flex flex-col gap-4 p-6 md:p-8 border border-white/10 hover:border-[#7ecf8e]/50 bg-white/5 hover:bg-white/5 transition-all duration-300 cursor-default">

            <div className="flex items-center justify-between">
                <i className={`${icon} text-3xl md:text-4xl text-[#7ecf8e] group-hover:scale-110 transition-transform duration-300`} />
                <span className="w-8 h-px bg-white/10 group-hover:bg-[#7ecf8e]/50 group-hover:w-12 transition-all duration-300" />
            </div>

            <h3 className="text-white text-lg md:text-xl font-mono tracking-wide">
                {title}
            </h3>

            <p className="text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {description}
            </p>

        </div>
    )
}

export default ServiceCard