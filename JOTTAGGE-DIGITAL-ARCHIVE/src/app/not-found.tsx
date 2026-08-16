"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ArchiveFooter from "@/app/components/ArchiveFooter";

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <main className="page-shell archive-page" style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "85vh" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "700px" }}>
        <div className="kicker" style={{ marginBottom: "16px" }}>
          {language === "pt" ? "ERRO 404 / ARQUIVO NÃO LOCALIZADO" : "ERROR 404 / ARTIFACT NOT FOUND"}
        </div>

        <h1 className="display-title" style={{ fontSize: "clamp(54px, 10vw, 110px)", marginBottom: "24px" }}>
          Lost in<br />
          <em>cyberspace.</em>
        </h1>

        <p className="lead" style={{ margin: "0 auto 36px" }}>
          {language === "pt"
            ? "O artefato ou coordenada que você procurou não existe ou foi arquivado em outro setor."
            : "The artifact or coordinate you requested does not exist or has been moved to another quadrant."}
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/" className="btn-solid">
            {language === "pt" ? "VOLTAR AO INÍCIO" : "RETURN HOME"}
          </Link>
          <Link href="/projetos" className="btn-pill">
            {language === "pt" ? "EXPLORAR ARQUIVO" : "EXPLORE ARCHIVE"}
          </Link>
        </div>
      </div>

      <ArchiveFooter />
    </main>
  );
}
