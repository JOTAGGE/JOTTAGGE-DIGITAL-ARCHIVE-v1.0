"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import Reveal from "@/app/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const works = [
  {
    title: "AORTA I: THE CROSS",
    category: "music",
    type: "Music / Album · 2026",
    image: "/AORTAI-THECROSS.jpg",
    slug: "AORTA-I-THE-CROSS",
    desc: "Produção musical experimental, atmosfera sonora densa e texturas industriais.",
    tags: ["Alternative Rap", "Experimental", "Concept Album"],
    featured: true,
  },
  {
    title: "HEAVY SICK ANGRY SUICIDAL",
    category: "music",
    type: "Music / Single · 2026",
    image: "/HSAS.jpg",
    slug: "HEAVY-SICK-ANGRY-SUICIDAL",
    desc: "Composição e sound design explorando peso emocional, distorção e ritmo cru.",
    tags: ["Dark", "Hip-Hop", "Experimental"],
    featured: true,
  },
  {
    title: "NEVER FORGIVE NEVER FORGET",
    category: "music",
    type: "Music / Release · 2026",
    image: "/nfnf.jpg",
    slug: "NEVER-FORGIVE-NEVER-FORGET",
    desc: "Exploração de timbres, ritmo hipnótico e paisagens sonoras sombrias.",
    tags: ["Alternative", "Sound Design", "Lo-Fi"],
    featured: false,
  },
  {
    title: "Mundo Dominado",
    category: "literature",
    type: "Literature / Ficção",
    image: "/mundodominado.jpg",
    slug: "mundo-dominado",
    desc: "Narrativa ficcional e construção de universos distópicos com foco em poder e sobrevivência.",
    tags: ["Ficção", "Livro", "Drama"],
    featured: false,
  },
  {
    title: "Sam",
    category: "literature",
    type: "Literature / Romance & Psicológico",
    image: "/Sam.png",
    slug: "SAM",
    desc: "Exploração psicológica profunda, desenvolvimento de personagens e criação de mundo ficcional.",
    tags: ["Psicológico", "Literatura", "Escrita Autoral"],
    featured: false,
  },
];

export default function CreativePage() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<"all" | "music" | "literature">("all");

  const filteredWorks = works.filter(
    (w) => filter === "all" || w.category === filter
  );

  return (
    <main className="page-shell archive-page">
      <div className="container">
        {/* ARCHIVE HERO */}
        <section className="archive-hero">
          <div className="archive-hero-grid">
            <div>
              <div className="kicker">JOTAGGE / CREATIVE UNIVERSE</div>
              <h1 className="display-title">
                Beyond<br />
                <em>code.</em>
              </h1>
            </div>
            <div>
              <p className="lead">
                {language === "pt"
                  ? "Tecnologia é uma das minhas linguagens de expressão. Música, produção sonora, literatura e construção de mundos são outras formas de dar vida a ideias."
                  : "Technology is one of my languages of expression. Music, sound production, literature, and worldbuilding are other ways to bring ideas to life."}
              </p>
              <div className="archive-index" style={{ marginTop: "32px" }}>
                <strong>{String(works.length).padStart(2, "0")}</strong>{" "}
                {language === "pt" ? "PRODUÇÕES AUTORAIS CATALOGADAS" : "CREATIVE WORKS CATALOGED"}
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <div style={{ display: "flex", gap: "8px", margin: "36px 0 28px", flexWrap: "wrap" }}>
          <button
            className={`btn-pill ${filter === "all" ? "is-active" : ""}`}
            onClick={() => setFilter("all")}
          >
            {language === "pt" ? "TODAS AS CRIAÇÕES" : "ALL CREATIVE"} ({works.length})
          </button>
          <button
            className={`btn-pill ${filter === "music" ? "is-active" : ""}`}
            onClick={() => setFilter("music")}
          >
            🎵 {language === "pt" ? "MÚSICA & ÁUDIO" : "MUSIC & AUDIO"} (3)
          </button>
          <button
            className={`btn-pill ${filter === "literature" ? "is-active" : ""}`}
            onClick={() => setFilter("literature")}
          >
            📖 {language === "pt" ? "LITERATURA & ESCRITA" : "LITERATURE & WRITING"} (2)
          </button>
        </div>

        {/* CREATIVE SHOWCASE GRID */}
        <div className="creative-showcase-grid">
          {filteredWorks.map((work, i) => {
            // Layout spans: 2 featured items take 6 columns, others take 4 columns (out of 12)
            const colSpan = filter === "all" ? (work.featured ? 6 : 4) : 6;

            return (
              <div
                key={work.title}
                style={{
                  gridColumn: `span ${colSpan}`,
                }}
              >
                <Reveal delay={i * 45}>
                  <Link
                    href={`/projetos/${work.slug}?from=creative`}
                    className="creative-card"
                    data-cursor="PLAY"
                  >
                    <div className="creative-card-media">
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        sizes="(max-width: 992px) 100vw, 50vw"
                      />
                    </div>

                    <div className="creative-card-info">
                      <div>
                        <div className="creative-card-meta">
                          <span>{work.type}</span>
                          <span style={{ fontSize: "12px" }}>↗</span>
                        </div>
                        <h2 className="creative-card-title">{work.title}</h2>
                        <p className="creative-card-desc">{work.desc}</p>
                      </div>

                      <div className="tagline">
                        {work.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>

      <ArchiveFooter />
    </main>
  );
}
