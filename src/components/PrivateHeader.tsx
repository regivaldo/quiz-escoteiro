import { useTheme } from '../contexts/ThemeContext'

const PrivateHeader = () => {
    const { isDarkMode, toggleTheme } = useTheme()

    return (
        <header className="sticky top-0 z-10 w-full bg-white/80 dark:bg-bg-dark/80 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-300 dark:border-border-dark-subtle px-4 sm:px-6 lg:px-8 py-3">
                {/* Logo and Title */}
                <div className="flex items-center gap-4 text-gray-900 dark:text-gray-100">
                    <div className="size-8 text-primary">
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
                    <h2 className="text-lg font-bold tracking-[-0.015em] text-gray-900 dark:text-gray-100">
                        Quiz Escoteiro
                    </h2>
                </div>

                {/* Navigation Links (hidden on mobile) */}
                <div className="hidden sm:flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <a
                            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                            href="#"
                        >
                            Início
                        </a>
                        <a
                            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                            href="#"
                        >
                            Meu Perfil
                        </a>
                        <a
                            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
                            href="#"
                        >
                            Ranking
                        </a>
                    </div>
                </div>

                {/* User Actions */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        aria-label={
                            isDarkMode
                                ? 'Ativar modo claro'
                                : 'Ativar modo escuro'
                        }
                    >
                        <span className="material-symbols-outlined">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>

                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                        <span className="material-symbols-outlined">
                            settings
                        </span>
                    </button>
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGG7can_AVpxn3amFahHz5JgrzKQ7PLZF6lbdcPwFnDt_kmr7Tz7A3T0ZRywtzGDTcH4kaTecG92t-wmFNI09x2RGtgHQFGiuq2LaeW9HGbuNLZeHXj7C45wtYRPADGMuGrHXc02rugNUZYpDLeKP5CyNU_LBNVvzV515ADWKDP7H_4VUS2WBRJCd0UmlWEN7l9BmHrsvJ4uxl3kM-WHtAOBEBEtkWutCPypdx4HBTc_hG19jN3mMswKE_MUpEI7VikPCx3v-IIly-")',
                        }}
                        aria-label="User avatar"
                    />
                </div>
            </div>
        </header>
    )
}

export default PrivateHeader
