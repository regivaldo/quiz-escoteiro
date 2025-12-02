import { Link } from 'react-router'

const Footer = () => {
    return (
        <footer className="flex flex-col gap-6 px-5 py-6 text-center w-full z-10 bg-bg-light border-t border-gray-300">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <Link
                    className="text-gray-400 text-base font-normal leading-normal min-w-40 hover:text-primary"
                    to="/politica-de-privacidade"
                >
                    Política de Privacidade
                </Link>
                <Link
                    className="text-gray-400 text-base font-normal leading-normal min-w-40 hover:text-primary"
                    to="/sobre"
                >
                    Sobre
                </Link>
            </div>
            <p className="text-gray-500 text-sm font-normal leading-normal">
                © 2024 Quiz Escoteiro. Todos os direitos reservados.
            </p>
        </footer>
    )
}

export default Footer
