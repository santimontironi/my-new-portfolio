import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Santiago Montironi - Portfolio",
  description: "Bienvenido a mi portfolio. Mi nombre es Santiago Montironi y soy Desarrollador Fullstack con experiencia en React, Next.js, Node.js y más. Explora mis proyectos, habilidades y servicios de desarrollo web. ¡Contáctame para colaborar en tu próximo proyecto!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
