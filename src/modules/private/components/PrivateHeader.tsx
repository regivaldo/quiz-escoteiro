import Logo from '@/assets/logo.svg?react'
import { Link, NavLink } from 'react-router'
import { useUserStore } from '@/stores/userStore'

const PrivateHeader = () => {
    const user = useUserStore((state) => state.user);
    const version = import.meta.env.VITE_APP_VERSION;

    return (
        <header className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
                <Link to="/quiz" className="flex items-center gap-4 text-gray-900">
                    <div className="size-8">
                        <Logo className='w-full h-full object-contain' />
                    </div>
                    <h2 className="text-lg font-bold tracking-[-0.015em] text-gray-900 flex items-center gap-2">
                        Quiz Escoteiro
                        <small className="text-xs text-gray-500">({version})</small>
                    </h2>
                </Link>

                <div className="hidden sm:flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <NavLink to="/quiz" end className={({ isActive }) => isActive ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'}>
                            Início
                        </NavLink>
                        <NavLink to="/quiz/ranking" end className={({ isActive }) => isActive ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'}>
                            Ranking
                        </NavLink>
                        <NavLink to="/quiz/perfil" end className={({ isActive }) => isActive ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'}>
                            Meu Perfil
                        </NavLink>
                    </div>
                </div>

                {/* User Actions */}
                <div className="flex items-center gap-4 ml-4">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        style={{ backgroundImage: `url('${user?.photoURL}')` }}
                        aria-label="User avatar"
                    />
                </div>
            </div>
        </header>
    )
}

export default PrivateHeader
