"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function CustomCursor() {
  const isFinePointer = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [label, setLabel] = useState("");
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      setLabel(target?.getAttribute("data-cursor") || "");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isFinePointer]);

  if (!isFinePointer) return null;

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
