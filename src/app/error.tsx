"use client";

import { useEffect } from "react";
import Link from "next/link";
import ArchiveFooter from "@/app/components/ArchiveFooter";
import { useLanguage } from "@/context/LanguageContext";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { language } = useLanguage();

  useEffect(() => {
    console.error("Runtime error caught by error boundary:", error);
  }, [error]);

  return (
    <main className="page-shell archive-page" style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "85vh" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "700px" }}>
        <div className="kicker" style={{ marginBottom: "16px" }}>
          {language === "pt" ? "ERRO DE EXECUÇÃO / FALHA DO SISTEMA" : "SYSTEM ERROR / RUNTIME FAULT"}
        </div>

        <h1 className="display-title" style={{ fontSize: "clamp(48px, 8vw, 96px)", marginBottom: "24px" }}>
          Signal<br />
          <em>interrupted.</em>
        </h1>

        <p className="lead" style={{ margin: "0 auto 36px" }}>
          {language === "pt"
            ? "Ocorreu uma instabilidade inesperada ao processar este artefato. Tente restabelecer a conexão."
            : "An unexpected exception occurred while rendering this artifact. Try reconnecting to the system."}
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <button onClick={() => reset()} className="btn-solid" data-cursor="RETRY">
            {language === "pt" ? "TENTAR NOVAMENTE" : "RETRY ACTION"}
          </button>
          <Link href="/" className="btn-pill">
            {language === "pt" ? "VOLTAR AO INÍCIO" : "RETURN HOME"}
          </Link>
        </div>
      </div>

      <ArchiveFooter />
    </main>
  );
}
