"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-[10000000] w-full h-20 flex items-center border-b-4 border-black transition-colors ${
        scrolled ? "bg-black" : "bg-[#0b0c11bd]"
      }`}>
      <div className="flex items-center justify-center w-full px-4 md:px-8 lg:px-20 lg:justify-between">
        {/* Logo */}
        <a href="#section-1">
          <Image
            src="/logoTegbe.svg"
            alt="Logo Tegbe"
            width={140}
            height={60}
          />
        </a>

        {/* Navegação desktop */}
        <nav className="hidden lg:flex">
          <Link
            href="#section-2"
            className="ml-4 flex items-center justify-center px-6 py-3 rounded-[10px] font-bold text-white border-none shadow-[0_4px_12px_rgba(230,26,74,0.5)] cursor-pointer transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-[#E61A4A] to-[#CA1A41] hover:from-[#f2d95d] hover:to-[#EEC35A] hover:text-[#20254C] hover:shadow-[0_4px_12px_rgb(242,217,93)]">
            QUERO MAIS INFORMAÇÕES
          </Link>
        </nav>
      </div>

      {/* Menu mobile responsivo */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 px-4 md:hidden z-[999999]">
          <a
            href="#section-text-image"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}>
            Problemas
          </a>
          <a
            href="#section-strategic-digital-transformation"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}>
            Transformação
          </a>
          <a
            href="#section-customers"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}>
            Parceiros
          </a>
          <Link
            href="#section-2"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center px-6 py-3 rounded-[10px] font-bold text-white border-none shadow-[0_4px_12px_rgba(230,26,74,0.5)] bg-gradient-to-r from-[#E61A4A] to-[#CA1A41] hover:from-[#f2d95d] hover:to-[#EEC35A] hover:text-[#20254C] hover:shadow-[0_4px_12px_rgb(242,217,93)]">
            QUERO MAIS INFORMAÇÕES
          </Link>
        </div>
      )}
    </header>
  );
}
