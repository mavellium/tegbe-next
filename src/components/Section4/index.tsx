import { Link } from "lucide-react";

export default function SectionLoseClient() {
  return (
    <section
      className="flex flex-row flex-wrap justify-center items-center gap-[40px] lg:gap-[120px] py-[5em] px-[2em] w-full bg-[#CA1A41] text-white text-center"
    >
      <div id="lose-client-container" className="w-[30em]">
        <div id="lose-client-content" className="text-start">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#EEC35A] text-center lg:text-start">
            Chega de perder clientes
          </h1>
          <p className="text-lg md:text-xl font-medium leading-relaxed flex-wrap mt-8 text-center lg:text-start">
            Veja como a <strong className="text-white">TegBe</strong> transforma presença digital em{" "}
            <strong className="text-white">lucro de verdade</strong>.
          </p>
        </div>
      </div>
      <a
        href="#section-2"
        className="w-[22em] h-[3em] flex items-center justify-center px-6 py-3 rounded-[10px] font-bold text-[#21244D] border-none
  shadow-[0_4px_12px_rgb(242,217,93)]
  cursor-pointer transition-all duration-300 ease-in-out transform whitespace-nowrap
  bg-gradient-to-r from-[#f2d95d] to-[#EEC35A]
  hover:from-[#21244D] hover:to-[#22398E] hover:text-white
  hover:shadow-[0_6px_16px_rgba(230,26,74,0.5)]
  hover:scale-105 hover:-translate-y-1"
      >
        QUERO MAIS INFORMAÇÕES
      </a>

    </section>
  );
}
