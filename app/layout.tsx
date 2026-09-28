import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Beatriz Rozzetto | Advocacia em São João del-Rei - MG",
  description:
    "Advocacia estratégica, rigor técnico e atendimento humano em São João del-Rei e online para todo o Brasil. Atuação especializada em Direito Civil, Trabalhista, Família e Consumidor.",
  keywords: [
    "Dra. Beatriz Rozzetto",
    "Beatriz Rozzetto advogada",
    "advogada São João del Rei",
    "advocacia São João del Rei",
    "advogado São João del Rei MG",
    "direito civil São João del Rei",
    "direito do trabalho São João del Rei",
    "direito de família",
    "direito do consumidor",
    "rescisão trabalhista",
    "escritório de advocacia São João del Rei",
  ],
  icons: {
    icon: [
      { url: "/icon-br.png?v=2", type: "image/png" },
      { url: "/favicon-br.ico?v=2" },
      { url: "/favicon.ico?v=2" },
    ],
    shortcut: "/icon-br.png?v=2",
    apple: "/apple-icon-br.png?v=2",
  },
  openGraph: {
    title: "Dra. Beatriz Rozzetto | Advocacia em São João del-Rei - MG",
    description:
      "Defesa combativa dos seus direitos com técnica, escuta atenta e resolutividade comprovada.",
    url: "https://beatrizrozzetto.adv.br",
    siteName: "Dra. Beatriz Rozzetto Advocacia",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icon-br.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon-br.png?v=2" />
      </head>
      <body className="min-h-screen bg-[#faf8f5] text-[#1a1b20] font-sans antialiased selection:bg-[#b89040] selection:text-[#121316] overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
