"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import Reveal from "@/app/components/Reveal";

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <main className="page-shell archive-page">
      <div className="container">
        {/* ARCHIVE HERO */}
        <section className="archive-hero">
          <div className="archive-hero-grid">
            <div>
              <div className="kicker">JOTAGGE / ABOUT & BIOGRAPHY</div>
              <h1 className="display-title">
                A person<br />
                <em>behind it.</em>
              </h1>
            </div>
            <div>
              <p className="lead">
                {language === "pt"
                  ? "Uma trajetória não linear entre tecnologia, criação, curiosidade e a vontade persistente de construir coisas que importam."
                  : "A non-linear journey between technology, creation, curiosity, and the persistent drive to build things that matter."}
              </p>
              <div style={{ marginTop: "32px" }}>
                <Link href="/contact" className="hero-cta">
                  {language === "pt" ? "ENTRAR EM CONTATO" : "GET IN TOUCH"} <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT CONTENT LAYOUT */}
        <section className="about-layout">
          <div className="about-photo">
            <Image
              src="/perfil.jpg"
              alt="José Gabriel"
              fill
              sizes="(max-width: 992px) 100vw, 38vw"
              priority
            />
          </div>

          <article className="about-copy">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 35}>
                <p>{p}</p>
              </Reveal>
            ))}

            <div style={{ marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--line-soft)" }}>
              <Link href="/curriculo" className="btn-solid">
                {language === "pt" ? "VER CURRÍCULO COMPLETO ↗" : "VIEW FULL RESUME ↗"}
              </Link>
            </div>
          </article>
        </section>
      </div>

      <ArchiveFooter />
    </main>
  );
}
