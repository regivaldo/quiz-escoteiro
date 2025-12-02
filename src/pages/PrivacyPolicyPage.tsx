import { Link } from 'react-router'

const PrivacyPolicyPage = () => {
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
                                        className="text-text-dark text-sm font-medium leading-normal"
                                        to="/sobre"
                                    >
                                        Sobre
                                    </Link>
                                </div>
                            </div>
                        </header>

                        {/* Main Content */}
                        <main className="flex-grow pt-10 pb-16 px-4">
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-[#444] text-3xl font-bold mb-6">
                                    Política Privacidade
                                </h2>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    A sua privacidade é importante para nós. É
                                    política do Quiz Escoteiro respeitar a sua
                                    privacidade em relação a qualquer informação
                                    sua que possamos coletar no site{' '}
                                    <a
                                        href="https://quiz-escoteiro.com.br"
                                        className="text-primary hover:underline"
                                    >
                                        Quiz Escoteiro
                                    </a>
                                    , e outros sites que possuímos e operamos.
                                </p>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Solicitamos informações pessoais apenas
                                    quando realmente precisamos delas para lhe
                                    fornecer um serviço. Fazemo-lo por meios
                                    justos e legais, com o seu conhecimento e
                                    consentimento. Também informamos por que
                                    estamos coletando e como será usado.
                                </p>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Apenas retemos as informações coletadas pelo
                                    tempo necessário para fornecer o serviço
                                    solicitado. Quando armazenamos dados,
                                    protegemos dentro de meios comercialmente
                                    aceitáveis ​​para evitar perdas e roubos, bem
                                    como acesso, divulgação, cópia, uso ou
                                    modificação não autorizados.
                                </p>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Não compartilhamos informações de
                                    identificação pessoal publicamente ou com
                                    terceiros, exceto quando exigido por lei.
                                </p>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    O nosso site pode ter links para sites
                                    externos que não são operados por nós.
                                    Esteja ciente de que não temos controle
                                    sobre o conteúdo e práticas desses sites e
                                    não podemos aceitar responsabilidade por
                                    suas respectivas{' '}
                                    <a
                                        href="https://politicaprivacidade.com/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-primary hover:underline"
                                    >
                                        políticas de privacidade
                                    </a>
                                    .
                                </p>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Você é livre para recusar a nossa
                                    solicitação de informações pessoais,
                                    entendendo que talvez não possamos fornecer
                                    alguns dos serviços desejados.
                                </p>

                                <p className="text-[#444] text-base leading-relaxed mb-6">
                                    O uso continuado de nosso site será
                                    considerado como aceitação de nossas
                                    práticas em torno de privacidade e
                                    informações pessoais. Se você tiver alguma
                                    dúvida sobre como lidamos com dados do
                                    usuário e informações pessoais, entre em
                                    contacto connosco.
                                </p>

                                <ul className="list-disc pl-6 mb-6 space-y-2">
                                    <li className="text-[#444] text-base leading-relaxed">
                                        O serviço Google AdSense que usamos para
                                        veicular publicidade usa um cookie
                                        DoubleClick para veicular anúncios mais
                                        relevantes em toda a Web e limitar o
                                        número de vezes que um determinado
                                        anúncio é exibido para você.
                                    </li>
                                    <li className="text-[#444] text-base leading-relaxed">
                                        Para mais informações sobre o Google
                                        AdSense, consulte as FAQs oficiais sobre
                                        privacidade do Google AdSense.
                                    </li>
                                    <li className="text-[#444] text-base leading-relaxed">
                                        Utilizamos anúncios para compensar os
                                        custos de funcionamento deste site e
                                        fornecer financiamento para futuros
                                        desenvolvimentos. Os cookies de
                                        publicidade comportamental usados ​​por
                                        este site foram projetados para garantir
                                        que você forneça os anúncios mais
                                        relevantes sempre que possível,
                                        rastreando anonimamente seus interesses
                                        e apresentando coisas semelhantes que
                                        possam ser do seu interesse.
                                    </li>
                                    <li className="text-[#444] text-base leading-relaxed">
                                        Vários parceiros anunciam em nosso nome
                                        e os cookies de rastreamento de
                                        afiliados simplesmente nos permitem ver
                                        se nossos clientes acessaram o site
                                        através de um dos sites de nossos
                                        parceiros, para que possamos creditá-los
                                        adequadamente e, quando aplicável,
                                        permitir que nossos parceiros afiliados
                                        ofereçam qualquer promoção que pode
                                        fornecê-lo para fazer uma compra.
                                    </li>
                                </ul>

                                <h3 className="text-[#444] text-2xl font-bold mb-4 mt-8">
                                    Compromisso do Usuário
                                </h3>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    O usuário se compromete a fazer uso adequado
                                    dos conteúdos e da informação que o Quiz
                                    Escoteiro oferece no site e com caráter
                                    enunciativo, mas não limitativo:
                                </p>

                                <ul className="list-disc pl-6 mb-6 space-y-2">
                                    <li className="text-[#444] text-base leading-relaxed">
                                        A) Não se envolver em atividades que
                                        sejam ilegais ou contrárias à boa fé a à
                                        ordem pública;
                                    </li>
                                    <li className="text-[#444] text-base leading-relaxed">
                                        B) Não difundir propaganda ou conteúdo de
                                        natureza racista, xenofóbica, jogos de
                                        sorte ou azar, qualquer tipo de
                                        pornografia ilegal, de apologia ao
                                        terrorismo ou contra os direitos humanos;
                                    </li>
                                    <li className="text-[#444] text-base leading-relaxed">
                                        C) Não causar danos aos sistemas físicos
                                        (hardwares) e lógicos (softwares) do Quiz
                                        Escoteiro, de seus fornecedores ou
                                        terceiros, para introduzir ou disseminar
                                        vírus informáticos ou quaisquer outros
                                        sistemas de hardware ou software que
                                        sejam capazes de causar danos
                                        anteriormente mencionados.
                                    </li>
                                </ul>

                                <h3 className="text-[#444] text-2xl font-bold mb-4 mt-8">
                                    Mais informações
                                </h3>

                                <p className="text-[#444] text-base leading-relaxed mb-4">
                                    Esperemos que esteja esclarecido e, como
                                    mencionado anteriormente, se houver algo que
                                    você não tem certeza se precisa ou não,
                                    geralmente é mais seguro deixar os cookies
                                    ativados, caso interaja com um dos recursos
                                    que você usa em nosso site.
                                </p>

                                <p className="text-[#444] text-base leading-relaxed">
                                    Esta política é efetiva a partir de 2
                                    December 2025 12:58
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicyPage
