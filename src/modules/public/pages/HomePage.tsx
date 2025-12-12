import backgroundImage from '@/assets/background.jpg'
import { QuestionMarkIcon, UsersThreeIcon } from '@phosphor-icons/react'
import { useNavigate } from 'react-router'
import CardHome from '../components/CardHome'
import { useUserStore } from '@/stores/userStore'

const HomePage = () => {
    const { user } = useUserStore();
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        if (user) {
            navigate('/quiz');
        } else {
            navigate('/login');
        }
    }

    return (
        <main className="flex-grow">
            <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 pt-32 text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    aria-label="Forest background with tall trees and sunlight filtering through."
                />

                <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-12">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-5xl font-black leading-tight tracking-tighter text-[#333] sm:text-6xl md:text-7xl">
                            Quiz Escoteiro
                        </h1>
                        <h2 className="max-w-2xl text-lg font-normal leading-normal text-gray-600 sm:text-xl">
                            Teste seus conhecimentos e prepare-se para a
                            aventura!
                        </h2>
                    </div>

                    <button onClick={handleStartQuiz} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105 shadow-lg">
                        <span className="truncate">Começar o Desafio</span>
                    </button>
                </div>
            </section>

            <section className="w-full bg-white py-16 sm:py-24">
                <div className="container mx-auto max-w-5xl px-4">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-secondary mb-4">
                            Sempre Alerta para o Conhecimento!
                        </h2>
                        <p className="max-w-3xl text-lg leading-relaxed text-gray-600 mb-12">
                            Bem-vindo ao Quiz Escoteiro! Nossa missão é
                            testar seus conhecimentos sobre o escotismo de
                            uma forma divertida e educativa. Prepare sua
                            mochila, afie sua mente e embarque nesta jornada
                            de aprendizado e aventura.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                            <CardHome
                                title="O Propósito"
                                description="Criamos este quiz para que você possa aprender, relembrar e se divertir com os mais variados temas do Movimento Escoteiro, desde nós e amarras até a história do nosso fundador."
                                icon={<QuestionMarkIcon size={32} />}
                            />
                            <CardHome
                                title="Para Quem?"
                                description="Para todos! Seja você Lobinho, Escoteiro, Sênior, Pioneiro, Chefe ou um entusiasta do escotismo, há um desafio esperando por você."
                                icon={<UsersThreeIcon size={32} />}
                                type="secondary"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePage
