import type { ContactItemProps } from "@/types"
import Image from "next/image"

const ContactItem = ({ icon, label, href }: ContactItemProps) => {
    return (
        <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-white/70 font-bold hover:text-[#7ecf8e] transition-colors duration-300"
        >
            <Image
                priority
                src={icon}
                alt={label}
                width={20}
                height={20}
                className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-sm font-mono tracking-wide group-hover:underline underline-offset-4">
                {label}
            </span>
        </a>
    )
}

export default ContactItem