"use client";

import Link from "next/link";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import Reveal from "@/app/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function ResumePage() {
  const { t, language } = useLanguage();

  const skillsData = [
    {
      title: t.resume.developmentTitle,
      text: t.resume.developmentText,
      tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Python", "Dart", "Node.js"],
    },
    {
      title: t.resume.webTitle,
      text: t.resume.webText,
      tags: ["React", "Next.js", "Tailwind CSS", "REST APIs", "State Management"],
    },
    {
      title: t.resume.systemsTitle,
      text: t.resume.systemsText,
      tags: ["Prisma ORM", "PostgreSQL", "SQLite", "Node.js", "Clean Architecture"],
    },
    {
      title: t.resume.uxTitle,
      text: t.resume.uxText,
      tags: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Figma"],
    },
  ];

  return (
    <main className="page-shell archive-page">
      <div className="container">
        {/* ARCHIVE HERO */}
        <section className="archive-hero">
          <div className="archive-hero-grid">
            <div>
              <div className="kicker">JOTAGGE / CURRÍCULO & FORMAÇÃO</div>
              <h1 className="display-title">
                José<br />
                <em>Gabriel.</em>
              </h1>
            </div>
            <div>
              <p className="lead">{t.resume.subtitle}</p>
              <div style={{ display: "flex", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
                <a
                  href="/curriculo.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid"
                  data-cursor="PDF"
                >
                  {language === "pt" ? "BAIXAR CURRÍCULO PDF ↗" : "DOWNLOAD RESUME PDF ↗"}
                </a>
                <Link href="/contact" className="btn-pill">
                  {language === "pt" ? "ENTRAR EM CONTATO" : "GET IN TOUCH"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* RESUME GRID */}
        <div className="resume-grid">
          {/* SIDEBAR */}
          <aside className="resume-sidebar">
            <Reveal>
              <div className="resume-profile-card">
                <span className="kicker">INFO & LOCALIZAÇÃO</span>
                <h3>José Gabriel</h3>
                <p className="role-tag">Fullstack & Creative Technologist</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "var(--muted)", fontSize: "13px", marginTop: "16px" }}>
                  <div>📍 Recife / PE — Brasil</div>
                  <div>📧 jg.barros.dsantos@gmail.com</div>
                  <div>🌐 Disponível para projetos e contratos</div>
                </div>

                <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid var(--line-soft)" }}>
                  <span className="kicker" style={{ marginBottom: "8px", display: "block" }}>STACK PRINCIPAL</span>
                  <div className="tagline">
                    {["TypeScript", "React", "Next.js", "Python", "Node.js", "PostgreSQL", "Prisma"].map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </aside>

          {/* MAIN RESUME CONTENT */}
          <div className="resume-content">
            {/* PERFIL */}
            <section className="resume-section">
              <Reveal>
                <h2 className="resume-section-title">01 / {t.resume.profileTitle}</h2>
                <div className="about-copy" style={{ gap: "20px" }}>
                  <p>{t.resume.profileText}</p>
                  <p style={{ color: "var(--muted)", fontSize: "16px" }}>{t.resume.profileText2}</p>
                </div>
              </Reveal>
            </section>

            {/* FORMAÇÃO / EDUCATION */}
            <section className="resume-section">
              <Reveal>
                <h2 className="resume-section-title">02 / {t.resume.educationTitle}</h2>

                <div className="resume-timeline-item">
                  <div className="timeline-year">2022 — ATUAL</div>
                  <h3 className="timeline-title">{t.resume.internetSystemsTitle}</h3>
                  <div className="timeline-subtitle">{t.resume.internetSystemsSubtitle}</div>
                  <p className="timeline-desc">{t.resume.internetSystemsText}</p>
                </div>

                <div className="resume-timeline-item">
                  <div className="timeline-year">2019 — 2021</div>
                  <h3 className="timeline-title">{t.resume.digitalGamesTitle}</h3>
                  <div className="timeline-subtitle">{t.resume.digitalGamesSubtitle}</div>
                  <p className="timeline-desc">{t.resume.digitalGamesText}</p>
                </div>
              </Reveal>
            </section>

            {/* COMPETÊNCIAS / SKILLS */}
            <section className="resume-section">
              <Reveal>
                <h2 className="resume-section-title">03 / {t.resume.skillsTitle}</h2>

                <div className="skills-category-grid">
                  {skillsData.map((cat, idx) => (
                    <div key={cat.title} className="skill-category-card">
                      <h4>{cat.title}</h4>
                      <p style={{ marginBottom: "14px" }}>{cat.text}</p>
                      <div className="tagline">
                        {cat.tags.map((tg) => (
                          <span key={tg}>{tg}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* INTERESSES & PESQUISA */}
            <section className="resume-section">
              <Reveal>
                <h2 className="resume-section-title">
                  04 / {language === "pt" ? "Interesses e Pesquisa" : "Interests & Research"}
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "16px", lineHeight: "1.6" }}>
                  {t.resume.interestsText}
                </p>
                <div style={{ marginTop: "36px" }}>
                  <Link href="/projetos" className="hero-cta">
                    {language === "pt" ? "VER TRABALHOS NO ARQUIVO" : "VIEW SELECTED WORKS"} <span>↗</span>
                  </Link>
                </div>
              </Reveal>
            </section>
          </div>
        </div>
      </div>

      <ArchiveFooter />
    </main>
  );
}
