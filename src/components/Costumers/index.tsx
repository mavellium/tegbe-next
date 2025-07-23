"use client";

import Image from "next/image";

const clientes = [
  {
    nome: "ACIG",
    branco: "/empresas/acig-branco.svg",
    colorido: "/empresas/acig-colorida.svg",
  },
  {
    nome: "Roldon Cell",
    branco: "/empresas/roldon-cell-branco.svg",
    colorido: "/empresas/roldon-cell-colorida.svg",
  },
  {
    nome: "Corretor Online",
    branco: "/empresas/corretor-online-branco.svg",
    colorido: "/empresas/corretor-online-colorida.svg",
  },
  {
    nome: "Altos do Bosque",
    branco: "/empresas/altos-do-bosque-branco.svg",
    colorido: "/empresas/altos-do-bosque-colorida.svg",
  },
  {
    nome: "Faip",
    branco: "/empresas/faip-branco.svg",
    colorido: "/empresas/faip-colorida.svg",
  },
  {
    nome: "Adesiva",
    branco: "/empresas/adesiva-branco.svg",
    colorido: "/empresas/adesiva-colorida.svg",
  },
  {
    nome: "Pro Imagem",
    branco: "/empresas/pro-imagem-branco.svg",
    colorido: "/empresas/pro-imagem-colorida.svg",
  },
  {
    nome: "Monte Libano",
    branco: "/empresas/monte-libano-branco.svg",
    colorido: "/empresas/monte-libano-colorida.svg",
  },
  {
    nome: "Chimarrão",
    branco: "/empresas/chimarrao-branco.svg",
    colorido: "/empresas/chimarrao-colorida.svg",
  },
  {
    nome: "Villas Barbearia",
    branco: "/empresas/villas-barbearia-branco.svg",
    colorido: "/empresas/villas-barbearia-colorida.svg",
  },
  {
    nome: "Instituto do Sorriso",
    branco: "/empresas/instituto-do-sorriso-branco.svg",
    colorido: "/empresas/instituto-do-sorriso-colorida.svg",
  },
  {
    nome: "Unioss",
    branco: "/empresas/unioss-branco.svg",
    colorido: "/empresas/unioss-colorida.svg",
  },
];

export default function SectionCustomers() {
  return (
    <section
      id="section-customers"
      className="w-full bg-[#0C0014] py-20 px-4 text-center flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl font-bold text-white mb-4 border-b-4 border-[#CA1A41] pb-1">
        Clientes Tegbe
      </h1>
      <p className="text-white text-lg mb-10">
        Parceiros que transformaram o digital em lucro.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl w-full">
        {clientes.map((cliente, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-3 group w-full h-24"
          >
            <Image
              src={cliente.branco}
              alt={`Logo branca ${cliente.nome}`}
              width={200}
              height={100}
              className="block group-hover:hidden object-contain"
              loading="lazy"
            />
            <Image
              src={cliente.colorido}
              alt={`Logo colorida ${cliente.nome}`}
              width={200}
              height={100}
              className="hidden group-hover:block object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
