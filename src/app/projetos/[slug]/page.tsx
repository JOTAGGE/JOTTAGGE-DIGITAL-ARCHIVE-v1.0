"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams, useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import Reveal from "@/app/components/Reveal";
import ImageStackCarousel from "@/app/components/ImageStackCarousel";

export default function ProjectPage() {
  const { language } = useLanguage();
  const params = useParams();
  const search = useSearchParams();
  const slug = String(params.slug);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  if (currentIndex === -1) notFound();

  const project = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const back = search.get("from") === "creative" ? "/creative" : "/projetos";

  return (
    <main>
      {/* HERO SECTION */}
      <section className="project-hero">
        {project.image && (
          <Image
            src={project.image}
            alt={project[language].title}
            fill
            priority
            sizes="100vw"
          />
        )}
        <div className="project-hero-content">
          <div className="project-meta">
            <span>JOTAGGE / WORK / {String(currentIndex + 1).padStart(2, "0")}</span>
            <span>{project[language].tags.slice(0, 3).join(" · ")}</span>
          </div>
          <h1 className="project-title">{project[language].title}</h1>
        </div>
      </section>

      {/* BODY CONTENT */}
      <section className="project-body">
        <div className="container">
          <Link href={back} className="project-back">
            ← {language === "pt" ? "Voltar ao Arquivo" : "Back to Archive"}
          </Link>

          <div className="project-body-grid">
            <article className="project-copy">
              <Reveal>
                <p className="project-lead">{project[language].description}</p>
              </Reveal>

              {project[language].content.map((paragraph, i) => (
                <Reveal key={i} delay={i * 40}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}

              {/* INTERACTIVE IMAGE STACK CAROUSEL & LIGHTBOX */}
              {project.images && project.images.length > 0 && (
                <Reveal delay={100}>
                  <ImageStackCarousel
                    images={project.images}
                    title={project[language].title}
                  />
                </Reveal>
              )}
            </article>

            <aside className="project-aside">
              <Reveal>
                <h3>{language === "pt" ? "Tags & Tecnologias" : "Tags & Stack"}</h3>
                <div className="tagline" style={{ marginBottom: "40px" }}>
                  {project[language].tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <>
                    <h3>{language === "pt" ? "Links & Acesso" : "Links & Resources"}</h3>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="ext-link"
                        >
                          <span>{link.label}</span>
                          <span>↗</span>
                        </a>
                      ))}
                    </div>
                  </>
                )}

                <div style={{ marginTop: "60px", paddingTop: "24px", borderTop: "1px solid var(--line-soft)" }}>
                  <h3>{language === "pt" ? "Próximo Projeto" : "Next Project"}</h3>
                  <Link
                    href={`/projetos/${nextProject.slug}`}
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
                    {nextProject[language].title} →
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
