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
    icon: string;
    name: string;
}

export type ContactItemProps = {
    icon: string;
    label: string;
    href: string;
}

export type SendMailData = {
    name: string;
    surname: string;
    email: string;
    message: string;
}

export type SendMailResponse = {
    message: string;
}

export type ModalProps = {
    language: string
    messageES: string;
    messageEN: string;
}