"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { knowledgePosts } from "@/data/knowledge";
import { authors } from "@/data/authors";
import { useLanguage } from "@/context/LanguageContext";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import Reveal from "@/app/components/Reveal";

export default function KnowledgeArticle() {
  const { language } = useLanguage();
  const params = useParams();
  const slug = String(params.slug);

  const post = knowledgePosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const author = authors.find((a) => a.id === post.authorId);

  return (
    <main className="page-shell archive-page">
      <div className="article-layout">
        <Link href="/knowledge" className="project-back">
          ← {language === "pt" ? "Voltar ao Knowledge" : "Back to Knowledge"}
        </Link>

        <div className="kicker">
          {post.date} · {author?.name || "JOTAGGE"}
        </div>

        <h1>{post[language].title}</h1>
        <p className="article-description">{post[language].description}</p>

        <div className="article-meta">
          <span>{post[language].tags.join(" · ")}</span>
          <span>JOTAGGE / NOTE & RESEARCH</span>
        </div>

        {post.image && (
          <Image
            className="article-cover"
            src={post.image}
            alt={post[language].title}
            width={1600}
            height={800}
            priority
          />
        )}

        <article className="article-content">
          {post[language].content.map((paragraph, i) => (
            <Reveal key={i} delay={i * 30}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </article>

        <div
          style={{
            marginTop: "80px",
            paddingTop: "32px",
            borderTop: "1px solid var(--line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/knowledge" className="hero-cta">
            ← {language === "pt" ? "TODOS OS ARTIGOS" : "ALL ESSAYS"}
          </Link>
          <Link href="/contact" className="hero-cta">
            {language === "pt" ? "DISCUTIR ESTE TEMA" : "DISCUSS THIS TOPIC"} <span>↗</span>
          </Link>
        </div>
      </div>

      <ArchiveFooter />
    </main>
  );
}
