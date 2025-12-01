import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header className="absolute top-0 left-0 right-0 z-20">
            <div className="container mx-auto flex items-center justify-between p-4 sm:p-6">
                <a className="flex items-center gap-2 text-xl font-bold text-[#333] dark:text-white" href="#">
                    <span className="material-symbols-outlined text-3xl text-primary">spool</span>
                    <span>Quiz Escoteiro</span>
                </a>
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 dark:text-white transition-colors hover:bg-gray-200/50 dark:hover:bg-white/10"
                        aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
                    >
                        <span className="material-symbols-outlined">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>

                    <a
                        className="rounded-lg px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-200/50 dark:text-gray-300 dark:hover:bg-gray-800/50 sm:text-base"
                        href="#"
                    >
                        Login
                    </a>
                    <a
                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 sm:px-6 sm:text-base"
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
