export default function SectionTextImage() {
  return (
    <section
      id="section-text-image"
      className="pt-20 px-4 bg-gradient-to-b from-black to-[#0C0014]"
    >
      <div className="flex flex-wrap items-center justify-center gap-[clamp(30px,5vw,80px)] max-w-[1300px] w-full mx-auto">
        {/* Bloco de vídeo */}
        <figure className="w-full h-[400px] flex-1 flex items-center justify-center">
          <div
            id="yt-placeholder-main"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '644px',
              height: '100%',
              cursor: 'pointer',
            }}
          >
            <img
              src="https://img.youtube.com/vi/1MIjs_OA-Uc/maxresdefault.jpg"
              alt="Assista o vídeo"
              className="w-full h-full object-cover rounded-[10px]"
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '64px',
                height: '64px',
                background: `url('https://cdn-icons-png.flaticon.com/512/727/727245.png') no-repeat center center`,
                backgroundSize: 'contain',
                pointerEvents: 'none',
              }}
            />
          </div>
        </figure>

        {/* Texto à direita */}
        <div className="flex-1 text-[#F0F0F0]">
          <h2 className="text-[32px] font-semibold mb-10">Por que seu Investimento não traz retorno?</h2>
          <p className="text-[18px] font-medium leading-[30px] text-justify">
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
  );
}
