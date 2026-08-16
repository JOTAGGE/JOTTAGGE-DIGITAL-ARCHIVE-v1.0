"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/app/components/Reveal";
import ArchiveFooter from "@/app/components/ArchiveFooter";

export default function Home() {
  const { language } = useLanguage();
  const [pointer, setPointer] = useState({ x: 70, y: 40 });
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [scrollTilt, setScrollTilt] = useState(0);

  const selectedWorksRef = useRef<HTMLElement>(null);
  const featured = useMemo(() => projects.slice(0, 6), []);
  const activeProject = featured[activeProjectIndex] || featured[0];

  // Mouse move listener over selected works section for 3D tilt
  const handleSectionMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!selectedWorksRef.current) return;
    const rect = selectedWorksRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    setMouseTilt({ x, y });
  };

  const handleSectionMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  // Scroll listener for dynamic parallax tilt
  useEffect(() => {
    const handleScroll = () => {
      if (!selectedWorksRef.current) return;
      const rect = selectedWorksRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far the section has scrolled through the viewport (-1 to 1)
      const progress = (windowHeight / 2 - (rect.top + rect.height / 2)) / windowHeight;
      setScrollTilt(Math.max(-8, Math.min(8, progress * 10)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const exploreCards = [
    {
      href: "/creative",
      no: "01",
      title: language === "pt" ? "Criação Autoral" : "Creative Works",
      desc: language === "pt" ? "Música, literatura e universos ficcionais." : "Music, literature, and fictional worlds.",
      tag: "MUSIC & WRITING",
    },
    {
      href: "/lab",
      no: "02",
      title: language === "pt" ? "Laboratório" : "The Lab",
      desc: language === "pt" ? "Protótipos, sistemas inacabados e estudos." : "Prototypes, unfinished systems, and studies.",
      tag: "EXPERIMENTS",
    },
    {
      href: "/knowledge",
      no: "03",
      title: language === "pt" ? "Base de Conhecimento" : "Knowledge Base",
      desc: language === "pt" ? "Artigos, notas, sínteses e reflexões." : "Articles, notes, summaries, and thoughts.",
      tag: "ARCHIVE & ESSAYS",
    },
  ];

  return (
    <main className="home">
      {/* HERO SECTION */}
      <section
        className="home-hero"
        onPointerMove={(e) =>
          setPointer({
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100,
          })
        }
      >
        <div
          className="home-hero-bg"
          style={{ "--mx": `${pointer.x}%`, "--my": `${pointer.y}%` } as React.CSSProperties}
        />
        <div className="home-gridline" />
        <Image
          src="/hero.jpg"
          alt="JOTAGGE Archive Cover"
          width={1200}
          height={900}
          className="home-hero-image"
          priority
        />

        <div className="hero-content">
          <div className="hero-overline">
            <span>01 / DIGITAL ARCHIVE</span>
            <span>RECIFE — BRASIL · EST. 2026</span>
          </div>

          <h1 className="hero-title">
            <span>JO</span>
            <span className="offset">TAGGE</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-intro">
              {language === "pt"
                ? "Software, design, música, literatura, pesquisa e experimentação. Um arquivo vivo das coisas que estou construindo."
                : "Software, design, music, literature, research and experimentation. A living archive of the things I am building."}
            </p>

            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <Link href="/projetos" className="hero-cta" data-cursor="EXPLORE">
                {language === "pt" ? "EXPLORAR ARQUIVO" : "EXPLORE ARCHIVE"} <span>↗</span>
              </Link>
            </div>

            <span className="hero-index">SCROLL PARA EXPLORAR ↓</span>
          </div>
        </div>
      </section>

      {/* MANIFESTO / STATEMENT */}
      <section className="home-statement">
        <div className="statement-inner">
          <Reveal>
            <div className="kicker">02 / MANIFESTO</div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <div className="statement-copy">
                I build <span>systems.</span>
                <br />
                I design <span>experiences.</span>
                <br />
                I create <span>worlds.</span>
              </div>
              <p className="statement-note">
                {language === "pt"
                  ? "JOTAGGE não é apenas um portfólio tradicional. É um registro contínuo do processo — projetos concluídos, protótipos, hipóteses, música, literatura e coisas que ainda estão ganhando forma."
                  : "JOTAGGE is not just a traditional portfolio. It is an ongoing record of the process — finished projects, prototypes, hypotheses, music, literature, and things still taking shape."}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SELECTED WORK (SUSPENDED 3D TILT SHOWCASE) */}
      <section
        ref={selectedWorksRef}
        className="home-work"
        onMouseMove={handleSectionMouseMove}
        onMouseLeave={handleSectionMouseLeave}
      >
        <div className="section-head">
          <h2>{language === "pt" ? "Trabalhos Selecionados" : "Selected Work"}</h2>
          <Link href="/projetos" data-cursor="VIEW">
            {language === "pt" ? "Ver todos os projetos (" : "View all projects ("}
            {projects.length}) ↗
          </Link>
        </div>

        <div className="selected-works-container">
          {/* LEFT COLUMN: SUSPENDED 3D FLOATING COVER */}
          <div className="suspended-stage">
            <Link
              href={`/projetos/${activeProject.slug}`}
              className="suspended-card-wrap"
              style={{
                transform: `perspective(1000px) rotateX(${mouseTilt.y * -14 + scrollTilt}deg) rotateY(${mouseTilt.x * 16}deg) rotateZ(${mouseTilt.x * -2.5}deg) scale(1.02)`,
              }}
              data-cursor="OPEN"
            >
              <div className="suspended-card-glow" />

              <div className="suspended-card-body">
                {activeProject.image ? (
                  <Image
                    key={activeProject.slug}
                    src={activeProject.image}
                    alt={activeProject[language].title}
                    fill
                    sizes="(max-width: 992px) 100vw, 580px"
                    priority
                  />
                ) : (
                  <div style={{ width: "100%", height: "100%", background: "#111" }} />
                )}

                <div className="suspended-card-overlay">
                  <div className="suspended-card-badge">
                    PROJECT {String(activeProjectIndex + 1).padStart(2, "0")} / 06 · {activeProject[language].tags[0] || "WORK"}
                  </div>
                  <h3 className="suspended-card-title">
                    {activeProject[language].title}
                  </h3>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px" }}>
                    <span className="tagline">
                      {activeProject[language].tags.slice(0, 3).map((tg) => (
                        <span key={tg}>{tg}</span>
                      ))}
                    </span>
                    <span className="hero-cta" style={{ fontSize: "10px", color: "var(--accent)" }}>
                      {language === "pt" ? "ACESSAR PROJETO ↗" : "VIEW DETAILS ↗"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE WORK LIST */}
          <div className="suspended-list">
            {featured.map((project, index) => {
              const isActive = index === activeProjectIndex;
              return (
                <Reveal key={project.slug} delay={index * 35}>
                  <div
                    className={`suspended-list-item ${isActive ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveProjectIndex(index)}
                    onClick={() => {
                      setActiveProjectIndex(index);
                    }}
                  >
                    <span className="suspended-list-no">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <Link
                        href={`/projetos/${project.slug}`}
                        className="suspended-list-title"
                        data-cursor="VIEW"
                      >
                        {project[language].title}
                      </Link>
                      <div className="tagline" style={{ marginTop: "8px" }}>
                        {project[language].tags.slice(0, 3).map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/projetos/${project.slug}`}
                      className="suspended-list-arrow"
                      data-cursor="OPEN"
                    >
                      ↗
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPLORE BEYOND CODE */}
      <section className="home-statement" style={{ paddingTop: "80px", paddingBottom: "100px" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "36px" }}>
            <h2>{language === "pt" ? "Territórios do Arquivo" : "Archive Realms"}</h2>
            <span className="kicker">DISCIPLINAS</span>
          </div>

          <div className="now-grid" style={{ marginTop: "24px" }}>
            {exploreCards.map((card, idx) => (
              <Reveal key={card.href} delay={idx * 60}>
                <Link
                  href={card.href}
                  className="now-card"
                  style={{ textDecoration: "none" }}
                  data-cursor="OPEN"
                >
                  <div>
                    <span className="now-no">{card.no} / {card.tag}</span>
                    <h3 style={{ font: "500 clamp(26px, 3.2vw, 42px)/1.05 var(--display)", letterSpacing: "-0.04em", margin: "16px 0 12px" }}>
                      {card.title}
                    </h3>
                    <p style={{ color: "var(--muted)", fontSize: "14.5px", lineHeight: "1.55" }}>
                      {card.desc}
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "24px", borderTop: "1px solid var(--line-soft)" }}>
                    <span className="hero-cta" style={{ fontSize: "10px" }}>ACESSAR <span>↗</span></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          <span>BUILD SYSTEMS</span>
          <span className="dot">✳</span>
          <span>CRAFT EXPERIENCES</span>
          <span className="dot">✳</span>
          <span>CODE & DESIGN</span>
          <span className="dot">✳</span>
          <span>SONIC EXPERIMENTS</span>
          <span className="dot">✳</span>
          <span>DOCUMENT KNOWLEDGE</span>
          <span className="dot">✳</span>
          <span>BUILD SYSTEMS</span>
          <span className="dot">✳</span>
          <span>CRAFT EXPERIENCES</span>
          <span className="dot">✳</span>
          <span>CODE & DESIGN</span>
          <span className="dot">✳</span>
        </div>
      </div>

      <ArchiveFooter />
    </main>
  );
}
