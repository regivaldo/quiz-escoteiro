import { Link } from "react-router"

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-20">
            <div className="container mx-auto flex items-center justify-between p-4 sm:p-6">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold text-[#333]">
                    <span className="material-symbols-outlined text-3xl text-primary">spool</span>
                    <span>Quiz Escoteiro</span>
                </Link>
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link to="/login" className="rounded-lg px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-200/50 sm:text-base">Login</Link>
                    <Link to="/registro" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 sm:px-6 sm:text-base">Registrar</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
