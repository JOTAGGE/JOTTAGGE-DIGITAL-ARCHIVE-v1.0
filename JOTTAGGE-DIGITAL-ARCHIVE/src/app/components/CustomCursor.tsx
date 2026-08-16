"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) {
      setEnabled(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      setLabel(target?.getAttribute("data-cursor") || "");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor ${label ? "has-label" : ""}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <span>{label || "·"}</span>
    </div>
  );
}
