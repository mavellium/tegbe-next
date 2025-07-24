'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Section2() {
  useEffect(() => {
    const formContainer = document.getElementById('section-2-form')
    if (!formContainer) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
      className="flex flex-col lg:flex-row justify-center items-center w-full bg-black px-6 md:px-10 py-20 gap-10"
    >
      {/* Etapas */}
      <div className="flex flex-col justify-center items-center w-full max-w-2xl text-white space-y-8">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold">
            Dê o próximo passo para estruturar seu marketing em menos de um minuto
          </h2>
          <hr className="h-[3px] w-full mx-auto mt-4 border-b-4 border-[#CA1A41]" />
        </div>

        {/* Etapa 1 */}
        <div className="flex flex-col sm:flex-row items-center bg-[#21244D] rounded-[10px] h-full p-6 gap-6">
          <figure className="h-20 w-20">
            <Image
              src="/form-icon1.webp"
              alt="Ícone de formulário"
              width={80}
              height={80}
              className="object-contain h-full w-full"
              loading="lazy"
            />
          </figure>
          <div className="text-left w-full">
            <h3 className="text-2xl font-bold mb-1 flex justify-end">1</h3>
            <h2 className="text-lg font-semibold">Preencha o formulário</h2>
            <p className="text-sm mt-1">
              Envie suas informações de contato. Todos os seus dados <br />
              estarão seguros, vamos cuidar bem deles.
            </p>
          </div>
        </div>

        {/* Seta */}
        <figure className="w-full max-w-sm px-6">
          <Image
            src="/Linha.webp"
            alt="Seta"
            width={320}
            height={40}
            className="object-contain w-full"
            loading="lazy"
          />
        </figure>

        {/* Etapa 2 */}
        <div className="flex flex-col sm:flex-row items-center bg-[#21244D] rounded-[10px] h-full p-6 gap-6">
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-1">2</h3>
            <h2 className="text-lg font-semibold">Receba uma ligação</h2>
            <p className="text-sm mt-1">
              De quem entende seu desafio e sabe como destravar <br />
              resultados com estratégia e execução. Mais que um papo — <br />
              é o início de uma nova fase para sua empresa.
            </p>
          </div>
          <figure className="h-20 w-20">
            <Image
              src="/form-icon2.webp"
              alt="Ícone de telefone"
              width={70}
              height={80}
              className="object-contain h-full w-full"
              loading="lazy"
            />
          </figure>
        </div>
      </div>

      {/* Formulário */}
      <div
        id="section-2-form"
        className="w-full max-w-[560px] bg-[#21244D] rounded-[10px] px-3 sm:px-8 py-4 sm:py-10 h-full"
      >
        <noscript>Para visualizar o formulário, ative o JavaScript no seu navegador.</noscript>
      </div>
    </section>
  )
}
