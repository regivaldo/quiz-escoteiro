const Footer = () => {
    return (
        <footer className="flex flex-col gap-6 px-5 py-6 text-center w-full z-10 bg-bg-light dark:bg-bg-dark border-t border-gray-300 dark:border-gray-800">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <a
                    className="text-gray-400 text-base font-normal leading-normal min-w-40 hover:text-primary"
                    href="#"
                >
                    Créditos
                </a>
                <a
                    className="text-gray-400 text-base font-normal leading-normal min-w-40 hover:text-primary"
                    href="#"
                >
                    Sobre
                </a>
            </div>
            <p className="text-gray-500 text-sm font-normal leading-normal">
                © 2024 Quiz Escoteiro. Todos os direitos reservados.
            </p>
        </footer>
    );
};

export default Footer;
