"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Funil from "@/components/Funil";
import Costumers from "@/components/Costumers";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer/Index";
import Assessments from "@/components/Assessments";
import SectionStrategic from "@/components/SectionStrategic";

const fallbackData = {
  "title-init":
    "Estruture o marketing e as vendas da sua empresa com soluções estratégicas sob medida",
  "description-init": `Chega de Investir em Marketing sem ver Resultados. Somos a Agência que foca em <b>Vendas</b>, <b>Estrutura</b> e <b>Escala</b>, <b>Sem Enrolação.</b>`,
  "title-video": "Por que seu Investimento não traz retorno?",
  "description-video":
    "Estudos mostram que muitas pequenas e médias empresas falham no digital — não por falta de investimento, mas por focar em  <b>métricas de vaidade</b> (curtidas, alcance) e negligenciar uma estratégia de  <b>vendas real.</b> <br /> <br /> <b>   Talvez sua empresa esteja nesse grupo. </b> <br /> <br /> Na <b>TegBe</b>, mudamos esse cenário com estratégia, automação e inteligência comercial para transformar o digital em um canal de <b> lucro real</b> — e não só de likes.",
  "title-funil": "Esqueça o funil de vendas",
  "description-funil": `O objetivo principal do modelo <br /> Flywheel é <b className="font-bold">construir audiência</b><br />com conteúdo,<br /> <b> engajar o público,<br /> criar confiança<br /> e expandir a memória </b><br /> por meio das experiências.`,
  "title-carrossel": `
    A Tegbe <span class="text-[#E61A4A]">transforma a presença digital</span> da
sua empresa com <span class="text-[#E61A4A]">estratégias comerciais</span> e de
marketing <span class="text-[#E61A4A]">sob medida</span>
`,
};

export default function Home() {
  const [data, setData] = useState<any>(fallbackData); // inicia com fallback
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://mavellium-dashboard.vercel.app/api/tegbe");
        if (!res.ok) throw new Error("Erro ao buscar dados");
        const json = await res.json();
        setData(json.values);
      } catch (error) {
        console.error("Erro no fetch:", error);
        // mantém fallback
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Remove o carregando, sempre mostra conteúdo com o que tem em `data`
  return (
    <>
      <Header />
      <main>
        <Section1 title={data["title-init"]} description={data["description-init"]} />
        <Section3 title={data["title-video"]} description={data["description-video"]} />
        <Section2 />
        <Funil title={data["title-funil"]} description={data["description-funil"]} />
        <SectionStrategic
          title={data["title-carrossel"]}
          description={data["description-carrossel"]}
        />
        <Assessments />
        <Costumers />
        <Section4 />
        <Section5 />
        <Section6 />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
