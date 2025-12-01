import Footer from "../components/Footer";
import Header from "../components/Header"

const HomePage = () => {
    return (
        <>
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 pt-32 text-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-10"
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzCbFnHx2u7aJoZGPT1k5cW56bbgqUEG16PY9VOet--1pxbekeIoAGbrfTYS4ewxpWHCvE_2Jzvquf9PYbc8-3NSy6V8WT2EgV22-PZrrmZ8cvBi6B3mqqUuo1RcOAHor0rvhek6nryC-WShNttXsMpi4bj21tBwSvzLdlJitgBKRcXw8185XjjfYu-cK7UaPflErl9Cvnp0NrBHwViCzNEvZoEDMDxVcrbVounVgiwkRPiiCLY-Udai1d_zK8Jj3SkvbwVFGVS1T1')"
                        }}
                        aria-label="Forest background with tall trees and sunlight filtering through."
                    />

                    <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-12">
                        <div className="flex flex-col items-center gap-4">
                            <h1 className="text-5xl font-black leading-tight tracking-tighter text-[#333] dark:text-white sm:text-6xl md:text-7xl">
                                Quiz Escoteiro
                            </h1>
                            <h2 className="max-w-2xl text-lg font-normal leading-normal text-gray-600 dark:text-gray-300 sm:text-xl">
                                Teste seus conhecimentos e prepare-se para a aventura!
                            </h2>
                        </div>

                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 shadow-lg">
                            <span className="truncate">Começar o Desafio</span>
                        </button>
                    </div>
                </section>

                {/* About Section */}
                <section className="w-full bg-white dark:bg-gray-900 py-16 sm:py-24">
                    <div className="container mx-auto max-w-5xl px-4">
                        <div className="flex flex-col items-center text-center">
                            <h2 className="text-4xl font-bold tracking-tight text-secondary mb-4">
                                Sempre Alerta para o Conhecimento!
                            </h2>
                            <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-12">
                                Bem-vindo ao Quiz Escoteiro! Nossa missão é testar seus conhecimentos sobre o escotismo de uma forma divertida e educativa. Prepare sua mochila, afie sua mente e embarque nesta jornada de aprendizado e aventura.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                                {/* Purpose Card */}
                                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-bg-light dark:bg-bg-dark p-8 text-center">
                                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined !text-4xl">
                                            quiz
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                        O Propósito
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Criamos este quiz para que você possa aprender, relembrar e se divertir com os mais variados temas do Movimento Escoteiro, desde nós e amarras até a história do nosso fundador.
                                    </p>
                                </div>

                                {/* Audience Card */}
                                <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-bg-light dark:bg-bg-dark p-8 text-center">
                                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                        <span className="material-symbols-outlined !text-4xl">
                                            groups
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                        Para Quem?
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Para todos! Seja você Lobinho, Escoteiro, Sênior, Pioneiro, Chefe ou um entusiasta do escotismo, há um desafio esperando por você.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
