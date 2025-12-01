const HomePage = () => {
    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 pt-32 text-center text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCO-hM7nmmms9AD3nlB8tJWDRFoy3VB3Yw1KFRdv2gIMpB98DRi7cQMxB-Pb-lO17STWgC6eOeWJXh7Beovx8Ftj-9hrTI5bIKRRAfUbyMQIlOVq_yxX-J7DmPZuEECt_MUXViDkZwCu82MaS6zPDW3WUXJq1PWSQVw28asTuap70BRRvATiBoBSKGDO4RIpq71vxzrmPSfizjOJyejRJEpqeB5rvJSPVFBtpUu3BtLX5MAtOHwOH-CWNruAkHwPWW-u88p0WINqOQi')"
                    }}
                    aria-label="Scout campsite with tents under a starry night sky."
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-5xl font-black leading-tight tracking-tighter sm:text-6xl md:text-7xl">
                            Teste seus Conhecimentos Escoteiros
                        </h1>
                        <h2 className="max-w-2xl text-lg font-normal leading-normal text-gray-200 sm:text-xl">
                            Uma aventura de aprendizado para membros e entusiastas do Movimento Escoteiro.
                        </h2>
                    </div>

                    <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-secondary text-white text-lg font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 shadow-lg" href="#">
                        <span className="truncate">Começar</span>
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="w-full bg-background-dark py-16 sm:py-24">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-primary mb-4">
                            Sempre Alerta para o Conhecimento!
                        </h2>
                        <p className="max-w-3xl text-lg leading-relaxed text-gray-300 mb-12">
                            Bem-vindo ao Quiz Escoteiro! Nossa missão é testar seus conhecimentos sobre o escotismo de uma forma divertida e educativa. Prepare sua mochila, afie sua mente e embarque nesta jornada de aprendizado e aventura.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                            {/* Purpose Card */}
                            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                    <span className="material-symbols-outlined !text-4xl">
                                        quiz
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Nosso Propósito
                                </h3>
                                <p className="text-gray-400">
                                    Criamos este quiz para que você possa aprender, relembrar e se divertir com os mais variados temas do Movimento Escoteiro, desde nós e amarras até a história do nosso fundador.
                                </p>
                            </div>

                            {/* Audience Card */}
                            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8 text-center">
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined !text-4xl">
                                        groups
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Para Quem se Destina?
                                </h3>
                                <p className="text-gray-400">
                                    Para todos! Seja você lobo, escoteiro, sênior, pioneiro, chefe ou um entusiasta do escotismo, há um desafio esperando por você.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
