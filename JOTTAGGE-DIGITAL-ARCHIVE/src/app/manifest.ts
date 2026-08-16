import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JOTAGGE Hub — Portfólio, Conhecimento & Experimentos",
    short_name: "JOTAGGE Hub",
    description:
      "Arquivo vivo de projetos, experimentos no Lab e artigos sobre tecnologia e design por José Gabriel.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
