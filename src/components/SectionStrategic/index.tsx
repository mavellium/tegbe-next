"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const slides = [
    {
    icon: "/cards-carrossel/Icone-card-4.svg",
    title: "Tráfego Pago",
    description: "Gestão de anúncios no Google e Meta para atrair clientes",
    bullets: [
      "Leve pessoas certas até o seu funil de vendas",
      "Gere demanda previsível e mensure cada resultado",
      "Mais controle, mais oportunidades, mais ROI",
    ],
    image: "/Imagem-card-4.webp",
    alt: "ícones de redes sociais",
  },
  {
    icon: "/cards-carrossel/Icone-card-1.svg",
    title: "Criativos",
    description: "Anúncios feitos por copywriters e designers da TegBe",
    bullets: [
      "Foco em conversão, não só em aparência",
      "Baseados na experiência real com negócios como o seu",
      "Desenvolvidos por uma equipe em constante evolução",
    ],
    image: "/Imagem-card-1.webp",
    alt: "cards",
  },
  {
    icon: "/cards-carrossel/Icone-card-2.svg",
    title: "CRM",
    description: "Organize seu funil, relacionamento e vendas em um só lugar",
    bullets: [
      "Tenha clareza sobre cada etapa do seu processo",
      "Conecte, nutra e converta seus leads com inteligência",
      "Implemente estratégias como upsell, downsell e campanhas personalizadas",
    ],
    image: "/Imagem-card-2.webp",
    alt: "tabelas descritivas de usuários",
  },
  {
    icon: "/cards-carrossel/Icone-card-3.svg",
    title: "Landing Pages",
    description: "Páginas que capturam oportunidades de verdade",
    bullets: [
      "Projetadas com foco em conversão e performance",
      "Fáceis de editar, rápidas de colocar no ar",
      "Desenvolvidas com as melhores ferramentas do mercado",
    ],
    image: "/Imagem-card-3.webp",
    alt: "estrutura de um site",
  },
  {
    icon: "/cards-carrossel/Icone-card-5.svg",
    title: "Dashboards",
    description: "Os principais números do seu negócio na palma da mão",
    bullets: [
      "Indicadores claros para decisões mais inteligentes",
      "Transforme dados em ações que realmente geram crescimento",
      "Acesse de onde quiser, a qualquer hora",
    ],
    image: "/Imagem-card-5.webp",
    alt: "monitor com dados",
  },
  // {
  //   icon: "/cards-carrossel/Icone-card-6.svg",
  //   title: "Gestão & Atendimento",
  //   description: "Seu marketing gerenciado por especialistas em crescimento",
  //   bullets: [
  //     "Equipe treinada, monitorada e em evolução constante",
  //     "Atendimento rápido, próximo e focado em resultados",
  //     "Toda a expertise da TegBe, lado a lado com seu negócio",
  //   ],
  //   image: "/Imagem-card-6.webp",
  //   alt: "colaboradores TegBe",
  // },
  // {
  //   icon: "/cards-carrossel/Icone-card-7.svg",
  //   title: "Soluções Comerciais",
  //   description: "Montamos e otimizamos sua operação de vendas do zero",
  //   bullets: [
  //     "Treinamos seu time ou fornecemos nossos especialistas",
  //     "Estrutura, processos e resultados sob medida",
  //     "Mais vendas, menos improviso",
  //   ],
  //   image: "/Imagem-card-7.webp",
  //   alt: "colaboradores TegBe",
  // },
  {
    icon: "/cards-carrossel/Icone-card-8.svg",
    title: "Funcionário de IA",
    description: "Atendimento 24/7 com inteligência artificial treinada",
    bullets: [
      "Conversas que geram oportunidades reais",
      "Baseado em dados de marketing e comportamento de compra",
      "Atualizado constantemente para vender por você",
    ],
    image: "/Imagem-card-8.webp",
    alt: "mão robótica com ícones",
  },
];

export default function SectionStrategic() {
  return (
    <section className="section-strategic w-full py-24 px-4 lg:px-12 text-center bg-[#10071F] flex flex-col items-center justify-center">
      <h1 className="text-[24px] sm:text-[32px] font-bold text-gray-100 w-full sm:w-[75%] mx-auto">
        A Tegbe{" "}
        <span className="text-[#E61A4A]">transforma a presença digital</span> da
        sua empresa com{" "}
        <span className="text-[#E61A4A]">estratégias comerciais</span> e de
        marketing <span className="text-[#E61A4A]">sob medida</span>
      </h1>
      <p className="text-gray-100 text-[20px] font-medium mt-2">
        Conheça as soluções inteligentes que desenvolvemos para gerar mais
        vendas e crescimento real para o seu negócio
      </p>

      <div className="w-full my-16 relative">
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          fadeEffect={{ crossFade: false }}
          className="swiper-tegbe">
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide-centered">
              <div className="bg-white p-6 lg:p-10 rounded-[10px] text-left flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start max-w-[800px] w-full mx-auto gap-6 pb-[50px]">
                <div className="flex flex-col items-start max-w-[600px]">
                  <Image
                    src={slide.icon}
                    alt={slide.title}
                    width={48}
                    height={48}
                  />
                  <h2 className="text-[#262626] text-[24px] lg:text-[26px] font-semibold py-5 pb-3">
                    {slide.title}
                  </h2>
                  <p className="text-[#585858] text-[16px] lg:text-[17px] relative pb-[15px] mb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[150px] after:h-[3px] after:bg-[#E61A4A]">
                    {slide.description}
                  </p>
                  <ul className="list-none flex flex-col gap-4 mt-2">
                    {slide.bullets.map((item, i) => (
                      <li
                        key={i}
                        className="flex flex-row items-center gap-2 text-[#262626] text-[13px] font-medium">
                        <span className="min-w-[8px] min-h-[8px] bg-[#E61A4A] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center lg:justify-end flex-shrink-0">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={400}
                    height={380}
                    className="w-full max-w-[300px] lg:max-w-[380px] object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev w-[60px] h-[60px] bg-[#CA1A41] rounded-full shadow-md flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-0 z-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 41"
            fill="none"
            className="w-[40px] h-[40px]"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.70344 23.1264L18.2034 39.6264C19.505 40.928 21.6152 40.928 22.9168 39.6264C24.2183 38.3249 24.2183 36.2146 22.9168 34.9131L8.77344 20.7697L22.9168 6.6264C24.2183 5.32484 24.2183 3.21461 22.9168 1.91306C21.6152 0.611512 19.505 0.611513 18.2034 1.91306L1.70344 18.4131C1.07854 19.0382 0.727484 19.8858 0.727484 20.7697C0.727484 21.6536 1.07854 22.5013 1.70344 23.1264Z"
              fill="#F0F0F0"
            />
          </svg>
        </div>
        <div className="swiper-button-next w-[60px] h-[60px] bg-[#CA1A41] rounded-full shadow-md flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-0 z-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 41"
            fill="none"
            className="w-[40px] h-[40px]"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.2966 23.1264L5.79656 39.6264C4.49501 40.928 2.38478 40.928 1.08323 39.6264C-0.218322 38.3249 -0.218322 36.2146 1.08323 34.9131L15.2266 20.7697L1.08323 6.6264C-0.218323 5.32484 -0.218322 3.21461 1.08323 1.91306C2.38478 0.611512 4.49501 0.611513 5.79656 1.91306L22.2966 18.4131C22.9215 19.0382 23.2725 19.8858 23.2725 20.7697C23.2725 21.6536 22.9215 22.5013 22.2966 23.1264Z"
              fill="#F0F0F0"
            />
          </svg>
        </div>

        <div className="swiper-pagination" />
      </div>

      <a
        href="#section-2"
        className="flex items-center justify-center py-3 px-6 rounded-[10px] text-[#F0F0F0] font-semibold text-[18px] border-none bg-gradient-to-r from-[#E61A4A] to-[#CA1A41] shadow-lg shadow-[#e61a4a80] transition-all duration-300 uppercase w-full max-w-[400px] mx-auto hover:text-[#20254C] hover:from-[#f2d95d] hover:to-[#EEC35A] hover:shadow-[0_4px_12px_rgb(242,217,93)]">
        Impulsionar meu marketing
      </a>
    </section>
  );
}
