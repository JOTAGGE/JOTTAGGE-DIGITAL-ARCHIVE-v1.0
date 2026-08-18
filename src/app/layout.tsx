import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import CustomCursor from "@/app/components/CustomCursor";
import { LanguageProvider } from "@/context/LanguageContext";
import EasterEggProvider from "@/app/components/EasterEggProvider";

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jotagge.vercel.app"),
  title: { default: "JOTAGGE — Digital Archive", template: "%s — JOTAGGE" },
  description: "JOTAGGE é um arquivo vivo de software, design, música, literatura, experimentos e conhecimento.",
  authors: [{ name: "José Gabriel" }],
  creator: "José Gabriel",
  keywords: ["JOTAGGE", "José Gabriel", "portfolio", "software", "design", "creative coding", "digital archive"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "pt_BR", url: "https://jotagge.vercel.app", siteName: "JOTAGGE", title: "JOTAGGE — Digital Archive", description: "Software, design, music, literature, experiments and knowledge.", images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "JOTAGGE" }] },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-S0SHBKPEQQ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S0SHBKPEQQ');
            `,
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <EasterEggProvider>
            <CustomCursor />
            <Navbar />
            {children}
          </EasterEggProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

