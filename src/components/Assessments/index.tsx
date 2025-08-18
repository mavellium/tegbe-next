"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import YoutubePlaceholder from "../YoutubePlaceholder";

const testimonials = [
  {
    name: "Dr. Calebe",
    role: "CEO Instituto do Sorriso",
    videoThumbnail: "https://img.youtube.com/vi/1MIjs_OA-Uc/maxresdefault.jpg",
    image: "/Clientes/dr-calebe.jpg",
    videoId: "1MIjs_OA-Uc",
    quote:
      "Antes a gente só fazia posts prontos, nada personalizado. Com a TegBe, tudo mudou. Eles respeitam nosso jeito, ajudam a contar nossa história de forma verdadeira e estratégica. Foi um divisor de águas para a clínica. Pra mim, é transformação de verdade.",
  },
  {
    name: "Rodrigo",
    role: "CEO Corretor Online",
    videoThumbnail: "https://img.youtube.com/vi/twzDdL1UUnY/maxresdefault.jpg",
    image: "/Clientes/rodrigo.jpeg",
    videoId: "twzDdL1UUnY",
    quote:
      "Sempre que tive dúvida ou precisei de ajuda, a TegBe esteve presente, não só com marketing, mas auxiliando em várias áreas do meu negócio. Eles respeitam nosso jeito e trabalham com sinceridade e coração. Desde que começamos, nossa visibilidade cresceu muito e conquistamos mais clientes. Pra mim, é parceria de verdade, que faz a diferença.",
  }
];

export default function Assessments() {
  return (
    <section className="px-8 pb-28 text-center bg-[#10071F]">
      <h1 className="flex items-center justify-center text-[#F2D95D] text-[32px] py-[50px] font-bold">
        O que os clientes Tegbe estão dizendo
      </h1>

      <Swiper
        className="mySwiper w-full px-[70px] max-w-[1300px] mx-auto"
        modules={[Navigation]}
        loop={true}
        slidesPerView={2}
        spaceBetween={20}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="!flex justify-center items-center">
            <div className="bg-white rounded-[10px] w-full sm:h-[620px] min-h-[800px] max-w-[500px] flex flex-col justify-between shadow-[5px_5px_20px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="flex flex-col justify-between gap-[25px] px-[30px] pt-[40px] pb-[20px]">
                <div className="flex justify-between items-end h-[67px]">
                  <svg
                    className="svg-branco"
                    width="114"
                    height="17"
                    viewBox="0 0 114 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.9062 5.12866L16.375 5.78491C16.75 5.84741 17.0625 6.09741 17.1875 6.47241C17.3125 6.81616 17.2188 7.22241 16.9375 7.47241L13.6875 10.6912L14.4688 15.2537C14.5312 15.6287 14.375 16.0037 14.0625 16.2224C13.75 16.4724 13.3438 16.4724 13 16.3162L9 14.1599L4.96875 16.3162C4.65625 16.4724 4.21875 16.4724 3.9375 16.2224C3.625 16.0037 3.46875 15.6287 3.53125 15.2537L4.28125 10.6912L1.03125 7.47241C0.75 7.22241 0.65625 6.81616 0.78125 6.47241C0.90625 6.09741 1.21875 5.84741 1.59375 5.78491L6.09375 5.12866L8.09375 0.972412C8.25 0.628662 8.59375 0.409912 9 0.409912C9.375 0.409912 9.71875 0.628662 9.875 0.972412L11.9062 5.12866ZM35.9062 5.12866L40.375 5.78491C40.75 5.84741 41.0625 6.09741 41.1875 6.47241C41.3125 6.81616 41.2188 7.22241 40.9375 7.47241L37.6875 10.6912L38.4688 15.2537C38.5312 15.6287 38.375 16.0037 38.0625 16.2224C37.75 16.4724 37.3438 16.4724 37 16.3162L33 14.1599L28.9688 16.3162C28.6562 16.4724 28.2188 16.4724 27.9375 16.2224C27.625 16.0037 27.4688 15.6287 27.5312 15.2537L28.2812 10.6912L25.0312 7.47241C24.75 7.22241 24.6562 6.81616 24.7812 6.47241C24.9062 6.09741 25.2188 5.84741 25.5938 5.78491L30.0938 5.12866L32.0938 0.972412C32.25 0.628662 32.5938 0.409912 33 0.409912C33.375 0.409912 33.7188 0.628662 33.875 0.972412L35.9062 5.12866ZM59.9062 5.12866L64.375 5.78491C64.75 5.84741 65.0625 6.09741 65.1875 6.47241C65.3125 6.81616 65.2188 7.22241 64.9375 7.47241L61.6875 10.6912L62.4688 15.2537C62.5312 15.6287 62.375 16.0037 62.0625 16.2224C61.75 16.4724 61.3438 16.4724 61 16.3162L57 14.1599L52.9688 16.3162C52.6562 16.4724 52.2188 16.4724 51.9375 16.2224C51.625 16.0037 51.4688 15.6287 51.5312 15.2537L52.2812 10.6912L49.0312 7.47241C48.75 7.22241 48.6562 6.81616 48.7812 6.47241C48.9062 6.09741 49.2188 5.84741 49.5938 5.78491L54.0938 5.12866L56.0938 0.972412C56.25 0.628662 56.5938 0.409912 57 0.409912C57.375 0.409912 57.7188 0.628662 57.875 0.972412L59.9062 5.12866ZM83.9062 5.12866L88.375 5.78491C88.75 5.84741 89.0625 6.09741 89.1875 6.47241C89.3125 6.81616 89.2188 7.22241 88.9375 7.47241L85.6875 10.6912L86.4688 15.2537C86.5312 15.6287 86.375 16.0037 86.0625 16.2224C85.75 16.4724 85.3438 16.4724 85 16.3162L81 14.1599L76.9688 16.3162C76.6562 16.4724 76.2188 16.4724 75.9375 16.2224C75.625 16.0037 75.4688 15.6287 75.5312 15.2537L76.2812 10.6912L73.0312 7.47241C72.75 7.22241 72.6562 6.81616 72.7812 6.47241C72.9062 6.09741 73.2188 5.84741 73.5938 5.78491L78.0938 5.12866L80.0938 0.972412C80.25 0.628662 80.5938 0.409912 81 0.409912C81.375 0.409912 81.7188 0.628662 81.875 0.972412L83.9062 5.12866ZM107.906 5.12866L112.375 5.78491C112.75 5.84741 113.062 6.09741 113.188 6.47241C113.312 6.81616 113.219 7.22241 112.938 7.47241L109.688 10.6912L110.469 15.2537C110.531 15.6287 110.375 16.0037 110.062 16.2224C109.75 16.4724 109.344 16.4724 109 16.3162L105 14.1599L100.969 16.3162C100.656 16.4724 100.219 16.4724 99.9375 16.2224C99.625 16.0037 99.4688 15.6287 99.5312 15.2537L100.281 10.6912L97.0312 7.47241C96.75 7.22241 96.6562 6.81616 96.7812 6.47241C96.9062 6.09741 97.2188 5.84741 97.5938 5.78491L102.094 5.12866L104.094 0.972412C104.25 0.628662 104.594 0.409912 105 0.409912C105.375 0.409912 105.719 0.628662 105.875 0.972412L107.906 5.12866Z"
                      fill="#E61A4A"></path>
                  </svg>
                  <Image
                    src="/Clientes/Aspas.svg"
                    alt="Aspas"
                    width={89}
                    height={67}
                  />
                </div>

                <div className="relative w-full max-w-[430px] cursor-pointer">
                    <YoutubePlaceholder videoId={testimonial.videoId} />
                </div>

                <p className="md:text-[15px] sm:text-[18px] leading-[30px] text-start italic font-semibold text-[#232222]">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 bg-[#CA1A41] text-white p-4">
                <Image
                  src={testimonial.image}
                  width={100}
                  height={100}
                  alt={testimonial.name}
                  className="rounded-full object-cover border-2 border-white max-w-[100px] max-h-[100px]"
                />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[1.1em]">{testimonial.name}</span>
                  <span className="text-[0.9em] opacity-90">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

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
      </Swiper>
    </section>
  );
}
