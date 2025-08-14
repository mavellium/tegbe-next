"use client";

import { useState } from "react";

export default function SectionTextImage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="section-text-image"
      className="pt-20 px-4 bg-black py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-[1300px] w-full mx-auto">
        {/* Bloco de vídeo */}
        <figure
          className="w-full max-w-[644px] aspect-video flex items-center justify-center rounded-[10px] overflow-hidden bg-black relative group cursor-pointer"
          onClick={() => setShowVideo(true)}>
          {showVideo ? (
            <iframe
              className="w-full h-full"
              width="882"
              height="496"
              src="https://www.youtube.com/embed/Z_RAN9BaWZc?autoplay=1"
              title="Tegbe - Conheça nossas soluções!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"></iframe>
          ) : (
            <>
              <img
                src="https://img.youtube.com/vi/Z_RAN9BaWZc/hqdefault.jpg"
                alt="Preview do vídeo Tegbe"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 w-[48px] h-[48px] -translate-x-1/2 -translate-y-1/2 bg-[url('https://cdn-icons-png.flaticon.com/512/727/727245.png')] bg-no-repeat bg-center bg-contain pointer-events-none" />
              </div>
            </>
          )}
        </figure>

        {/* Texto */}
        <div className="text-[#F0F0F0] max-w-[600px]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-10 text-center lg:text-left">
            Por que seu Investimento não traz retorno?
          </h2>
          <p className="text-base md:text-lg leading-[1.8] text-justify">
            Estudos mostram que muitas pequenas e médias empresas falham no
            digital — não por falta de investimento, mas por focar em{" "}
            <span className="font-bold">métricas de vaidade</span> (curtidas,
            alcance) e negligenciar uma estratégia de{" "}
            <span className="font-bold">vendas real.</span>
            <br />
            <br />
            <span className="font-bold">
              Talvez sua empresa esteja nesse grupo.
            </span>
            <br />
            <br />
            Na <span className="font-bold">TegBe</span>, mudamos esse cenário
            com estratégia, automação e inteligência comercial para transformar
            o digital em um canal de
            <span className="font-bold"> lucro real</span> — e não só de likes.
          </p>
        </div>
      </div>
    </section>
  );
}
