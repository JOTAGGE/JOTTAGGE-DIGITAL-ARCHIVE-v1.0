"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { labExperiments } from "@/data/lab";
import { useLanguage } from "@/context/LanguageContext";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import Reveal from "@/app/components/Reveal";

export default function LabCategory() {
  const { language } = useLanguage();
  const params = useParams();
  const slug = String(params.slug);

  const category = labExperiments.find((x) => x.slug === slug);
  if (!category) notFound();

  return (
    <main className="page-shell archive-page">
      <div className="container">
        {/* ARCHIVE HERO */}
        <section className="archive-hero">
          <div className="archive-hero-grid">
            <div>
              <div className="kicker">JOTAGGE / LAB / {category.slug.toUpperCase()}</div>
              <h1 className="display-title">
                {category[language].title}<br />
                <em>archive.</em>
              </h1>
            </div>
            <div>
              <p className="lead">{category[language].description}</p>
              <div className="tagline" style={{ marginTop: "24px" }}>
                {category[language].tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LAB ITEMS LIST */}
        <section className="project-list" style={{ marginTop: "40px" }}>
          {category.items.length > 0 ? (
            category.items.map((item, i) => (
              <Reveal key={item.slug} delay={i * 35}>
                <Link
                  href={`/lab/${category.slug}/${item.slug}`}
                  className="project-card"
                  data-cursor="OPEN"
                >
                  <span className="project-card-no">{String(i + 1).padStart(2, "0")}</span>

                  <div>
                    <h2>{item[language].title}</h2>
                    <p style={{ marginTop: "10px" }}>{item[language].description}</p>
                  </div>

                  <div>
                    <div className="tagline">
                      {item.image && <span>IMAGEM</span>}
                      {item[language].note && <span>{item[language].note}</span>}
                    </div>
                  </div>

                  <span style={{ color: "var(--dim)", fontSize: "16px" }}>↗</span>
                </Link>
              </Reveal>
            ))
          ) : (
            <div
              style={{
                padding: "80px 20px",
                borderBottom: "1px solid var(--line-soft)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "var(--dim)",
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  letterSpacing: "0.14em",
                }}
              >
                {language === "pt"
                  ? "ESTE ESPAÇO ESTÁ EM PREPARAÇÃO PARA NOVOS EXPERIMENTOS."
                  : "THIS TRACK IS BEING PREPARED FOR NEW EXPERIMENTS."}
              </p>
            </div>
          )}
        </section>

        <div style={{ marginTop: "48px" }}>
          <Link href="/lab" className="project-back">
            ← {language === "pt" ? "Voltar ao Lab" : "Back to Lab"}
          </Link>
        </div>
      </div>

      <ArchiveFooter />
    </main>
  );
}
