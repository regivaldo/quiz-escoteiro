import { Link } from 'react-router'

const TermsOfUsePage = () => {
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
                                </div>
                            </div>
                        </header>

                        {/* Main Content */}
                        <main className="flex-grow pt-10 pb-16 px-4">
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-[#444] text-3xl font-bold mb-6">
                                    Termos de Uso
                                </h2>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Bem-vindo ao Quiz Escoteiro. Ao acessar e
                                    usar este site, você concorda em cumprir e
                                    estar vinculado aos seguintes termos e
                                    condições de uso.
                                </p>

                                <h3 className="text-[#444] text-2xl font-bold mb-4 mt-8">
                                    1. Aceitação dos Termos
                                </h3>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Ao acessar e usar o Quiz Escoteiro, você
                                    aceita e concorda em ficar vinculado aos
                                    termos e condições deste acordo. Se você não
                                    concordar com qualquer parte destes termos e
                                    condições, não use nosso site.
                                </p>

                                <h3 className="text-[#444] text-2xl font-bold mb-4 mt-8">
                                    2. Uso do Serviço
                                </h3>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    O Quiz Escoteiro é uma plataforma
                                    educacional destinada a testar e aprimorar
                                    conhecimentos sobre o movimento escoteiro.
                                    Você concorda em usar o serviço apenas para
                                    fins legais e de acordo com estes Termos de
                                    Uso.
                                </p>

                                <h3 className="text-[#444] text-2xl font-bold mb-4 mt-8">
                                    3. Conta de Usuário
                                </h3>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Para acessar certas funcionalidades do Quiz
                                    Escoteiro, você pode precisar criar uma
                                    conta. Você é responsável por manter a
                                    confidencialidade de suas credenciais de
                                    login e por todas as atividades que ocorrem
                                    em sua conta.
                                </p>

                                <h3 className="text-[#444] text-2xl font-bold mb-4 mt-8">
                                    4. Conteúdo do Usuário
                                </h3>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Você mantém todos os direitos sobre qualquer
                                    conteúdo que enviar, postar ou exibir no
                                    Quiz Escoteiro. Ao enviar conteúdo, você nos
                                    concede uma licença mundial, não exclusiva e
                                    isenta de royalties para usar, reproduzir e
                                    exibir esse conteúdo.
                                </p>

                                <h3 className="text-[#444] text-2xl font-bold mb-4 mt-8">
                                    5. Propriedade Intelectual
                                </h3>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Todo o conteúdo incluído no Quiz Escoteiro,
                                    como textos, gráficos, logos, imagens e
                                    software, é propriedade do Quiz Escoteiro ou
                                    de seus fornecedores de conteúdo e é
                                    protegido por leis de direitos autorais.
                                </p>

                                <h3 className="text-[#444] text-2xl font-bold mb-4 mt-8">
                                    6. Limitação de Responsabilidade
                                </h3>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    O Quiz Escoteiro não será responsável por
                                    quaisquer danos diretos, indiretos,
                                    incidentais, consequenciais ou punitivos
                                    decorrentes do seu acesso ou uso do serviço.
                                </p>

                                <h3 className="text-[#444] text-2xl font-bold mb-4 mt-8">
                                    7. Modificações dos Termos
                                </h3>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Reservamo-nos o direito de modificar estes
                                    termos a qualquer momento. Quaisquer
                                    alterações entrarão em vigor imediatamente
                                    após a publicação no site. O uso continuado
                                    do serviço após tais modificações constitui
                                    sua aceitação dos novos termos.
                                </p>

                                <h3 className="text-[#444] text-2xl font-bold mb-4 mt-8">
                                    8. Contato
                                </h3>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Se você tiver alguma dúvida sobre estes
                                    Termos de Uso, entre em contato conosco
                                    através do nosso site.
                                </p>

                                <p className="text-[#444] text-base leading-relaxed mt-8">
                                    Última atualização: 2 de dezembro de 2025
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfUsePage
