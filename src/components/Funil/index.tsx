import Image from "next/image";

export default function SectionFunil() {
  return (
    <section className="flex flex-col w-full h-auto py-[8em] px-[6em] justify-center items-center text-center bg-[#0C0014] text-white">
      <h2 className="text-[32px] mb-[1em] font-bold">
        Esqueça o funil de vendas
      </h2>

      <div className="mt-[2em] flex flex-row justify-center items-center gap-[5em] max-w-[1000px] w-full flex-wrap lg:flex-nowrap">
        {/* Imagem */}
        <figure className="flex justify-center items-center w-full max-w-[600px]">
          <Image
            src="/Imagem-Growth.svg"
            alt="Modelo Flywheel"
            width={600}
            height={320}
            className="h-[27em] w-auto object-contain"
            priority={false}
          />
        </figure>

        {/* Texto */}
        <div className="w-full flex flex-col justify-center text-start text-[25px] leading-[1.5]">
          <p>
            O objetivo principal do modelo <br />
            Flywheel é
            <span className="font-bold"> construir audiência</span><br />
            com conteúdo,<br />
            <span className="font-bold">
              engajar o público,<br />
              criar confiança e <br />
              expandir a memória
            </span><br />
            por meio das experiências.
          </p>
        </div>
      </div>
    </section>
  );
}
