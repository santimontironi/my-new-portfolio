"use client"

import { useState } from "react";
import { createContext } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({children}: {children: React.ReactNode}) => { //React.ReactNode es para decirle a TypeScript que el children puede ser cualquier cosa que React pueda renderizar, como elementos JSX, texto, fragmentos, etc.
  const [language, setLanguage] = useState('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider  >
  )
}

export default LanguageContext