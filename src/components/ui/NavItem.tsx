import type { NavItemProps } from "@/types"

const NavItem = ({ href, textEs, textEn, language, variant }: NavItemProps) => {
    return (
        <>
            {variant === "desktop" && (
                <a href={href} className="px-4 bg-[#458358] hover:bg-[#23aa59] transition-transform hover:-translate-y-1 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.60)] rounded-2xl py-2 xl:px-5 text-sm xl:text-base font-medium text-green-100 hover:text-white duration-200 no-underline">
                    {language === "es" ? textEs : textEn}
                </a>
            )}
        </>
    )
}

export default NavItem