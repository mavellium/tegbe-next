import Image from "next/image";

export default function Section5() {
  return (
    <section className="flex flex-col w-full h-auto px-6 py-[10em] items-center justify-center bg-[#10071F] text-white">
      <div className="flex flex-col items-center gap-[50px]">
        <div className="flex gap-8 flex-wrap items-center justify-center">
          <div className="bg-white rounded-xl relative flex justify-center items-center w-[200px] h-[200px]">
            <Image
              src={"/selo_mercadolivre.svg"}
              alt="logo mercado livre"
              width={190}
              height={190}></Image>
          </div>
          <div className="max-w-[700px] w-full">
            <h2 className="text-[18px] font-bold mb-3 text-center lg:text-start">
              Consultora Oficial Mercado Livre
            </h2>
            <p className="flex flex-col gap-3 text-[18px] font-medium lgtext-start text-justify">
              <span>
                Ser consultora oficial do Mercado Livre significa que a TegBe
                domina profundamente a maior plataforma de e-commerce da América
                Latina.
              </span>

              <span>
                Isso demonstra nossa capacidade única de potencializar vendas,
                criar estratégias eficazes e gerar resultados concretos para
                nossos clientes nesse marketplace essencial.
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-8 flex-wrap items-center justify-center">
          <div className="bg-white rounded-xl relative flex justify-center items-center w-[200px] h-[200px]">
            <Image
              src={"/selo_kommo.svg"}
              alt="logo kommo"
              width={190}
              height={190}></Image>
          </div>
          <div className="max-w-[700px] w-full">
            <h2 className="text-[18px] font-bold mb-3 text-center lg:text-start">
              Kommo Partner
            </h2>
            <p className="flex flex-col gap-3 text-[18px] font-medium lgtext-start text-justify">
              <span>
                A TegBe é parceira oficial da Kommo, ferramenta líder em CRM e
                automação de vendas.
              </span>

              <span>
                Esse selo comprova nossa expertise em otimizar processos
                comerciais e relacionamento com clientes, elevando a performance
                de vendas e a fidelização com tecnologia de ponta.
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-8 flex-wrap items-center justify-center">
          <div className="bg-white rounded-xl relative flex justify-center items-center w-[200px] h-[200px]">
            <Image
              src={"/selo_amazon.svg"}
              alt="logo amazon"
              width={190}
              height={190}></Image>
          </div>
          <div className="max-w-[700px] w-full">
            <h2 className="text-[18px] font-bold mb-3 text-center lg:text-start">
              Amazon Mentor
            </h2>
            <p className="flex flex-col gap-3 text-[18px] font-medium lgtext-start text-justify">
              <span>
Como Amazon Mentor, a TegBe possui um reconhecimento exclusivo que destaca nosso conhecimento avançado e estratégico dentro da maior plataforma global de comércio eletrônico. Estamos aptos a guiar empresas para um crescimento sustentável e escalável dentro da Amazon.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
