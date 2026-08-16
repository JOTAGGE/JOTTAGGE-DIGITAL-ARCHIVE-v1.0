"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { href: "/projetos", en: "WORK", pt: "PROJETOS" },
  { href: "/creative", en: "CREATIVE", pt: "CREATIVE" },
  { href: "/lab", en: "LAB", pt: "LAB" },
  { href: "/knowledge", en: "KNOWLEDGE", pt: "KNOWLEDGE" },
  { href: "/about", en: "ABOUT", pt: "SOBRE" },
  { href: "/now", en: "NOW", pt: "AGORA" },
  { href: "/curriculo", en: "RESUME", pt: "CURRÍCULO" },
  { href: "/contact", en: "CONTACT", pt: "CONTATO" },
] as const;

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-mark">J</span>
          <span className="nav-name">JOTAGGE</span>
        </Link>

        <div className="nav-meta">
          <button
            className="nav-lang-btn"
            onClick={toggleLanguage}
            aria-label="Alternar idioma"
            title="Switch Language (PT / EN)"
          >
            <span className={language === "pt" ? "active-lang" : ""}>PT</span>
            <span style={{ opacity: 0.3 }}>/</span>
            <span className={language === "en" ? "active-lang" : ""}>EN</span>
          </button>

          <button
            className={`nav-toggle ${open ? "is-open" : ""}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="menu-grid">
          <div className="menu-intro">
            <span>INDEX / NAVEGAÇÃO</span>
            <p>
              {language === "pt"
                ? "Um arquivo vivo de software, interfaces, pesquisa e artefatos digitais."
                : "A living archive of software, interfaces, research and digital artifacts."}
            </p>
          </div>

          <nav className="menu-links">
            {navLinks.map((item, index) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`menu-link ${isActive ? "is-current" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="menu-number">0{index + 1}</span>
                  <span>{language === "pt" ? item.pt : item.en}</span>
                  <span className="menu-arrow">↗</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="menu-footer">
          <span>RECIFE / PE — BRASIL</span>
          <span>DISPONÍVEL PARA PROJETOS</span>
          <a href="mailto:jg.barros.dsantos@gmail.com">JG.BARROS.DSANTOS@GMAIL.COM</a>
        </div>
      </div>
    </>
  );
}
