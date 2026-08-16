"use client";

import Link from "next/link";
import { labExperiments } from "@/data/lab";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/app/components/Reveal";
import ArchiveFooter from "@/app/components/ArchiveFooter";

export default function LabPage() {
  const { language } = useLanguage();

  return (
    <main className="page-shell archive-page">
      <div className="container">
        {/* ARCHIVE HERO */}
        <section className="archive-hero">
          <div className="archive-hero-grid">
            <div>
              <div className="kicker">JOTAGGE / R&D LABORATORY</div>
              <h1 className="display-title">
                Things<br />
                <em>unfinished.</em>
              </h1>
            </div>
            <div>
              <p className="lead">
                {language === "pt"
                  ? "O lugar onde ideias podem ser testadas sem a obrigação imediata de virar produto. Protótipos, sistemas, interfaces, pesquisas e ideias que deixaram aprendizados."
                  : "The place where ideas can be tested without the immediate pressure of becoming a commercial product. Prototypes, systems, interfaces, and exploratory research."}
              </p>
              <div className="archive-index" style={{ marginTop: "32px" }}>
                <strong>{String(labExperiments.length).padStart(2, "0")}</strong>{" "}
                {language === "pt" ? "CATEGORIAS EXPERIMENTAIS" : "EXPERIMENTAL TRACKS"}
              </div>
            </div>
          </div>
        </section>

        {/* LAB CATEGORIES LIST */}
        <section className="project-list" style={{ marginTop: "40px" }}>
          {labExperiments.map((item, i) => (
            <Reveal key={item.slug} delay={i * 40}>
              <Link href={`/lab/${item.slug}`} className="project-card" data-cursor="OPEN">
                <span className="project-card-no">{String(i + 1).padStart(2, "0")}</span>

                <div>
                  <h2>{item[language].title}</h2>
                  <p style={{ marginTop: "10px" }}>{item[language].description}</p>
                  <div className="tagline" style={{ marginTop: "14px" }}>
                    {item[language].tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    color: "var(--dim)",
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textAlign: "right",
                  }}
                >
                  <span style={{ color: "var(--accent)" }}>
                    {String(item.items.length).padStart(2, "0")}
                  </span>{" "}
                  {language === "pt" ? "ITENS" : "ITEMS"}
                </div>

                <span style={{ color: "var(--dim)", fontSize: "16px" }}>↗</span>
              </Link>
            </Reveal>
          ))}
        </section>
      </div>

      <ArchiveFooter />
    </main>
  );
}
