"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Critical root layout error:", error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, background: "#070708", color: "#f4f3ef", fontFamily: "sans-serif", display: "grid", placeItems: "center", minHeight: "100vh" }}>
        <div style={{ textAlign: "center", padding: "32px", maxWidth: "600px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.14em", color: "#d7ff43", marginBottom: "16px" }}>
            CRITICAL SYSTEM ERROR
          </div>
          <h1 style={{ fontSize: "36px", margin: "0 0 16px", letterSpacing: "-0.03em" }}>
            System Fault Detected
          </h1>
          <p style={{ color: "#9a9a95", fontSize: "15px", lineHeight: "1.6", margin: "0 0 32px" }}>
            A critical error occurred at the root application layer.
          </p>
          <button
            onClick={() => reset()}
            style={{
              background: "#d7ff43",
              color: "#070708",
              border: "none",
              padding: "12px 24px",
              fontFamily: "monospace",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            REINICIAR SISTEMA / REBOOT
          </button>
        </div>
      </body>
    </html>
  );
}
