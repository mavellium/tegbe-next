'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Section1() {
  return (
    <section id="section-1" className="relative w-full h-screen overflow-hidden">
      {/* Vídeo para desktop */}
      <div className="absolute inset-0 z-0">
        <video
          className="hidden lg:block w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        >
          <source src="/bg-section-1-otimizado.webm" type="video/webm" />
        </video>

        {/* Imagem para mobile */}
        <Image
          src="/fallback.jpeg"
          alt="Imagem de fundo"
          width={1920}
          height={1080}
          className="block lg:hidden w-full h-full object-cover"
          aria-hidden="true"
          loading="lazy"
        />

        {/* Overlay escura */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full w-full px-4">
        <div className="flex flex-col items-center justify-center max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-[30em] w-full">
            Estruture o marketing e as vendas da sua empresa <br />
            <span className="">com soluções estratégicas sob medida</span>
          </h1>

          <div className="text-base sm:text-lg md:text-xl space-y-2 mb-8 px-2">
            <p>
              Chega de Investir em Marketing sem ver Resultados. Somos a{' '}
              <span className="font-bold">Agência</span> que
            </p>
            <p>
              foca em <span className="font-bold">Vendas</span>,{' '}
              <span className="font-bold">Estrutura</span> e{' '}
              <span className="font-bold">Escala</span>,{' '}
              <span className="font-bold">Sem Enrolação</span>.
            </p>
          </div>

          <div className="w-full flex justify-center">
            <Link
              href="#section-2"
              className="flex items-center justify-center px-6 py-3 rounded-[10px] font-bold text-white border-none shadow-[0_4px_12px_rgba(230,26,74,0.5)] cursor-pointer transition-all duration-300 whitespace-nowrap bg-gradient-to-r from-[#E61A4A] to-[#CA1A41] hover:from-[#f2d95d] hover:to-[#EEC35A] hover:text-[#20254C] hover:shadow-[0_4px_12px_rgb(242,217,93)]"
            >
              QUERO MAIS INFORMAÇÕES
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
