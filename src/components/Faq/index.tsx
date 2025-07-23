'use client'
import { useState } from 'react'

const faqItems = [
  {
    pergunta: 'Nossos serviços são padronizados?',
    resposta: 'Não. Nossa estratégia é 100% personalizada com base no diagnóstico do seu negócio.',
  },
  {
    pergunta: 'Qual o prazo para ver resultados?',
    resposta: 'Resultados variam, mas nosso foco é otimizar o funil para que você veja retorno sobre o investimento o mais rápido possível.',
  },
  {
    pergunta: 'Minha empresa é muito pequena, vocês atendem?',
    resposta: 'Sim! Atendemos pequenas e médias empresas que buscam crescimento real.',
  },
  {
    pergunta: 'Vocês oferecem garantia de resultados?',
    resposta: 'Nosso "skin in the game" é trabalhar em conjunto para alcançar os objetivos. O resultado é construído com base na estratégia e execução em parceria. (Se houver garantia formal, insira aqui).',
  },
]

export default function SectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#10071F] flex flex-col w-full h-auto py-20 px-6 md:px-20 items-center justify-center text-center">
      <h1 className="text-[#F2D95D] text-2xl md:text-3xl font-bold mb-10">Perguntas frequentes</h1>

      <div className="flex flex-col gap-4 w-full max-w-[1200px] text-white">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-start text-left w-full rounded-[10px] bg-[#0C0014] overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'open' : ''
            }`}
          >
            <button
              className="w-full h-19 p-4 font-bold flex items-center justify-between text-white cursor-pointer"
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              <h2 className="text-base md:text-lg">{item.pergunta}</h2>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? '-rotate-90' : 'rotate-0'
                }`}
              >
                <svg className="w-[10px] h-[15px]" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.79282 0.292969L9.20703 1.70718L3.41414 7.50008L9.20703 13.293L7.79282 14.7072L0.585711 7.50008L7.79282 0.292969Z"
                    fill="#F0F0F0"
                  />
                </svg>
              </span>
            </button>

            {openIndex === index && (
              <div className="w-full px-4 pb-4 text-sm text-gray-200">
                <p>{item.resposta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
