export interface NavItemProps {
    href: string;
    language: string;
    textEs: string;
    textEn: string;
    variant: "desktop" | "mobile";
    setMenuOpen?: (open: boolean) => void;
}

export interface TechListProps {
    name: string
}

export interface StatListProps {
    value: string;
    language: string;
    textES: string;
    textEN: string;
    labelES: string;
    labelEN: string;
}

export interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
}

export type SkillListProps = {
    logo: string;
    name: string;
}