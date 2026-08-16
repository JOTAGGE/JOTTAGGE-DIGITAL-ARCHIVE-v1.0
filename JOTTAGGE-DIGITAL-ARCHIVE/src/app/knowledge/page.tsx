"use client";

import Image from "next/image";
import Link from "next/link";
import { knowledgePosts } from "@/data/knowledge";
import { authors } from "@/data/authors";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/app/components/Reveal";
import ArchiveFooter from "@/app/components/ArchiveFooter";

export default function KnowledgePage() {
  const { language } = useLanguage();

  return (
    <main className="page-shell archive-page">
      <div className="container">
        {/* ARCHIVE HERO */}
        <section className="archive-hero">
          <div className="archive-hero-grid">
            <div>
              <div className="kicker">JOTAGGE / KNOWLEDGE ARCHIVE</div>
              <h1 className="display-title">
                Keep<br />
                <em>thinking.</em>
              </h1>
            </div>
            <div>
              <p className="lead">
                {language === "pt"
                  ? "Um arquivo de aprendizados, ensaios, pesquisa, perguntas e descobertas técnicas que merecem ser documentadas e preservadas."
                  : "An archive of learnings, essays, research, questions, and technical insights that deserve to be documented and preserved."}
              </p>
              <div className="archive-index" style={{ marginTop: "32px" }}>
                <strong>{String(knowledgePosts.length).padStart(2, "0")}</strong>{" "}
                {language === "pt" ? "PUBLICAÇÕES DISPONÍVEIS" : "ESSAYS AVAILABLE"}
              </div>
            </div>
          </div>
        </section>

        {/* KNOWLEDGE POSTS LIST */}
        <section className="project-list" style={{ marginTop: "40px" }}>
          {knowledgePosts.map((post, i) => {
            const author = authors.find((a) => a.id === post.authorId);
            return (
              <Reveal key={post.slug} delay={i * 50}>
                <Link
                  href={`/knowledge/${post.slug}`}
                  className="project-card"
                  data-cursor="READ"
                >
                  <span className="project-card-no">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        color: "var(--dim)",
                        letterSpacing: "0.14em",
                        marginBottom: "6px",
                      }}
                    >
                      {post.date} · {author?.name || "JOTAGGE"}
                    </div>

                    <h2>{post[language].title}</h2>
                    <p style={{ marginTop: "10px" }}>{post[language].description}</p>

                    <div className="tagline" style={{ marginTop: "14px" }}>
                      {post[language].tags.slice(0, 3).map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-card-media">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post[language].title}
                        fill
                        sizes="(max-width: 900px) 100vw, 40vw"
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", background: "#111" }} />
                    )}
                  </div>

                  <span style={{ color: "var(--dim)", fontSize: "16px" }}>↗</span>
                </Link>
              </Reveal>
            );
          })}
        </section>
      </div>

      <ArchiveFooter />
    </main>
  );
}
