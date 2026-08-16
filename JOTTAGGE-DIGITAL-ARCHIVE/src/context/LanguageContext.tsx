"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { translations, Language, TranslationType } from "@/data/translations";

interface LanguageContextProps {
    language: Language;
    t: TranslationType;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("pt");

    // Load saved language from localStorage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem("app_lang") as Language;
        if (savedLang && (savedLang === "pt" || savedLang === "en")) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLanguage(savedLang);
        }
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const newLang = prev === "pt" ? "en" : "pt";
            localStorage.setItem("app_lang", newLang);
            document.documentElement.lang = newLang === "pt" ? "pt-BR" : "en";
            return newLang;
        });
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
