import type { NavItemProps } from "@/types";

const NavItem = ({ href, textEs, textEn, language, variant, setMenuOpen }: NavItemProps) => {
  return (
    <>
      {variant === "desktop" && (
        <a
          href={href}
          className="px-4 bg-[#458358] hover:bg-[#23aa59] transition-transform hover:-translate-y-1 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.60)] rounded-2xl py-2 xl:px-5 text-sm xl:text-base font-medium text-green-100 hover:text-white duration-200 no-underline"
        >
          {language === "es" ? textEs : textEn}
        </a>
      )}

      {variant === "mobile" && (
        <a
          href={href}
          onClick={() => setMenuOpen?.(false)}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-green-100 hover:text-white no-underline transition-all duration-200"
        >
          <span className="w-1 h-1 rounded-full bg-green-400 shrink-0 shadow-[0_0_4px_#4ade80]" />
          {language === "es" ? textEs : textEn}
        </a>
      )}
    </>
  );
};

export default NavItem;
