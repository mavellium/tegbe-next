import Image from "next/image";

export default function SectionFunil() {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center bg-[#0C0014] text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Esqueça o funil de vendas
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-[1200px] w-full">
        {/* Imagem */}
        <figure className="w-full max-w-[600px] flex justify-center">
          <Image
            src="/Imagem-Growth.svg"
            alt="Modelo Flywheel"
            width={600}
            height={320}
            className="w-full h-[27em] object-contain"
            priority={false}
          />
        </figure>

        {/* Texto */}
        <div className="w-full max-w-[600px] text-start text-base leading-relaxed">
          <h2 className="text-center sm:text-start text-[25px]">
            O objetivo principal do modelo <br />
            Flywheel é <span className="font-bold">construir audiência</span><br />
            com conteúdo,<br />
            <span className="font-bold">
              engajar o público,<br />
              criar confiança<br />
              e expandir a memória
            </span><br />
            por meio das experiências.
          </h2>
        </div>
      </div>
    </section>
  );
}
