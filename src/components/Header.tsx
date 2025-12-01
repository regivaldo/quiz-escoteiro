const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-20">
            <div className="container mx-auto flex items-center justify-between p-4 sm:p-6">
                <a className="flex items-center gap-2 text-xl font-bold text-white" href="#">
                    <span className="material-symbols-outlined text-3xl text-primary">spool</span>
                    <span>Quiz Escoteiro</span>
                </a>
                <div className="flex items-center gap-2 sm:gap-4">
                    <a
                        className="rounded-lg px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:text-base"
                        href="#"
                    >
                        Login
                    </a>
                    <a
                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 py-2 text-sm font-bold text-bg-dark shadow-md transition-transform hover:scale-105 sm:px-6 sm:text-base"
                        href="#"
                    >
                        <span className="truncate">Registrar</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
