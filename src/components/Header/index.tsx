'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-[10000000] w-full h-20 flex items-center border-b-4 border-black transition-colors ${
        scrolled ? 'bg-black' : 'bg-[#0b0c11bd]'
      }`}
    >
      <div className="ml-[5em]">
        <a href="#section-1">
          <Image src="/logoTegbe.svg" alt="Logo Tegbe" width={180} height={80} />
        </a>
      </div>

      <nav className="flex-1 flex justify-end pr-8">
        <ul className="flex gap-6 items-center text-white font-medium">
          <li><a href="#section-text-image" className="hover:underline">Problemas</a></li>
          <li><a href="#section-strategic-digital-transformation" className="hover:underline">Transformação</a></li>
          <li><a href="#section-customers" className="hover:underline">Parceiros</a></li>
          <li>
            <Link
              href="#section-2"
              className="ml-8 mr-[5em] flex items-center justify-center px-6 py-3 rounded-[10px] font-bold text-white border-none shadow-[0_4px_12px_rgba(230,26,74,0.5)] cursor-pointer transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-[#E61A4A] to-[#CA1A41] hover:from-[#f2d95d] hover:to-[#EEC35A] hover:text-[#20254C] hover:shadow-[0_4px_12px_rgb(242,217,93)]"
            >
              QUERO MAIS INFORMAÇÕES
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}