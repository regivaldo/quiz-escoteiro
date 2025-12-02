import { Link } from 'react-router'

const AboutPage = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* Header */}
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#eff1e9] px-4 sm:px-10 py-3">
                            <div className="flex items-center gap-4 text-text-dark">
                                <div className="size-6 text-primary">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_6_319)">
                                            <path
                                                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                                                fill="currentColor"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_6_319">
                                                <rect
                                                    fill="white"
                                                    height="48"
                                                    width="48"
                                                ></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h2 className="text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
                                    Quiz Escoteiro
                                </h2>
                            </div>
                            <div className="flex flex-1 justify-end gap-8">
                                <div className="flex items-center gap-9">
                                    <Link
                                        className="text-text-dark text-sm font-medium leading-normal hover:text-primary"
                                        to="/"
                                    >
                                        Início
                                    </Link>
                                    <Link
                                        className="text-primary text-sm font-medium leading-normal"
                                        to="/sobre"
                                    >
                                        Sobre
                                    </Link>
                                </div>
                            </div>
                        </header>

                        {/* Main Content */}
                        <main className="flex-grow pt-10 pb-16">
                            <div className="flex flex-wrap justify-center gap-3 p-4">
                                <p className="text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] min-w-72 text-center">
                                    Sobre o Quiz Escoteiro
                                </p>
                            </div>

                            {/* Profile Section */}
                            <div className="flex p-4 mt-8">
                                <div className="flex w-full flex-col gap-4 items-center">
                                    <div className="flex gap-4 flex-col items-center">
                                        <div
                                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-4 border-primary/50"
                                            style={{
                                                backgroundImage:
                                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4ZRrXh6rUJHUq5T0crutpUgRgQn-bCsgszIOJCvq8p39_5ACyvjtGNNhb3YwyKdWgEYBm1eOpr6hxmliZhyKzmWIZ4STMNqAphDVDFXqRUtamLGVkPjbS12chnpH56rcNinNWEMCIkSc9w5jmvNp11o719eHGUlwIV-cyyKdAuAODYpWO_uX1yo2ioh5FihyFMJoSqlnTdRYaHVkdwJKixHiB2sYYl0pGBU9kGUpmOiLduY-9FUawOO2SeR5qHXaDRK1VRdiF5Rso')",
                                            }}
                                            aria-label="Foto de perfil de Regivaldo Silva"
                                        ></div>
                                        <div className="flex flex-col items-center justify-center">
                                            <p className="text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                                                Regivaldo Silva
                                            </p>
                                            <p className="text-[#47A8A5] text-base font-medium leading-normal text-center">
                                                Mestre Pioneiro e Diretor
                                                Administrativo
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-4">
                                <p className="text-text-dark text-base font-normal leading-relaxed pb-3 pt-1 px-4 text-center max-w-3xl mx-auto">
                                    O "Quiz Escoteiro" nasceu com o objetivo de
                                    tornar mais fácil e divertido para novos
                                    jovens do movimento escoteiro a aprenderem
                                    as leis e a promessa, conseguindo assim
                                    cumprir as etapas do Período Introdutório.
                                    Para os jovens com mais experiência, o Quiz
                                    Escoteiro ajudará a dominar diversos
                                    assuntos, como Promessa, Lei, Primeiro
                                    Socorros, História do Escotismo no Brasil,
                                    entre outros. O sistema foi pensado de modo
                                    a levar o Quiz Escoteiro gratuítamente para
                                    todos. Importante frizar que o Quis Escoteiro
                                    é basedo nos manuais e literaturas da União
                                    dos Escoteiros do Brasil.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <div className="flex px-4 py-3 justify-center mt-8">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-text-dark text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                                    <span className="truncate">
                                        Começar a Jogar!
                                    </span>
                                </button>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
