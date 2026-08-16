"use client";

import { useState } from "react";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import Reveal from "@/app/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const contactChannels = [
  { name: "EMAIL", label: "jg.barros.dsantos@gmail.com", href: "mailto:jg.barros.dsantos@gmail.com", isCopy: true },
  { name: "WHATSAPP", label: "+55 (81) 98310-0118", href: "https://wa.me/c/558183100118", isCopy: false },
  { name: "GITHUB", label: "github.com/JOTAGGE", href: "https://github.com/JOTAGGE", isCopy: false },
  { name: "LINKEDIN", label: "linkedin.com/in/josé-gabriel", href: "https://linkedin.com/in/josé-gabriel-a02125234", isCopy: false },
  { name: "BEHANCE", label: "behance.net/paracosmita", href: "https://www.behance.net/paracosmita", isCopy: false },
];

export default function ContactPage() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("jg.barros.dsantos@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:jg.barros.dsantos@gmail.com";
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-layout">
        <Reveal>
          <div className="kicker">JOTAGGE / CONTACT & COLLABORATION</div>
          <h1 className="contact-title">
            Let&apos;s make<br />
            <span>something.</span>
          </h1>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={60}>
            <div>
              <p className="lead">
                {language === "pt"
                  ? "Aberto a projetos de software, design de interfaces, desenvolvimento fullstack, colaborações autorais ou simplesmente uma boa conversa sobre criação e tecnologia."
                  : "Open to software engineering, UI/UX systems, fullstack development, creative collaborations, or simply a conversation about building things."}
              </p>

              <div style={{ marginTop: "36px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span className="status-dot" />
                <span style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.14em", color: "var(--fg)" }}>
                  {language === "pt" ? "DISPONÍVEL PARA NOVOS PROJETOS" : "AVAILABLE FOR NEW PROJECTS"}
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            {contactChannels.map((channel, i) => (
              <Reveal key={channel.name} delay={i * 45}>
                {channel.isCopy ? (
                  <button
                    onClick={handleCopyEmail}
                    className="contact-link"
                    style={{ width: "100%", background: "none", borderLeft: 0, borderRight: 0, borderTop: 0, textAlign: "left" }}
                    data-cursor="COPY"
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--fg)" }}>{channel.name}</div>
                      <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>{channel.label}</div>
                    </div>
                    {copied ? (
                      <span className="badge-copied">
                        {language === "pt" ? "COPIADO!" : "COPIED!"}
                      </span>
                    ) : (
                      <span>COPIAR 📋</span>
                    )}
                  </button>
                ) : (
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                    data-cursor="OPEN"
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--fg)" }}>{channel.name}</div>
                      <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "2px" }}>{channel.label}</div>
                    </div>
                    <span>↗</span>
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>

        <ArchiveFooter />
      </div>
    </main>
  );
}
