export interface NavItemProps {
    href: string;
    language: string;
    textEs: string;
    textEn: string;
    variant: "desktop" | "mobile";
    setMenuOpen?: (open: boolean) => void;
}