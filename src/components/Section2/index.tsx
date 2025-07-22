'use client'

import { useEffect } from 'react'
import Image from 'next/image'



export default function Section2() {

    useEffect(() => {
    const formContainer = document.getElementById('section-2-form')
    if (!formContainer) return

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Cria o script inline
          const scriptInline = document.createElement('script')
          scriptInline.defer = true
          scriptInline.textContent = `
            !function(a,m,o,c,r,m){
              a[o+c]=a[o+c]||{
                setMeta:function(p){this.params=(this.params||[]).concat([p])}
              },
              a[o+r]=a[o+r]||function(f){
                a[o+r].f=(a[o+r].f||[]).concat([f])
              },
              a[o+r]({
                id:"1529739",
                hash:"5863b79f491adc496a89844c0bdb543d",
                locale:"pt"
              }),
              a[o+m]=a[o+m]||function(f,k){
                a[o+m].f=(a[o+m].f||[]).concat([[f,k]])
              }
            }(window,0,"amo_forms_","params","load","loaded");
          `

          // Script externo
          const scriptSrc = document.createElement('script')
          scriptSrc.async = true
          scriptSrc.charset = 'utf-8'
          scriptSrc.src = 'https://forms.kommo.com/forms/assets/js/amoforms.js?1750445641'

          formContainer.appendChild(scriptInline)
          formContainer.appendChild(scriptSrc)

          observer.unobserve(formContainer)
        }
      })
    })

    observer.observe(formContainer)

    return () => observer.disconnect()
  }, [])


  return (
    <section
      id="section-2"
      className="flex flex-wrap justify-center items-center w-full bg-black px-10 py-28 gap-y-5"
    >
      {/* Bloco de etapas */}
      <div className="flex flex-col justify-center items-center w-full max-w-xl mr-20 text-white">
        {/* Título */}
        <div className="text-center text-[0.9em] mb-8">
          <h2 className="text-xl md:text-2xl font-semibold">
            Dê o próximo passo para estruturar seu marketing em menos de um minuto
          </h2>
          <hr className="h-[3px] w-full mt-4 mb-8 bg-[#CA1A41] border-none" />
        </div>

        {/* Etapa 1 */}
        <div className="flex flex-row items-center justify-center bg-[#21244D] rounded-[10px] w-full max-w-2xl h-[17em] gap-8 px-6 relative">
          <figure className="h-20">
            <Image
              src="/form-icon1.webp"
              alt="Ícone de formulário em prancheta"
              width={80}
              height={80}
              className="object-contain h-full"
              loading="lazy"
            />
          </figure>
          <div className="text-left">
            <h3 className="text-3xl font-bold mb-2 flex justify-end">1</h3>
            <h2 className="text-xl font-semibold">Preencha o formulário</h2>
            <p className="text-sm mt-1">
              Envie suas informações de contato. Todos os seus dados <br />
              estarão seguros, vamos cuidar bem deles.
            </p>
          </div>
        </div>

        {/* Seta */}
        <figure className="w-[20em]">
          <Image
            src="/Linha.webp"
            alt="Seta indicando a próxima etapa"
            width={320}
            height={40}
            loading="lazy"
            className="object-contain w-full"
          />
        </figure>

        {/* Etapa 2 */}
        <div className="flex flex-row items-center justify-center bg-[#21244D] rounded-[10px] w-full max-w-2xl h-[17em] gap-8 px-6 relative">
          <div className="text-left">
            <h3 className="text-3xl font-bold mb-2">2</h3>
            <h2 className="text-xl font-semibold">Receba uma ligação</h2>
            <p className="text-sm mt-1">
              De quem entende seu desafio e sabe como destravar <br />
              resultados com estratégia e execução. Mais que um papo <br />
              — é o início de uma nova fase para sua empresa.
            </p>
          </div>
          <figure className="h-20">
            <Image
              src="/form-icon2.webp"
              alt="Ícone de telefone"
              width={80}
              height={80}
              className="object-contain h-full"
              loading="lazy"
            />
          </figure>
        </div>
      </div>

      {/* Placeholder do formulário */}
      <div
        id="section-2-form"
        className="flex flex-col items-center justify-center w-full max-w-[560px] p-[50px_40px] bg-[#21244D] rounded-[10px] flex-1 h-auto"

      >
        <noscript>Para visualizar o formulário, ative o JavaScript no seu navegador.</noscript>
      </div>
    </section>
  )
}
