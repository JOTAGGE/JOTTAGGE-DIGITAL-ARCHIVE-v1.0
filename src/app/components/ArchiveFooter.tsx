"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ArchiveFooter() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", {
          timeZone: "America/Recife",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="archive-footer">
      <div className="footer-status">
        <span className="status-dot" />
        <span>RECIFE / BRT {time ? `· ${time}` : ""}</span>
      </div>

      <div className="footer-links">
        <a href="https://github.com/JOTAGGE" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href="https://linkedin.com/in/josé-gabriel-a02125234" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href="https://www.behance.net/paracosmita" target="_blank" rel="noreferrer">
          Behance ↗
        </a>
        <Link href="/contact">Contact ↗</Link>
      </div>

      <div>
        <span>JOTAGGE © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
