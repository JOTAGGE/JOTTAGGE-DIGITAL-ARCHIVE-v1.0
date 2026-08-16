"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { labExperiments } from "@/data/lab";
import { useLanguage } from "@/context/LanguageContext";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import Reveal from "@/app/components/Reveal";

export default function LabProject() {
  const { language } = useLanguage();
  const params = useParams();
  const categorySlug = String(params.slug);
  const projectSlug = String(params.projectSlug);

  const category = labExperiments.find((x) => x.slug === categorySlug);
  const item = category?.items.find((x) => x.slug === projectSlug);

  if (!category || !item) notFound();

  return (
    <main className="page-shell archive-page">
      <div className="article-layout">
        <Link href={`/lab/${category.slug}`} className="project-back">
          ← {category[language].title}
        </Link>

        <div className="kicker">
          JOTAGGE / LAB / {category.slug.toUpperCase()}
        </div>

        <h1>{item[language].title}</h1>
        <p className="article-description">{item[language].description}</p>

        <div className="article-meta">
          <span>{item[language].note || "EXPERIMENT"}</span>
          <span>{item[language].deathReason || "STATUS: ACTIVE"}</span>
        </div>

        {item.image && (
          <Image
            className="article-cover"
            src={item.image}
            alt={item[language].title}
            width={1600}
            height={800}
            priority
          />
        )}

        <article className="article-content">
          {item[language].content.map((paragraph, i) => (
            <Reveal key={i} delay={i * 30}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </article>

        {item.links && item.links.length > 0 && (
          <div style={{ marginTop: "40px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {item.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="btn-solid"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}

        <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--line)" }}>
          <Link href="/lab" className="hero-cta">
            ← {language === "pt" ? "TODAS AS CATEGORIAS DO LAB" : "ALL LAB TRACKS"}
          </Link>
        </div>
      </div>

      <ArchiveFooter />
    </main>
  );
}
