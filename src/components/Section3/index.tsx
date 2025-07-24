'use client'

import { useState } from 'react'

export default function SectionTextImage() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section
      id="section-text-image"
      className="pt-20 px-4 bg-gradient-to-b from-black to-[#0C0014]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-[1300px] w-full mx-auto">
        {/* Bloco de vídeo */}
        <figure className="w-full max-w-[644px] aspect-video flex items-center justify-center rounded-[10px] overflow-hidden">
          {showVideo ? (
            <iframe
              src="https://www.youtube.com/embed/1MIjs_OA-Uc?autoplay=1&rel=0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div
              onClick={() => setShowVideo(true)}
              className="relative w-full h-full cursor-pointer"
            >
              <img
                src="https://img.youtube.com/vi/1MIjs_OA-Uc/maxresdefault.jpg"
                alt="Assista o vídeo"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-1/2 left-1/2 w-16 h-16 bg-center bg-no-repeat bg-contain pointer-events-none"
                style={{
                  backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/727/727245.png')`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          )}
        </figure>

        {/* Texto */}
        <div className="text-[#F0F0F0] max-w-[600px]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-10 text-center lg:text-left">
            Por que seu Investimento não traz retorno?
          </h2>
          <p className="text-base md:text-lg leading-[1.8] text-justify">
            Estudos mostram que muitas pequenas e médias empresas falham no digital — não por falta de investimento,
            mas por focar em <span className="font-bold">métricas de vaidade</span> (curtidas, alcance)
            e negligenciar uma estratégia de <span className="font-bold">vendas real.</span>
            <br /><br />
            <span className="font-bold">Talvez sua empresa esteja nesse grupo.</span>
            <br /><br />
            Na <span className="font-bold">TegBe</span>, mudamos esse cenário com estratégia,
            automação e inteligência comercial para transformar o digital em um canal de
            <span className="font-bold"> lucro real</span> — e não só de likes.
          </p>
        </div>
      </div>
    </section>
  )
}
