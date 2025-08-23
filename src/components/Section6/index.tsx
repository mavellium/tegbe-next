export default function SectionLoseClient() {
    return (
        <section className="relative flex flex-col items-center justify-center w-full h-auto px-6 py-[10em] bg-[#CA1A41] text-center overflow-hidden">
            {/* Imagem de fundo */}
            <img
                src="/logo-background.webp"
                alt="Logo Tegbe de fundo"
                loading="lazy"
                className="absolute right-0 h-full object-cover z-0"
            />

            <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
                <symbol id="icon-x" viewBox="0 0 40 40">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.9999 23.5366L28.8382 32.3749C29.3072 32.8439 29.9433 33.1074 30.6066 33.1074C31.2698 33.1074 31.9059 32.8439 32.3749 32.3749C32.8439 31.9059 33.1074 31.2699 33.1074 30.6066C33.1074 29.9434 32.8439 29.3073 32.3749 28.8383L23.5332 19.9999L32.3732 11.1616C32.6054 10.9294 32.7895 10.6537 32.915 10.3504C33.0406 10.047 33.1052 9.72185 33.1051 9.39352C33.105 9.06518 33.0403 8.74008 32.9146 8.43677C32.7889 8.13346 32.6046 7.85788 32.3724 7.62577C32.1402 7.39366 31.8645 7.20956 31.5612 7.08399C31.2578 6.95841 30.9327 6.89382 30.6043 6.89389C30.276 6.89397 29.9509 6.95872 29.6476 7.08444C29.3443 7.21016 29.0687 7.39439 28.8366 7.62661L19.9999 16.4649L11.1616 7.62661C10.9311 7.38772 10.6553 7.19714 10.3504 7.06598C10.0454 6.93481 9.71739 6.86569 9.38544 6.86265C9.0535 6.85961 8.72427 6.92271 8.41697 7.04827C8.10967 7.17383 7.83046 7.35933 7.59562 7.59395C7.36077 7.82857 7.17501 8.10761 7.04916 8.41479C6.92332 8.72197 6.85991 9.05114 6.86263 9.38309C6.86536 9.71503 6.93417 10.0431 7.06505 10.3482C7.19592 10.6533 7.38625 10.9292 7.62491 11.1599L16.4666 19.9999L7.62658 28.8399C7.38791 29.0707 7.19759 29.3466 7.06671 29.6517C6.93584 29.9568 6.86703 30.2848 6.8643 30.6168C6.86157 30.9487 6.92498 31.2779 7.05083 31.5851C7.17668 31.8923 7.36244 32.1713 7.59728 32.4059C7.83212 32.6405 8.11134 32.826 8.41864 32.9516C8.72594 33.0772 9.05516 33.1403 9.38711 33.1372C9.71905 33.1342 10.0471 33.0651 10.352 32.9339C10.657 32.8027 10.9327 32.6122 11.1632 32.3733L19.9999 23.5366Z"
                        fill="#F2D95D"
                    />
                </symbol>
            </svg>

            <div className="flex flex-col items-center justify-center gap-10 z-10 max-w-screen-lg">
                <div className="flex flex-col px-5 text-[#F2D95D]">
                    <h1 className="text-3xl font-bold mb-10">A TegBe <span className="font-bold">NÃO</span> é para você se…</h1>

                    {/* Itens de restrição */}
                    <div className="bg-[#B11838] flex items-center gap-4 mb-6 px-8 py-4 rounded-[10px]">
                        <span className="mt-1 shrink-0">
                            <svg width="40" height="40">
                                <use href="#icon-x" />
                            </svg>
                        </span>
                        <p className="text-white text-base leading-relaxed">
                            Você quer apenas “postar no Instagram” e não se preocupa com vendas.
                        </p>
                    </div>

                    <div className="bg-[#B11838] flex items-center gap-4 mb-6 px-8 py-4 rounded-[10px]">
                        <span className="mt-1 shrink-0">
                            <svg width="40" height="40">
                                <use href="#icon-x" />
                            </svg>
                        </span>
                        <p className="text-white text-base leading-relaxed">
                            Você prefere seguir o “achismo” a aceitar dados e estratégias comprovadas.
                        </p>
                    </div>

                    <div className="bg-[#B11838] flex items-center gap-4 mb-6 px-8 py-4 rounded-[10px]">
                        <span className="mt-1 shrink-0">
                            <svg width="40" height="40">
                                <use href="#icon-x" />
                            </svg>
                        </span>
                        <p className="text-white text-base leading-relaxed">
                            Seu negócio não quer crescer, apenas se manter na zona de conforto.
                        </p>
                    </div>
                </div>

                {/* Conteúdo final + botão */}
                <div className="flex flex-col items-center justify-center gap-12 text-white z-10">
                    <p className="text-lg">
                        Se você se identificou, <span className="font-bold">não tem problema</span>. Mas se esse <span className="font-bold">NÃO</span> é o seu caso…
                    </p>

                    <h2 className="text-2xl font-bold leading-relaxed">
                        Bem-vindo ao Próximo Nível. <br />
                        É hora de fazer o digital trabalhar <span className="text-[#F2D95D]">PARA</span> você.
                    </h2>

                    <a
                        href="#section-2"
                        className="z-10 inline-flex items-center justify-center px-6 py-3 text-[#20254C] font-bold rounded-[10px] bg-gradient-to-r from-[#f2d95d] to-[#EEC35A] shadow-[0_4px_12px_rgb(242,217,93)] transition-all duration-300 ease-in-out transform whitespace-nowrap hover:text-white hover:from-[#20254C] hover:to-[#21245f] hover:shadow-[0_6px_16px_rgb(32,37,76)] hover:scale-105 hover:-translate-y-1"
                    >
                        IR PARA O PRÓXIMO NÍVEL
                    </a>

                </div>
            </div>
        </section>
    );
}