"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import Reveal from "@/app/components/Reveal";

export default function NowPage() {
  const { t, language } = useLanguage();

  const cards = [
    { ...t.now.cards.building, tag: "BUILDING" },
    { ...t.now.cards.studying, tag: "STUDYING" },
    { ...t.now.cards.exploring, tag: "EXPLORING" },
  ];

  return (
    <main className="page-shell archive-page">
      <div className="container">
        {/* ARCHIVE HERO */}
        <section className="archive-hero">
          <div className="archive-hero-grid">
            <div>
              <div className="kicker">JOTAGGE / NOW PAGE</div>
              <h1 className="display-title">
                Right<br />
                <em>now.</em>
              </h1>
            </div>
            <div>
              <p className="lead">{t.now.subtitle}</p>
              <div className="archive-index" style={{ marginTop: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="status-dot" />
                  <strong>STATUS ATIVO</strong> · ATUALIZADO EM AGOSTO 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NOW CARDS */}
        <div className="now-grid">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 50}>
              <section className="now-card">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="now-no">0{i + 1}</span>
                    <span className="tag-pill">{card.tag}</span>
                  </div>
                  <h2>{card.title}</h2>
                  <ul>
                    {card.items.map((item) => (
                      <li key={item}>
                        <span className="arrow">↳</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <div style={{ paddingTop: "60px", display: "flex", gap: "20px", alignItems: "center" }}>
          <Link href="/contact" className="btn-solid">
            {language === "pt" ? "DISCUTIR UMA IDEIA ↗" : "DISCUSS AN IDEA ↗"}
          </Link>
          <Link href="/projetos" className="hero-cta">
            {language === "pt" ? "VER PROJETOS CONCLUÍDOS" : "VIEW FINISHED WORK"} <span>↗</span>
          </Link>
        </div>
      </div>

      <ArchiveFooter />
    </main>
  );
}
