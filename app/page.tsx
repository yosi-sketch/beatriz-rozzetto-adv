"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Scale,
  Shield,
  Gavel,
  CheckCircle2,
  Phone,
  MapPin,
  Star,
  Quote,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Briefcase,
  FileText,
  Clock,
  ExternalLink,
  MessageSquare,
  Lock,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Centralized Client Information for Dra. Beatriz Rozzetto
export const CLIENT_INFO = {
  name: "Dra. Beatriz Rozzetto",
  title: "Advocacia & Consultoria Jurídica",
  oab: "OAB/MG",
  city: "São João del-Rei - MG",
  fullAddress: "Av. Leite de Castro, 125 - Fábricas, São João del Rei - MG, 36301-180",
  shortAddress: "Av. Leite de Castro, 125 • Fábricas • São João del-Rei",
  phoneDisplay: "(32) 99876-5432",
  whatsappNumber: "5532998765432",
  email: "contato@beatrizrozzetto.adv.br",
  instagramHandle: "@beatrizrozzettoadv",
  instagramUrl: "https://www.instagram.com/",
  googleRating: "5,0",
  googleReviewsTotal: "17",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Leite+de+Castro,+125+-+F%C3%A1bricas,+S%C3%A3o+Jo%C3%A3o+del+Rei+-+MG,+36301-180",
};

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.163 8.163 0 0 1-1.26-4.47c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.49-1.41-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}

// 4 Core Foundations
const HIGHLIGHTS = [
  {
    icon: <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-[#b89040]" strokeWidth={1.75} />,
    title: "ESCUTA ATENTA & SIGILO",
    description:
      "Seu relato é acolhido com discrição irrestrita, respeito e empatia. Aqui você conversa diretamente com a advogada titular.",
  },
  {
    icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#b89040]" strokeWidth={1.75} />,
    title: "COMPETÊNCIA & RIGOR",
    description:
      "Técnica processual refinada e estudo profundo da legislação e jurisprudência para construir defesas e ações robustas.",
  },
  {
    icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-[#b89040]" strokeWidth={1.75} />,
    title: "RESOLUÇÃO & PONTUALIDADE",
    description:
      "Acompanhamento constante, cumprimento rigoroso de prazos e comunicação em linguagem clara, sem enrolação.",
  },
  {
    icon: <Gavel className="w-6 h-6 sm:w-7 sm:h-7 text-[#b89040]" strokeWidth={1.75} />,
    title: "PREÇO JUSTO & ÉTICA",
    description:
      "Clareza e transparência total na contratação de honorários, prezando sempre por uma relação de confiança mútua.",
  },
];

// 12 Authentic Google Reviews provided by the client
const REVIEWS = [
  {
    author: "Isabela Muffato",
    time: "2 anos atrás",
    rating: 5,
    text: "Excelente profissional! Tive a oportunidade de ser atendida pela Dra. Beatriz Rozzetto e fiquei extremamente satisfeita com a condução do caso e a dedicação prestada.",
    tag: "Atendimento Excelente",
    category: "competencia",
  },
  {
    author: "Leticia Soares",
    time: "7 meses atrás",
    rating: 5,
    text: "Ótima profissional, muito competente e resolutiva! Solucionou minha questão com agilidade e clareza.",
    tag: "Competente e Resolutiva",
    category: "competencia",
  },
  {
    author: "Kaio Henrique Lattaro Coelho",
    time: "2 anos atrás",
    rating: 5,
    text: "Ótima advogada, competente, pontual e transparente. Fiquei muito satisfeito com o serviço da Dra. Beatriz. Recomendo muito!",
    tag: "Pontual e Transparente",
    category: "pontualidade",
  },
  {
    author: "Patrícia Silva",
    time: "2 anos atrás",
    rating: 5,
    text: "Excelente advogada!! Super atenciosa, fiquei muito satisfeita com o serviço prestado! Sempre disposta a tirar dúvidas.",
    tag: "Super Atenciosa",
    category: "atenciosa",
  },
  {
    author: "Maiara Sampaio",
    time: "2 anos atrás",
    rating: 5,
    text: "Excelente profissional! Super competente! Dedicada em cada detalhe do processo.",
    tag: "Super Competente",
    category: "competencia",
  },
  {
    author: "Junior Resende",
    time: "2 anos atrás",
    rating: 5,
    text: "Ótima advogada, faz um trabalho muito sério e de muita competência. Passa total segurança.",
    tag: "Trabalho Sério",
    category: "competencia",
  },
  {
    author: "Bárbara Alves",
    time: "2 anos atrás",
    rating: 5,
    text: "Profissional muito competente e inteligente. Excelente trabalho na condução do processo.",
    tag: "Inteligente e Eficaz",
    category: "competencia",
  },
  {
    author: "Cassia Alves",
    time: "2 anos atrás",
    rating: 5,
    text: "Ótima profissional! Responsável e atenciosa. Atendimento muito humano e esclarecedor.",
    tag: "Responsável e Atenciosa",
    category: "atenciosa",
  },
  {
    author: "Eloir Silva",
    time: "um ano atrás",
    rating: 5,
    text: "Atendimento ótimo, prestativa e muito educada, recomendo!!! Tirou todas as minhas dúvidas com clareza.",
    tag: "Prestativa e Educada",
    category: "atenciosa",
  },
  {
    author: "Rodrigo Rozzetto",
    time: "2 anos atrás",
    rating: 5,
    text: "Excelente profissional com preço justo. Transparência do início ao fim do processo.",
    tag: "Preço Justo",
    category: "preco_justo",
  },
  {
    author: "Matheus Campos dos Santos Brandão",
    time: "2 anos atrás",
    rating: 5,
    text: "Profissional excelente. Recomendo demais! Eficiente e de total confiança.",
    tag: "Recomendo Demais",
    category: "competencia",
  },
  {
    author: "Rafael Aguiar",
    subtitle: "Local Guide • 18 avaliações",
    time: "2 anos atrás",
    rating: 5,
    text: "Excelente advogada! Atuação precisa, ética e altamente recomendada em São João del-Rei.",
    tag: "Local Guide Verificado",
    category: "competencia",
  },
];

const highlightCardVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [reviewFilter, setReviewFilter] = useState<string>("todos");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    area: "Direito Civil / Contratos",
    descricao: "",
  });

  const getWhatsAppUrl = (customText?: string) => {
    const defaultMsg =
      "Olá, Dra. Beatriz Rozzetto! Gostaria de agendar uma consulta e conversar sobre o meu caso.";
    return `https://wa.me/${CLIENT_INFO.whatsappNumber}?text=${encodeURIComponent(
      customText || defaultMsg
    )}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const message =
      `*Solicitação de Atendimento - Site Oficial*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Área de Interesse:* ${formData.area}\n` +
      `*Resumo do Caso:* ${formData.descricao || "Não informado"}\n\n` +
      `_Enviado pelo formulário do site da Dra. Beatriz Rozzetto._`;

    const waUrl = getWhatsAppUrl(message);
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        nome: "",
        telefone: "",
        area: "Direito Civil / Contratos",
        descricao: "",
      });
    }, 4500);
  };

  const filteredReviews =
    reviewFilter === "todos"
      ? REVIEWS
      : REVIEWS.filter((r) => r.category === reviewFilter);

  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-[#1a1b20] selection:bg-[#b89040] selection:text-[#121316]">
      {/* 1. Header / Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-[#b89040]/25 bg-[#faf8f5]/95 backdrop-blur-md">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-3 lg:gap-4">
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-3 group shrink-0 py-2">
            <div className="relative flex items-center justify-center h-12 sm:h-14 w-12 sm:w-14 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo-beatriz-rozzetto.png"
                width={112}
                height={112}
                alt="Logo Dra. Beatriz Rozzetto - Monograma BR com traço dourado"
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg sm:text-xl font-bold text-[#121316] tracking-tight whitespace-nowrap">
                Dra. Beatriz Rozzetto
              </span>
              <span className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#b89040] whitespace-nowrap">
                Advocacia & Consultoria
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-2.5 2xl:gap-4 shrink">
            <a
              href="#inicio"
              className="text-[11px] 2xl:text-xs font-semibold uppercase tracking-[0.14em] text-[#b89040] relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#b89040] whitespace-nowrap"
            >
              Início
            </a>
            <a
              href="#atendimento"
              className="text-[11px] 2xl:text-xs font-medium uppercase tracking-[0.14em] text-[#555660] hover:text-[#121316] transition-colors whitespace-nowrap"
            >
              Atendimento Cível
            </a>
            <a
              href="#advogada"
              className="text-[11px] 2xl:text-xs font-medium uppercase tracking-[0.14em] text-[#555660] hover:text-[#121316] transition-colors whitespace-nowrap"
            >
              A Advogada
            </a>
            <a
              href="#trabalhista"
              className="text-[11px] 2xl:text-xs font-medium uppercase tracking-[0.14em] text-[#555660] hover:text-[#121316] transition-colors whitespace-nowrap"
            >
              Trabalhista
            </a>
            <a
              href="#avaliacoes"
              className="text-[11px] 2xl:text-xs font-medium uppercase tracking-[0.14em] text-[#555660] hover:text-[#121316] transition-colors whitespace-nowrap flex items-center gap-1"
            >
              <span>Avaliações (5,0 ★)</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b89040]" />
            </a>
            <button
              onClick={() => setActiveModal("areas")}
              className="text-[11px] 2xl:text-xs font-medium uppercase tracking-[0.14em] text-[#555660] hover:text-[#121316] transition-colors cursor-pointer whitespace-nowrap"
            >
              Áreas de Atuação
            </button>
            <a
              href="#contato"
              className="text-[11px] 2xl:text-xs font-medium uppercase tracking-[0.14em] text-[#555660] hover:text-[#121316] transition-colors whitespace-nowrap"
            >
              Contato
            </a>
          </nav>

          {/* Desktop Right Quick Actions */}
          <div className="hidden xl:flex items-center gap-2.5 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#ffffff] hover:bg-[#f3eee2] border border-[#b89040]/35 text-[#121316] text-[11px] 2xl:text-xs font-semibold tracking-wide uppercase transition-all shadow-xs"
              title="Falar no WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>WhatsApp</span>
            </a>
            <GlowingButton href="#contato" size="sm" className="px-3.5 py-2 text-[11px] whitespace-nowrap">
              Agendar Consulta
            </GlowingButton>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 text-[#303138] hover:text-[#121316] rounded-lg border border-[#b89040]/30 bg-[#ffffff] shadow-sm"
            aria-label="Abrir Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#faf8f5] border-b border-[#b89040]/30 px-6 py-6 space-y-4 shadow-xl">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#b89040]"
            >
              INÍCIO
            </a>
            <a
              href="#atendimento"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-medium tracking-[0.18em] uppercase text-[#474852] hover:text-[#121316]"
            >
              ATENDIMENTO CÍVEL
            </a>
            <a
              href="#advogada"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-medium tracking-[0.18em] uppercase text-[#474852] hover:text-[#121316]"
            >
              A ADVOGADA
            </a>
            <a
              href="#trabalhista"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-medium tracking-[0.18em] uppercase text-[#474852] hover:text-[#121316]"
            >
              DIREITO DO TRABALHO
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-medium tracking-[0.18em] uppercase text-[#474852] hover:text-[#121316]"
            >
              AVALIAÇÕES (5,0 ★ GOOGLE)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveModal("areas");
              }}
              className="block w-full text-left text-xs font-medium tracking-[0.18em] uppercase text-[#474852] hover:text-[#121316]"
            >
              ÁREAS DE ATUAÇÃO
            </button>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs font-medium tracking-[0.18em] uppercase text-[#474852] hover:text-[#121316]"
            >
              SEDE & CONTATO
            </a>
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-[#ffffff] border border-[#b89040]/40 text-[#121316] text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                <span>Conversar no WhatsApp</span>
              </a>
              <GlowingButton
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                Agendar Consulta
              </GlowingButton>
            </div>
          </div>
        )}
      </header>

      {/* 2. FIRST FOLD: Hero Section with Dra. Beatriz holding Themis (Statue of Justice) */}
      <section
        id="inicio"
        className="relative z-20 min-h-[calc(100vh-5rem)] flex items-center py-12 lg:py-16 bg-radial-luxury overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline, Narrative & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#b89040]/40 shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-[#b89040] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#9e782f] uppercase">
                  OAB/MG • SÃO JOÃO DEL-REI & REGIONAL
                </span>
              </div>

              {/* H1 Main Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-semibold text-[#121316] leading-[1.14] tracking-tight">
                Defesa combativa dos seus direitos com{" "}
                <span className="text-[#b89040] italic font-normal">
                  técnica, transparência
                </span>{" "}
                e resolutividade.
              </h1>

              {/* Subtitle / Value Proposition */}
              <p className="text-[#454752] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
                Atendimento jurídico humanizado e artesanal pela <strong>Dra. Beatriz Rozzetto</strong>.
                Especialista na proteção de pessoas e patrimônios em Direito Civil, Trabalhista e de Família, combinando rigor técnico com atendimento sem burocracia ou juridiquês.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <GlowingButton href="#contato" size="lg" className="w-full sm:w-auto">
                  Agendar Consulta Estratégica
                </GlowingButton>
                <a
                  href={getWhatsAppUrl("Olá, Dra. Beatriz! Gostaria de uma orientação jurídica para o meu caso.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-[#ffffff] hover:bg-[#f4efe4] text-[#121316] hover:text-[#000000] border border-[#b89040]/40 hover:border-[#b89040]/80 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all shadow-sm group cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-3 border-t border-[#b89040]/20 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5a5c68]">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-[#b89040] fill-[#b89040]" />
                  <span className="font-semibold text-[#121316]">5,0 de 5,0</span>
                  <span>(17 avaliações no Google)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#b89040]" />
                  <span>Av. Leite de Castro, 125 • Fábricas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#b89040]" />
                  <span>Atendimento Presencial e Online</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Architectural Roman Arch Portal with Double Gold Hairline & Floating Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end pt-4 lg:pt-0"
            >
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] xl:max-w-[450px]">
                {/* 1. Ambient Warm Halo radiating behind the arch */}
                <div className="absolute -inset-6 rounded-t-[260px] rounded-b-[60px] bg-gradient-to-tr from-[#b89040]/30 via-[#d8b979]/20 to-transparent blur-2xl pointer-events-none" />

                {/* 2. Classical Architectural Gold Corner Brackets */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#b89040]/70 rounded-tl-md pointer-events-none z-20" />
                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#b89040]/70 rounded-tr-md pointer-events-none z-20" />

                {/* 3. Outer Architectural Portal Frame (Concentric Gold Hairline Offset) */}
                <div className="relative p-2.5 sm:p-3.5 rounded-t-[210px] sm:rounded-t-[250px] rounded-b-[32px] sm:rounded-b-[40px] border border-[#b89040]/45 bg-gradient-to-b from-[#faf8f5]/60 via-[#ffffff]/40 to-[#faf8f5]/80 backdrop-blur-xs shadow-[0_20px_50px_rgba(184,144,64,0.18)]">
                  {/* Inner Arch with deep obsidian backing */}
                  <div className="relative rounded-t-[195px] sm:rounded-t-[235px] rounded-b-[26px] sm:rounded-b-[32px] overflow-hidden border-[1.5px] border-[#b89040]/70 bg-[#0f1013] shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] group">
                    {/* The Image inside the Roman Arch Portal */}
                    <div className="relative h-[480px] sm:h-[540px] w-full">
                      <Image
                        src="/dra-beatriz-themis.webp"
                        alt="Dra. Beatriz Rozzetto, advogada em São João del-Rei, segurando a estátua de Têmis / Deusa da Justiça"
                        fill
                        priority
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 450px"
                        quality={90}
                      />
                      {/* Subtle bottom gradient to ground the portrait */}
                      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0f1013] via-[#0f1013]/60 to-transparent pointer-events-none" />
                    </div>

                    {/* Integrated Monogram & Title Ribbon along the lower curve */}
                    <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#141519]/90 backdrop-blur-md border border-[#b89040]/40 flex items-center justify-between shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#1f2027] border border-[#b89040]/50 flex items-center justify-center shrink-0">
                          <Scale className="w-5 h-5 text-[#b89040]" strokeWidth={1.75} />
                        </div>
                        <div>
                          <h3 className="font-serif text-base sm:text-lg font-bold text-[#faf6ed] leading-tight">
                            Dra. Beatriz Rozzetto
                          </h3>
                          <p className="text-[10px] sm:text-[11px] font-semibold text-[#b89040] uppercase tracking-wider">
                            Advogada Titular • OAB/MG
                          </p>
                        </div>
                      </div>
                      <div className="hidden xs:flex flex-col items-end">
                        <div className="flex gap-0.5 text-[#b89040]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#b89040]" />
                          ))}
                        </div>
                        <span className="text-[10px] text-[#c7bba8] mt-0.5 font-medium">5,0 no Google</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Floating Circular Seal of Excellence (Chancela Flutuante) on the bottom-left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="absolute -bottom-4 -left-3 sm:-left-5 z-30 p-2.5 sm:p-3 rounded-2xl bg-[#ffffff] border border-[#b89040]/60 shadow-[0_12px_28px_rgba(18,19,22,0.18)] flex items-center gap-3 max-w-[210px] sm:max-w-[230px]"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#b89040] via-[#c5a559] to-[#7e5e22] flex items-center justify-center text-[#121316] shrink-0 shadow-sm font-bold text-xs">
                    ★
                  </div>
                  <div className="leading-tight">
                    <span className="text-[11px] font-bold text-[#121316] block uppercase tracking-wider">
                      Nota Máxima 5.0
                    </span>
                    <span className="text-[10px] text-[#705e3b] font-medium block">
                      17 avaliações verificadas
                    </span>
                  </div>
                </motion.div>

                {/* 5. Floating Badge Top-Right: Sede São João del-Rei */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                  className="absolute -top-3 -right-2 sm:-right-4 z-30 px-3 py-1.5 rounded-full bg-[#121316] border border-[#b89040]/60 shadow-lg flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#b89040] animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#faf6ed] tracking-wider uppercase">
                    São João del-Rei
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. 4 Highlights Pillars Section */}
      <section className="relative z-20 w-full border-t border-b border-[#b89040]/25 bg-[#ffffff] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item, idx) => (
              <motion.div
                key={item.title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={highlightCardVariants}
                className="group relative flex flex-col p-6 rounded-xl bg-[#faf8f5] hover:bg-[#f5f1e8] border border-[#b89040]/20 hover:border-[#b89040]/50 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#ffffff] border border-[#b89040]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                  {item.icon}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#121316] tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#50525d] font-normal mt-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 h-0.5 w-8 bg-[#b89040]/50 group-hover:w-16 group-hover:bg-[#b89040] transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECOND FOLD: Atendimento Cível & Rigor Técnico (SINGLE IMAGE: dra-beatriz-direito-civil.jpg) */}
      <section
        id="atendimento"
        className="relative z-20 w-full py-20 sm:py-28 bg-[#121316] text-[#faf6ed] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Copy & Specialties */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1a1b21] border border-[#b89040]/40 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#b89040]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#d8b979] uppercase">
                  DIREITO CIVIL & PATRIMONIAL
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#faf6ed] leading-[1.16]">
                Rigor técnico e estudo aprofundado para causas de{" "}
                <span className="text-[#b89040] italic font-normal">alta relevância.</span>
              </h2>

              <p className="text-[#c7bba8] text-base sm:text-lg font-light leading-relaxed">
                No Direito Civil, não existem soluções genéricas. Seja na elaboração de um contrato seguro, na cobrança judicial de dívidas, na reparação de danos ou na partilha de patrimônio familiar, a <strong>Dra. Beatriz Rozzetto</strong> estuda detalhadamente cada prova e jurisprudência para blindar seus interesses.
              </p>

              {/* Pillars / Specialties Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-[#181920] border border-white/10 hover:border-[#b89040]/40 transition-colors">
                  <h4 className="text-sm font-bold text-[#faf6ed] uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b89040] shrink-0" />
                    <span>Contratos & Negócios</span>
                  </h4>
                  <p className="text-xs text-[#a99e8d] mt-1.5 leading-relaxed">
                    Elaboração, análise preventiva e rescisão de instrumentos contratuais seguros.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181920] border border-white/10 hover:border-[#b89040]/40 transition-colors">
                  <h4 className="text-sm font-bold text-[#faf6ed] uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b89040] shrink-0" />
                    <span>Indenizações & Danos</span>
                  </h4>
                  <p className="text-xs text-[#a99e8d] mt-1.5 leading-relaxed">
                    Ações de reparação civil por danos morais, materiais e cobranças indevidas.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181920] border border-white/10 hover:border-[#b89040]/40 transition-colors">
                  <h4 className="text-sm font-bold text-[#faf6ed] uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b89040] shrink-0" />
                    <span>Família & Sucessões</span>
                  </h4>
                  <p className="text-xs text-[#a99e8d] mt-1.5 leading-relaxed">
                    Divórcios, guarda, pensão alimentícia, inventários e partilha de bens com acolhimento.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#181920] border border-white/10 hover:border-[#b89040]/40 transition-colors">
                  <h4 className="text-sm font-bold text-[#faf6ed] uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#b89040] shrink-0" />
                    <span>Cobranças & Patrimônio</span>
                  </h4>
                  <p className="text-xs text-[#a99e8d] mt-1.5 leading-relaxed">
                    Recuperação de créditos, execuções de títulos e proteção de bens legítimos.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <GlowingButton href="#contato" size="md">
                  Consultar Questão Cível
                </GlowingButton>
                <button
                  onClick={() => setActiveModal("areas")}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#181920] hover:bg-[#23242c] text-[#faf6ed] font-medium text-xs tracking-[0.16em] uppercase transition-all border border-[#b89040]/30 hover:border-[#b89040]/70 cursor-pointer"
                >
                  Conhecer Todas as Áreas
                </button>
              </div>
            </motion.div>

            {/* Right Column: SINGLE IMAGE IN FOLD 2 (Dra. Beatriz with Direito Civil book) */}
            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden border border-[#b89040]/40 bg-[#1a1b21] shadow-2xl">
                <div className="relative h-[480px] sm:h-[540px] w-full">
                  <Image
                    src="/dra-beatriz-direito-civil.jpg"
                    alt="Dra. Beatriz Rozzetto estudando com livro de Direito Civil"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-85" />
                </div>
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-[#121316]/90 backdrop-blur-sm border border-[#b89040]/30">
                  <p className="text-xs text-[#d8b979] font-medium uppercase tracking-wider">
                    Fundamentação Doutrinária & Rigor
                  </p>
                  <p className="text-sm text-[#faf6ed] font-serif font-bold mt-1">
                    Análise artesanal para a máxima segurança do seu patrimônio.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. THIRD FOLD: A Advogada Titular (SINGLE IMAGE: dra-beatriz-livro-sorrindo.jpg) */}
      <section
        id="advogada"
        className="relative z-20 w-full py-20 sm:py-28 bg-[#faf8f5] border-b border-[#b89040]/25 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: SINGLE IMAGE IN FOLD 3 (Dra. Beatriz smiling looking back with open book) */}
            <motion.div
              initial={{ opacity: 0, x: -35, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="lg:col-span-5 relative flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden border border-[#b89040]/35 bg-[#ffffff] shadow-2xl">
                <div className="relative h-[480px] sm:h-[540px] w-full">
                  <Image
                    src="/dra-beatriz-livro-sorrindo.jpg"
                    alt="Dra. Beatriz Rozzetto sorridente com livro, demonstrando acolhimento e postura dedicada"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/75 via-transparent to-transparent opacity-70 pointer-events-none" />
                </div>
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-[#ffffff]/95 backdrop-blur-md border border-[#b89040]/30 shadow-md">
                  <span className="text-[10px] font-semibold text-[#b89040] uppercase tracking-widest block">
                    Advocacia com Propósito
                  </span>
                  <p className="text-sm font-serif font-bold text-[#121316] mt-0.5">
                    &ldquo;Cada processo é a história e a vida de uma pessoa que merece nosso respeito integral.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Bio, Trajectory & Distinctives */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#b89040]/40 shadow-sm w-fit">
                <Sparkles className="w-3.5 h-3.5 text-[#b89040]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#9e782f] uppercase">
                  SOBRE A PROFISSIONAL
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#121316] leading-[1.15]">
                Dra. Beatriz Rozzetto
              </h2>

              <p className="text-[#3e404b] text-base sm:text-lg leading-relaxed font-normal">
                Com escritório sediado em <strong>São João del-Rei</strong>, a Dra. Beatriz Rozzetto constrói uma advocacia baseada em princípios inegociáveis: acolhimento humano, escuta sensível e combatividade técnica intransigente.
              </p>

              <p className="text-[#555764] text-sm sm:text-base leading-relaxed font-light">
                Diferente de escritórios impessoais onde o cliente fala apenas com atendentes ou estagiários, a Dra. Beatriz faz questão de conduzir pessoalmente as etapas estratégicas de cada processo. Você conta com explicações diretas sobre as probabilidades reais do seu caso, prazos transparentes e atualização constante de cada andamento.
              </p>

              {/* Differentials Bullet Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#b89040]/25 shadow-xs">
                  <h4 className="text-xs font-bold text-[#121316] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b89040]" />
                    Atendimento sem Intermediários
                  </h4>
                  <p className="text-xs text-[#5e606c] mt-1">
                    Comunicação direta com a advogada em todos os momentos decisivos.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#b89040]/25 shadow-xs">
                  <h4 className="text-xs font-bold text-[#121316] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b89040]" />
                    Honestidade & Clareza
                  </h4>
                  <p className="text-xs text-[#5e606c] mt-1">
                    Sem falsas promessas: diagnósticos realistas e estratégias embasadas.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#b89040]/25 shadow-xs">
                  <h4 className="text-xs font-bold text-[#121316] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b89040]" />
                    Localização Acessível
                  </h4>
                  <p className="text-xs text-[#5e606c] mt-1">
                    Sede na Av. Leite de Castro, bairro Fábricas, com fácil estacionamento.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#ffffff] border border-[#b89040]/25 shadow-xs">
                  <h4 className="text-xs font-bold text-[#121316] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#b89040]" />
                    Consultoria Online & Presencial
                  </h4>
                  <p className="text-xs text-[#5e606c] mt-1">
                    Atendimento na comarca de São João del-Rei e em todo o Brasil digitalmente.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <GlowingButton href="#contato" size="md">
                  Falar com a Dra. Beatriz
                </GlowingButton>
                <a
                  href={CLIENT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#ffffff] hover:bg-[#f4efe4] text-[#121316] font-semibold text-xs tracking-wider uppercase border border-[#b89040]/30 hover:border-[#b89040]/60 transition-all shadow-sm"
                >
                  <MapPin className="w-4 h-4 text-[#b89040]" />
                  <span>Ver Localização no Mapa</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FOURTH FOLD: Direito do Trabalho & Orientação Prática (SINGLE IMAGE: dra-beatriz-post-trabalhista.jpg) */}
      <section
        id="trabalhista"
        className="relative z-20 w-full py-20 sm:py-28 bg-[#f4f0e6] border-b border-[#b89040]/25 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Labor Defense Copy & Practical Rights */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#b89040]/40 shadow-sm w-fit">
                <Briefcase className="w-3.5 h-3.5 text-[#b89040]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#9e782f] uppercase">
                  DIREITO DO TRABALHO & ORIENTAÇÃO PRÁTICA
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#121316] leading-[1.15]">
                Combate a abusos trabalhistas e{" "}
                <span className="text-[#b89040] italic font-normal">garantia de direitos.</span>
              </h2>

              <p className="text-[#3e404b] text-base sm:text-lg leading-relaxed font-normal">
                Muitos trabalhadores sofrem prejuízos sem saber que a conduta do empregador é expressamente proibida pela CLT. Práticas como <strong>descontos salariais automáticos</strong> por supostos danos, retenção de comissões, horas extras não quitadas ou assédio moral geram o direito a reparações financeiras significativas.
              </p>

              {/* Practical Checklist */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#ffffff] border border-[#b89040]/25 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#faf6ed] text-[#b89040] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#121316] uppercase">
                      Descontos Indevidos em Salário
                    </h4>
                    <p className="text-xs text-[#5e606c] mt-0.5 leading-relaxed">
                      Danos ou quebras causadas sem dolo ou previsão expressa não podem ser descontados automaticamente da folha.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#ffffff] border border-[#b89040]/25 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#faf6ed] text-[#b89040] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#121316] uppercase">
                      Rescisão Indireta do Contrato de Trabalho
                    </h4>
                    <p className="text-xs text-[#5e606c] mt-0.5 leading-relaxed">
                      Direito de sair do emprego recebendo todas as verbas como se demitido fosse, nos casos de falta grave patronal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#ffffff] border border-[#b89040]/25 shadow-xs">
                  <div className="p-2 rounded-lg bg-[#faf6ed] text-[#b89040] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#121316] uppercase">
                      Verbas Rescisórias, Horas Extras e FGTS
                    </h4>
                    <p className="text-xs text-[#5e606c] mt-0.5 leading-relaxed">
                      Cálculo minucioso das verbas corretas devidas na saída, com cobrança judicial de valores sonegados.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Beatriz! Gostaria de uma análise sobre uma questão trabalhista.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#b89040] hover:bg-[#a47e33] text-[#121316] font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_4px_14px_rgba(184,144,64,0.25)]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#121316]" />
                  <span>Analisar Meu Caso Trabalhista</span>
                </a>
                <GlowingButton href="#contato" variant="secondary" size="md">
                  Tirar Dúvida Online
                </GlowingButton>
              </div>
            </motion.div>

            {/* Right Column: SINGLE IMAGE IN FOLD 4 (Post Trabalhista) */}
            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[400px] rounded-2xl overflow-hidden border border-[#b89040]/40 bg-[#ffffff] shadow-2xl p-3">
                <div className="relative h-[480px] sm:h-[540px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/dra-beatriz-post-trabalhista.jpg"
                    alt="Publicação informativa da Dra. Beatriz Rozzetto: Descontos no salário por danos causados pelo empregado não podem ser feitos de forma automática"
                    fill
                    className="object-contain bg-[#f9f8f6]"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    quality={90}
                  />
                </div>
                <div className="mt-3 px-3 py-2 flex items-center justify-between text-xs text-[#5a5c68]">
                  <span className="font-semibold text-[#121316]">Informação Jurídica & Direitos</span>
                  <span className="text-[#b89040] font-medium">Dra. Beatriz Rozzetto</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FIFTH FOLD: Avaliações Reais no Google Maps (100% NO PHOTOS - Strict Compliance) */}
      <section
        id="avaliacoes"
        className="relative z-20 w-full py-20 sm:py-28 bg-[#121316] text-[#faf6ed] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Trust Metric */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1b21] border border-[#b89040]/40 mb-4 shadow-sm">
              <Star className="w-3.5 h-3.5 text-[#b89040] fill-[#b89040]" />
              <span className="text-xs font-semibold tracking-[0.22em] text-[#d8b979] uppercase">
                AVALIAÇÕES & PROVA SOCIAL
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#faf6ed] leading-[1.15] mb-4">
              O que dizem os clientes atendidos
            </h2>

            <p className="text-[#c7bba8] text-base sm:text-lg font-light leading-relaxed mb-6">
              Relatos reais e públicos de pessoas atendidas pela <strong>Dra. Beatriz Rozzetto</strong> em São João del-Rei e comarca.
            </p>

            {/* Google Reviews Trust Badge Card */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-7 py-4 rounded-2xl bg-[#1a1b21] border border-[#b89040]/30 shadow-xl">
              <div className="flex items-center gap-2.5">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-[#a99e8d] uppercase tracking-wider font-semibold">Avaliações no Google</span>
                  <span className="text-sm font-bold text-[#faf6ed]">Dra. Beatriz Rozzetto</span>
                </div>
              </div>

              <div className="h-8 w-px bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#faf6ed]">5,0</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#b89040] fill-[#b89040]" />
                  ))}
                </div>
                <span className="text-xs text-[#d8b979] font-medium ml-1">
                  (17 avaliações reais)
                </span>
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {[
                { id: "todos", label: "Todas (12 em destaque)" },
                { id: "competencia", label: "Competência & Resolução" },
                { id: "atenciosa", label: "Atenciosa & Prestativa" },
                { id: "pontualidade", label: "Pontualidade & Transparência" },
                { id: "preco_justo", label: "Preço Justo" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setReviewFilter(filter.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all cursor-pointer ${
                    reviewFilter === filter.id
                      ? "bg-[#b89040] text-[#121316] font-semibold shadow-sm"
                      : "bg-[#181920] text-[#c7bba8] hover:text-[#faf6ed] border border-white/10"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((review, idx) => (
              <motion.div
                key={review.author}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (idx % 6) * 0.08, ease: "easeOut" }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#181920] hover:bg-[#202129] border border-[#b89040]/20 hover:border-[#b89040]/50 shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-[#b89040]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#b89040]" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-[#6c5934] group-hover:text-[#b89040] transition-colors" />
                  </div>

                  <p className="text-[#dcd3c4] text-xs sm:text-[13px] font-light leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#b89040] to-[#7e5e22] text-[#121316] font-bold text-xs flex items-center justify-center shadow-xs">
                      {review.author
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#faf6ed] group-hover:text-[#d8b979] transition-colors">
                        {review.author}
                      </h4>
                      {review.subtitle ? (
                        <span className="text-[10px] text-[#b89040] font-medium block">
                          {review.subtitle}
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#938c7f] block">{review.time}</span>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] font-medium text-[#d8b979] bg-[#272832] border border-[#b89040]/30 px-2.5 py-1 rounded-md">
                    {review.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Proof Callout */}
          <div className="mt-12 text-center">
            <a
              href={getWhatsAppUrl("Olá, Dra. Beatriz! Vi os depoimentos dos seus clientes e gostaria de conversar sobre o meu caso.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#d8b979] hover:text-[#faf6ed] font-medium transition-colors cursor-pointer"
            >
              <span>Deseja atendimento com o mesmo padrão de excelência? Fale com a Dra. Beatriz.</span>
              <ArrowRight className="w-4 h-4 text-[#b89040]" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. SIXTH FOLD: Sede, Agendamento & Contato Direto */}
      <section
        id="contato"
        className="relative z-20 w-full py-20 sm:py-28 bg-[#faf8f5] border-b border-[#b89040]/25 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Office Information, Location Card & Map */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#b89040]/40 shadow-sm w-fit">
                <MapPin className="w-3.5 h-3.5 text-[#b89040]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#9e782f] uppercase">
                  SEDE & ATENDIMENTO
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#121316] leading-[1.15]">
                Entre em contato e agende sua consulta.
              </h2>

              <p className="text-[#454752] text-base leading-relaxed font-normal">
                Atendemos presencialmente em nosso escritório em São João del-Rei, com infraestrutura reservada para garantir seu total conforto e sigilo. Para clientes de outras cidades ou com rotina dinâmica, realizamos consultas estratégicas por videoconferência com a mesma profundidade.
              </p>

              {/* Contact Channels */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#ffffff] border border-[#b89040]/25 shadow-xs flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#faf6ed] text-[#b89040] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#121316] uppercase tracking-wider">Endereço Oficial</h4>
                    <p className="text-xs sm:text-sm text-[#3b3c45] mt-1 font-medium">
                      Av. Leite de Castro, 125 - Fábricas
                    </p>
                    <p className="text-xs text-[#6e707e]">São João del Rei - MG, CEP 36301-180</p>
                    <a
                      href={CLIENT_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#b89040] hover:text-[#9e782f] font-semibold mt-2"
                    >
                      <span>Abrir no Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#ffffff] border border-[#b89040]/25 shadow-xs flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#faf6ed] text-[#b89040] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#121316] uppercase tracking-wider">WhatsApp & Telefone</h4>
                    <p className="text-xs sm:text-sm text-[#3b3c45] mt-1 font-medium">
                      Atendimento direto e agendamento prévio
                    </p>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-semibold mt-2"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Iniciar conversa no WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#ffffff] border border-[#b89040]/25 shadow-xs flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#faf6ed] text-[#b89040] shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#121316] uppercase tracking-wider">Sigilo & Privacidade</h4>
                    <p className="text-xs text-[#5e606c] mt-1 leading-relaxed">
                      Todas as informações e documentos enviados são estritamente confidenciais e protegidos pelo Estatuto da Advocacia e OAB.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Direct Consultation Request Form */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 relative w-full"
            >
              <div className="relative rounded-2xl bg-[#ffffff] border border-[#b89040]/35 p-6 sm:p-8 lg:p-10 shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#faf6ed] border border-[#b89040]/30 text-[10px] font-semibold tracking-[0.2em] text-[#9e782f] uppercase">
                      DIAGNÓSTICO INICIAL
                    </span>
                    <span className="text-[11px] text-[#6e707e] font-medium">Resposta Ágil</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#121316]">
                    Solicitar Análise do Caso
                  </h3>
                  <p className="text-[#555764] text-xs sm:text-sm mt-1.5 leading-relaxed font-light">
                    Preencha os dados abaixo. Sua mensagem será direcionada diretamente para o WhatsApp do escritório.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-3 bg-[#faf6ed] border border-[#b89040]/40 rounded-xl p-6 animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-[#b89040]/20 border border-[#b89040]/50 flex items-center justify-center mx-auto text-[#b89040]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[#121316]">Solicitação Enviada!</h4>
                    <p className="text-xs text-[#555764] leading-relaxed max-w-xs mx-auto">
                      Redirecionando para o WhatsApp da Dra. Beatriz Rozzetto...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="form-nome" className="block text-xs font-semibold uppercase tracking-wider text-[#353640] mb-1.5">
                        Nome Completo
                      </label>
                      <input
                        id="form-nome"
                        type="text"
                        required
                        placeholder="Ex: João da Silva"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#faf8f5] border border-[#b89040]/25 text-[#121316] placeholder-[#8a8c98] text-sm focus:outline-none focus:border-[#b89040] focus:ring-1 focus:ring-[#b89040] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-tel" className="block text-xs font-semibold uppercase tracking-wider text-[#353640] mb-1.5">
                        WhatsApp ou Telefone com DDD
                      </label>
                      <input
                        id="form-tel"
                        type="tel"
                        required
                        placeholder="(32) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#faf8f5] border border-[#b89040]/25 text-[#121316] placeholder-[#8a8c98] text-sm focus:outline-none focus:border-[#b89040] focus:ring-1 focus:ring-[#b89040] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-area" className="block text-xs font-semibold uppercase tracking-wider text-[#353640] mb-1.5">
                        Área de Interesse
                      </label>
                      <select
                        id="form-area"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[#faf8f5] border border-[#b89040]/25 text-[#121316] text-sm focus:outline-none focus:border-[#b89040] focus:ring-1 focus:ring-[#b89040] transition-all"
                      >
                        <option value="Direito Civil / Contratos">Direito Civil & Contratos</option>
                        <option value="Direito do Trabalho / Rescisão">Direito do Trabalho & Rescisão</option>
                        <option value="Direito de Família / Divórcio / Guarda">Direito de Família (Divórcio, Guarda, Pensão)</option>
                        <option value="Sucessões / Inventário">Inventário & Partilha de Bens</option>
                        <option value="Direito do Consumidor">Direito do Consumidor & Golpes Bancários</option>
                        <option value="Outra Questão Jurídica">Outra Questão Jurídica</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="form-desc" className="block text-xs font-semibold uppercase tracking-wider text-[#353640] mb-1.5">
                        Breve Resumo da Situação
                      </label>
                      <textarea
                        id="form-desc"
                        rows={3}
                        placeholder="Descreva brevemente o que aconteceu ou a sua dúvida..."
                        value={formData.descricao}
                        onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#faf8f5] border border-[#b89040]/25 text-[#121316] placeholder-[#8a8c98] text-sm focus:outline-none focus:border-[#b89040] focus:ring-1 focus:ring-[#b89040] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg bg-[#b89040] hover:bg-[#a47e33] text-[#121316] font-bold text-xs tracking-[0.16em] uppercase transition-all duration-200 border border-[#d8b979]/70 cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(184,144,64,0.25)] hover:shadow-[0_6px_20px_rgba(184,144,64,0.35)]"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#121316]" />
                      <span>ENVIAR SOLICITAÇÃO VIA WHATSAPP</span>
                    </button>

                    <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-[#6e707e]">
                      <Shield className="w-3.5 h-3.5 text-[#b89040]" />
                      <span>Atendimento estritamente sigiloso e resguardado pela OAB</span>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Minimal Editorial Footer */}
      <footer className="relative z-20 w-full border-t border-white/10 bg-[#0d0e11] text-[#faf6ed] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Col 1 & 2: Brand & Positioning */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3.5">
                <Image
                  src="/logo-white.png"
                  width={140}
                  height={140}
                  alt="Dra. Beatriz Rozzetto Advocacia"
                  className="h-16 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold text-[#faf6ed]">
                    Dra. Beatriz Rozzetto
                  </span>
                  <span className="text-[11px] text-[#b89040] tracking-widest uppercase font-medium">
                    Advocacia Estratégica & Consultoria
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#a99e8d] max-w-md leading-relaxed font-light">
                Atuação artesanal em Direito Civil, Trabalhista, Família e Consumidor. Sede no bairro Fábricas em São João del-Rei - MG, com atendimento dedicado a clientes de todo o país.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#181920] border border-white/10 hover:border-[#b89040]/50 flex items-center justify-center text-[#c7bba8] hover:text-emerald-400 transition-colors"
                  aria-label="WhatsApp"
                  title="Falar no WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                </a>
                <a
                  href={CLIENT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#181920] border border-white/10 hover:border-[#b89040]/50 flex items-center justify-center text-[#c7bba8] hover:text-[#d8b979] transition-colors"
                  aria-label="Localização no Google Maps"
                  title="Google Maps"
                >
                  <MapPin className="w-4 h-4 text-[#b89040]" />
                </a>
              </div>
            </div>

            {/* Col 3: Sede em São João del-Rei */}
            <div className="space-y-3 text-xs text-[#a99e8d]">
              <h4 className="font-bold text-[#faf6ed] uppercase tracking-wider text-xs border-b border-[#b89040]/30 pb-1.5 w-fit">
                Sede do Escritório
              </h4>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#b89040] shrink-0 mt-0.5" />
                <span>Av. Leite de Castro, 125 - Fábricas, São João del Rei - MG, 36301-180</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#b89040] shrink-0" />
                <span>Atendimento Presencial e Online</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#b89040] shrink-0" />
                <span>Inscrita na OAB/MG</span>
              </div>
            </div>

            {/* Col 4: Links Rápidos */}
            <div className="space-y-2.5 text-xs text-[#a99e8d]">
              <h4 className="font-bold text-[#faf6ed] uppercase tracking-wider text-xs border-b border-[#b89040]/30 pb-1.5 w-fit">
                Navegação
              </h4>
              <div>
                <a href="#inicio" className="hover:text-[#faf6ed] transition-colors">Início</a>
              </div>
              <div>
                <a href="#atendimento" className="hover:text-[#faf6ed] transition-colors">Atendimento Cível</a>
              </div>
              <div>
                <a href="#advogada" className="hover:text-[#faf6ed] transition-colors">A Advogada</a>
              </div>
              <div>
                <a href="#trabalhista" className="hover:text-[#faf6ed] transition-colors">Direito do Trabalho</a>
              </div>
              <div>
                <a href="#avaliacoes" className="hover:text-[#faf6ed] transition-colors">Avaliações (5,0 ★)</a>
              </div>
              <div>
                <button
                  onClick={() => setActiveModal("areas")}
                  className="hover:text-[#faf6ed] transition-colors cursor-pointer text-left"
                >
                  Áreas de Atuação
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#908879] gap-4">
            <span>
              © {new Date().getFullYear()} Dra. Beatriz Rozzetto — Advogada. Todos os direitos reservados.
            </span>
            <div className="flex items-center gap-4">
              <span>Ética e Sigilo Profissional OAB/MG</span>
              <span>•</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#faf6ed] transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 10. Modais Interativos */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#faf8f5] border border-[#b89040]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 text-[#555660] hover:text-[#121316] rounded-lg border border-[#b89040]/30 hover:border-[#b89040]/60 cursor-pointer"
              aria-label="Fechar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {activeModal === "areas" && (
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#b89040] uppercase">
                  ESPECIALIDADES JURÍDICAS
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#121316]">
                  Áreas de Atuação — Dra. Beatriz Rozzetto
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    {
                      title: "Direito Civil & Contratos",
                      desc: "Elaboração e revisão de contratos, renegociação de dívidas, obrigações e disputas patrimoniais.",
                    },
                    {
                      title: "Direito do Trabalho",
                      desc: "Defesa contra descontos indevidos no salário, rescisão indireta, horas extras e verbas rescisórias.",
                    },
                    {
                      title: "Família & Sucessões",
                      desc: "Divórcio consensual e litigioso, partilha de bens, pensão alimentícia, guarda e inventários.",
                    },
                    {
                      title: "Responsabilidade Civil & Indenizações",
                      desc: "Reparação por danos morais, materiais, prejuízos decorrentes de acidentes e cobranças indevidas.",
                    },
                    {
                      title: "Direito do Consumidor",
                      desc: "Inscrições indevidas em SPC/Serasa, abusos de planos de saúde, bancos e fraudes financeiras.",
                    },
                    {
                      title: "Consultoria Preventiva",
                      desc: "Assessoria estratégica para evitar litígios judiciais caros e garantir conformidade jurídica.",
                    },
                  ].map((area, idx) => (
                    <div key={idx} className="p-3.5 bg-[#ffffff] border border-[#b89040]/25 rounded-xl shadow-xs">
                      <h4 className="text-xs font-bold text-[#121316] uppercase">{area.title}</h4>
                      <p className="text-[11px] text-[#555764] mt-1 leading-relaxed">{area.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#b89040]/20 flex justify-between items-center">
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Beatriz! Gostaria de tirar dúvidas sobre as áreas de atuação.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-[#b89040] hover:bg-[#a47e33] text-[#121316] text-xs font-bold uppercase rounded-lg shadow-sm"
                  >
                    Tirar Dúvidas no WhatsApp
                  </a>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2.5 bg-[#ffffff] border border-[#b89040]/30 text-[#121316] text-xs font-semibold uppercase rounded-lg hover:bg-[#f4efe4] cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
