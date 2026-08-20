"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface ImageStackCarouselProps {
  images: string[];
  title: string;
}

export default function ImageStackCarousel({ images, title }: ImageStackCarouselProps) {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Lock body scroll when gallery modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, prevImage]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 50) {
      nextImage();
    } else if (diffX < -50) {
      prevImage();
    }
  };

  if (!images || images.length === 0) return null;

  // Decide rotation/offset classes for the stack
  const getStackClasses = (index: number) => {
    const total = images.length;

    if (total === 1) {
      return "z-10 origin-center rotate-[-2deg] scale-[0.99] group-hover:rotate-0 group-hover:translate-y-[-6px] group-hover:scale-100";
    }

    if (total === 2) {
      if (index === 0) {
        return "z-20 origin-center rotate-[-3deg] translate-x-[-8px] translate-y-[-4px] group-hover:rotate-0 group-hover:translate-x-[-24px] group-hover:translate-y-[-10px] group-hover:scale-[1.02]";
      }
      return "z-10 origin-center rotate-[3deg] translate-x-[8px] translate-y-[4px] group-hover:rotate-0 group-hover:translate-x-[24px] group-hover:translate-y-[-10px] group-hover:scale-[1.02]";
    }

    // 3 or more images
    if (index === 0) {
      return "z-30 origin-center rotate-[-4deg] translate-x-[-12px] translate-y-[-8px] group-hover:rotate-0 group-hover:translate-x-[-36px] group-hover:translate-y-[-14px] group-hover:scale-[1.03]";
    }
    if (index === 1) {
      return "z-20 origin-center rotate-[2deg] translate-x-[4px] translate-y-[2px] group-hover:rotate-0 group-hover:translate-x-[0px] group-hover:translate-y-[-10px] group-hover:scale-[1.03]";
    }
    return "z-10 origin-center rotate-[-2deg] translate-x-[16px] translate-y-[10px] group-hover:rotate-0 group-hover:translate-x-[36px] group-hover:translate-y-[-14px] group-hover:scale-[1.03]";
  };

  const displayedImages = images.slice(0, 3);

  return (
    <>
      <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid var(--line)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <span className="kicker">
            {language === "pt" ? "GALERIA DE ARTEFATOS" : "ARTIFACT GALLERY"}
          </span>
          <span style={{ fontFamily: "var(--mono)", fontSize: "10px", color: "var(--dim)" }}>
            {images.length} {images.length === 1 ? "IMAGE" : "IMAGES"}
          </span>
        </div>

        {/* Stack Container */}
        <div
          onClick={() => setIsOpen(true)}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "520px",
            height: "320px",
            margin: "0 auto",
            cursor: "pointer",
            userSelect: "none",
          }}
          className="group"
          data-cursor="EXPAND"
        >
          {displayedImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 rounded-lg overflow-hidden border border-white/10 bg-[#0d0d10] transition-all duration-500 ease-out shadow-2xl ${getStackClasses(
                idx
              )}`}
              style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.7)",
              }}
            >
              <Image
                src={imgSrc}
                alt={`${title} - Preview ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />

              {idx === 0 && (
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 pointer-events-none">
                  <span style={{ background: "var(--accent)", color: "#070708", padding: "6px 14px", borderRadius: "3px", fontFamily: "var(--mono)", fontSize: "11px", fontWeight: 600 }}>
                    {language === "pt" ? "EXPANDIR GALERIA ↗" : "EXPAND GALLERY ↗"}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <button
            onClick={() => setIsOpen(true)}
            className="btn-pill"
            style={{ fontSize: "10px" }}
          >
            {language === "pt" ? "ABRIR CARROSSEL COMPLETO (" : "OPEN FULL CAROUSEL ("}
            {images.length}) ↗
          </button>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 300,
            background: "rgba(7, 7, 8, 0.96)",
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            userSelect: "none",
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 32px",
              borderBottom: "1px solid var(--line-soft)",
            }}
          >
            <div>
              <span className="kicker" style={{ display: "block", marginBottom: "4px" }}>
                {title}
              </span>
              <span style={{ fontFamily: "var(--mono)", fontSize: "13px", color: "var(--fg)" }}>
                <strong style={{ color: "var(--accent)" }}>{currentIndex + 1}</strong> / {images.length}
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="btn-pill"
              style={{ padding: "6px 14px" }}
            >
              FECHAR ✕
            </button>
          </div>

          {/* Main Display */}
          <div
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 40px",
            }}
          >
            {images.length > 1 && (
              <button
                onClick={prevImage}
                style={{
                  position: "absolute",
                  left: "24px",
                  zIndex: 20,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid var(--line)",
                  color: "var(--fg)",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  fontSize: "20px",
                  transition: "all 0.2s",
                }}
                aria-label="Anterior"
              >
                ←
              </button>
            )}

            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "1100px",
                height: "65vh",
              }}
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} - Visual ${currentIndex + 1}`}
                fill
                priority
                style={{ objectFit: "contain" }}
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
            </div>

            {images.length > 1 && (
              <button
                onClick={nextImage}
                style={{
                  position: "absolute",
                  right: "24px",
                  zIndex: 20,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid var(--line)",
                  color: "var(--fg)",
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  fontSize: "20px",
                  transition: "all 0.2s",
                }}
                aria-label="Próximo"
              >
                →
              </button>
            )}
          </div>

          {/* Bottom Thumbnails */}
          {images.length > 1 && (
            <div
              style={{
                padding: "16px 32px",
                borderTop: "1px solid var(--line-soft)",
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                overflowX: "auto",
              }}
            >
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    position: "relative",
                    width: "68px",
                    height: "44px",
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: idx === currentIndex ? "2px solid var(--accent)" : "1px solid var(--line-soft)",
                    opacity: idx === currentIndex ? 1 : 0.4,
                    transition: "all 0.2s",
                    flexShrink: 0,
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={img}
                    alt={`Thumb ${idx + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="68px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
