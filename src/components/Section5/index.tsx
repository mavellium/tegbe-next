export default function Section5() {
    return(
        <section className="flex flex-col w-full h-auto px-6 py-[10em] items-center justify-center bg-[var(--color-section)]">
            <h1 className="text-[#F2D95D] text-[34px] mb-10 text-center font-bold">
                Por que Escolher a TegBe?
            </h1>
            <div>
                <div className="flex flex-col items-center justify-center gap-8 w-full text-start font-bold text-xl">
                    <div className="flex flex-row items-center w-full h-full text-white rounded-[10px] bg-[var(--dark-blue)]">
                    <div className="p-12">
                        <img
                        src="/Selo-Consultoria-Mercado-Livre.svg"
                        alt="Somos consultores oficiais do Mercado Livre"
                        loading="lazy"
                        />
                    </div>
                    <h2 className="pr-12">
                        Somos consultores oficiais do Mercado Livre
                    </h2>
                    </div>

                    <div className="flex flex-row items-center w-full h-full text-white rounded-[10px] bg-[var(--dark-blue)]">
                    <div className="p-12">
                        <img
                        src="/Kommo-icon.svg"
                        alt="Especialistas em CRM Kommo"
                        loading="lazy"
                        />
                    </div>
                    <h2 className="pr-12">
                        Especialistas em CRM Kommo e automações que geram vendas.
                    </h2>
                    </div>

                    <div className="flex flex-row items-center w-full h-full text-white rounded-[10px] bg-[var(--dark-blue)]">
                    <div className="p-12">
                        <img
                        src="/Alvo-icon.webp"
                        alt="Método próprio de captação e conversão digital"
                        loading="lazy"
                        />
                    </div>
                    <h2 className="pr-12">
                        Criamos um método próprio de captação e conversão digital.
                    </h2>
                    </div>

                    <div className="flex flex-row items-center w-full h-full text-white rounded-[10px] bg-[var(--dark-blue)]">
                    <div className="p-12">
                        <img
                        src="/Clientes-icon.webp"
                        alt="Atendemos clínicas, e-commerces e empresas locais"
                        loading="lazy"
                        />
                    </div>
                    <h2 className="pr-12">
                        Atendemos clínicas, e-commerces, empresas locais e negócios que precisam de vendas reais.
                    </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}