"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { notFound, useParams } from "next/navigation";
import { knowledgePosts } from "@/data/knowledge";
import { authors, getAuthorById } from "@/data/authors";
import { useLanguage } from "@/context/LanguageContext";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import Reveal from "@/app/components/Reveal";
import ImageStackCarousel from "@/app/components/ImageStackCarousel";

export default function KnowledgeArticle() {
  const { language } = useLanguage();
  const params = useParams();
  const slug = String(params.slug);

  const currentIndex = knowledgePosts.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) notFound();

  const post = knowledgePosts[currentIndex];
  const nextPost = knowledgePosts[(currentIndex + 1) % knowledgePosts.length];
  const author = getAuthorById(post.authorId) || authors[0];

  // Calculate estimated reading time
  const readingTime = useMemo(() => {
    const text = post[language].content.join(" ");
    const words = text.split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return language === "pt" ? `${minutes} MIN DE LEITURA` : `${minutes} MIN READ`;
  }, [post, language]);

  return (
    <main>
      {/* IMMERSIVE HERO COVER SECTION (SAME AS PROJECTS) */}
      <section className="project-hero">
        {post.image && (
          <Image
            src={post.image}
            alt={post[language].title}
            fill
            priority
            sizes="100vw"
          />
        )}
        <div className="project-hero-content">
          <div className="project-meta">
            <span>JOTAGGE / KNOWLEDGE / {String(currentIndex + 1).padStart(2, "0")}</span>
            <span>{post.date} · {readingTime}</span>
          </div>
          <h1 className="project-title">{post[language].title}</h1>
        </div>
      </section>

      {/* BODY CONTENT */}
      <section className="project-body">
        <div className="container">
          <Link href="/knowledge" className="project-back">
            ← {language === "pt" ? "Voltar ao Knowledge" : "Back to Knowledge"}
          </Link>

          <div className="project-body-grid">
            <article className="project-copy">
              {/* CLICKABLE AUTHOR HEADER */}
              {author && (
                <Reveal>
                  <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "1px solid var(--line-soft)" }}>
                    {author.link ? (
                      <a
                        href={author.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "14px",
                          textDecoration: "none",
                        }}
                        data-cursor="PROFILE"
                      >
                        {author.avatar && (
                          <div
                            style={{
                              position: "relative",
                              width: "48px",
                              height: "48px",
                              borderRadius: "50%",
                              overflow: "hidden",
                              border: "2px solid var(--accent)",
                              flexShrink: 0,
                            }}
                          >
                            <Image
                              src={author.avatar}
                              alt={author.name}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        )}

                        <div>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                            <strong style={{ color: "var(--fg)", fontSize: "14px", letterSpacing: "0.02em" }}>
                              {author.name} ↗
                            </strong>
                            <span style={{ color: "var(--dim)", fontSize: "11px" }}>·</span>
                            <span
                              style={{
                                color: "var(--accent)",
                                fontFamily: "var(--mono)",
                                fontSize: "10px",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                              }}
                            >
                              {author[language]?.role || "CREATOR"}
                            </span>
                          </div>

                          <div
                            style={{
                              fontFamily: "var(--mono)",
                              fontSize: "10px",
                              color: "var(--dim)",
                              letterSpacing: "0.14em",
                              marginTop: "3px",
                            }}
                          >
                            {post.date} · {readingTime}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                        {author.avatar && (
                          <div
                            style={{
                              position: "relative",
                              width: "48px",
                              height: "48px",
                              borderRadius: "50%",
                              overflow: "hidden",
                              border: "2px solid var(--accent)",
                              flexShrink: 0,
                            }}
                          >
                            <Image
                              src={author.avatar}
                              alt={author.name}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        )}
                        <div>
                          <strong style={{ color: "var(--fg)", fontSize: "14px" }}>{author.name}</strong>
                          <div style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontSize: "10px" }}>
                            {author[language]?.role}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Reveal>
              )}

              <Reveal>
                <p className="project-lead">{post[language].description}</p>
              </Reveal>

              {post[language].content.map((paragraph, i) => (
                <Reveal key={i} delay={i * 40}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}

              {/* ADDITIONAL IMAGES CAROUSEL */}
              {post.images && post.images.length > 0 && (
                <Reveal delay={80}>
                  <ImageStackCarousel
                    images={post.images}
                    title={post[language].title}
                  />
                </Reveal>
              )}

              {/* AUTHOR BIO CARD SECTION */}
              {author && (
                <Reveal delay={100}>
                  <div
                    style={{
                      marginTop: "64px",
                      padding: "32px",
                      background: "var(--bg-card)",
                      border: "1px solid var(--line-soft)",
                      borderRadius: "8px",
                      display: "grid",
                      gridTemplateColumns: "80px 1fr",
                      gap: "24px",
                      alignItems: "start",
                    }}
                  >
                    {author.link ? (
                      <a
                        href={author.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          position: "relative",
                          width: "80px",
                          height: "80px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          border: "1px solid var(--line)",
                          flexShrink: 0,
                          display: "block",
                        }}
                        data-cursor="LINK"
                      >
                        <Image
                          src={author.avatar}
                          alt={author.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </a>
                    ) : (
                      <div
                        style={{
                          position: "relative",
                          width: "80px",
                          height: "80px",
                          borderRadius: "8px",
                          overflow: "hidden",
                          border: "1px solid var(--line)",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={author.avatar}
                          alt={author.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    )}

                    <div>
                      <span className="kicker" style={{ fontSize: "10px", marginBottom: "6px", display: "inline-flex" }}>
                        {language === "pt" ? "AUTOR DA PUBLICAÇÃO" : "PUBLICATION AUTHOR"}
                      </span>
                      
                      <h3 style={{ font: "500 22px/1.2 var(--display)", letterSpacing: "-0.03em", margin: "4px 0" }}>
                        {author.link ? (
                          <a
                            href={author.link}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "var(--fg)", textDecoration: "none" }}
                          >
                            {author.name} <span style={{ fontSize: "16px", color: "var(--accent)" }}>↗</span>
                          </a>
                        ) : (
                          author.name
                        )}
                      </h3>

                      <p
                        style={{
                          color: "var(--accent)",
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "12px",
                        }}
                      >
                        {author[language].role}
                      </p>

                      <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6", margin: "0 0 16px" }}>
                        {author[language].bio}
                      </p>

                      <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                        {author.link && (
                          <a
                            href={author.link}
                            target="_blank"
                            rel="noreferrer"
                            className="hero-cta"
                            style={{ fontSize: "10px" }}
                          >
                            PERFIL DO AUTOR <span>↗</span>
                          </a>
                        )}
                        <Link href="/about" className="hero-cta" style={{ fontSize: "10px" }}>
                          {language === "pt" ? "SOBRE O CRIADOR" : "ABOUT THE CREATOR"} <span>↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}
            </article>

            {/* SIDEBAR */}
            <aside className="project-aside">
              <Reveal>
                <h3>{language === "pt" ? "Tags & Tópicos" : "Tags & Topics"}</h3>
                <div className="tagline" style={{ marginBottom: "40px" }}>
                  {post[language].tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <h3>{language === "pt" ? "Data & Arquivo" : "Date & Archive"}</h3>
                <div style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--muted)", marginBottom: "40px" }}>
                  {post.date}
                </div>

                <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--line-soft)" }}>
                  <h3>{language === "pt" ? "Próximo Artigo" : "Next Essay"}</h3>
                  <Link
                    href={`/knowledge/${nextPost.slug}`}
                    style={{
                      display: "block",
                      marginTop: "12px",
                      fontFamily: "var(--display)",
                      fontSize: "24px",
                      lineHeight: "1.2",
                      letterSpacing: "-0.03em",
                      color: "var(--fg)",
                    }}
                  >
                    {nextPost[language].title} →
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      <ArchiveFooter />
    </main>
  );
}
