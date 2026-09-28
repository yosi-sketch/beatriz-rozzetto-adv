"use client";

import React from "react";

interface GlowingButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "noir";
}

export default function GlowingButton({
  children,
  href,
  onClick,
  className = "",
  size = "md",
  variant = "primary",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2.5 text-[11px] tracking-[0.14em]",
    md: "px-6 py-3.5 text-xs tracking-[0.16em]",
    lg: "px-8 py-4 text-xs sm:text-sm tracking-[0.16em]",
  }[size];

  const variantClasses = {
    primary:
      "bg-[#b89040] hover:bg-[#a47e33] text-[#121316] font-semibold border border-[#d8b979]/70 shadow-[0_4px_14px_rgba(184,144,64,0.25)] hover:shadow-[0_6px_20px_rgba(184,144,64,0.35)]",
    secondary:
      "bg-[#ffffff] hover:bg-[#f4efe4] text-[#1a1b20] font-medium border border-[#b89040]/30 hover:border-[#b89040]/60 shadow-sm",
    noir:
      "bg-[#141519] hover:bg-[#202127] text-[#faf6ed] font-medium border border-[#b89040]/45 hover:border-[#b89040]/80 shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
  }[variant];

  const baseStyles =
    `group relative inline-flex items-center justify-center rounded-lg uppercase ` +
    `transition-all duration-200 cursor-pointer select-none text-center ${variantClasses} ${sizeClasses} ${className}`;

  const buttonInner = (
    <span className="flex items-center justify-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {buttonInner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {buttonInner}
    </button>
  );
}
