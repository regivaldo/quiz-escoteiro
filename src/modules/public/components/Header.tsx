import { Link } from "react-router"
import Logo from "@/assets/logo.svg?react"

const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 z-20">
            <div className="container mx-auto flex items-center justify-between p-4 sm:p-6">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold text-[#333]">
                    <Logo className='w-6 h-6 object-contain' />
                    <span>Quiz Escoteiro</span>
                </Link>
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link to="/auth" className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:brightness-90 sm:text-base">Login</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
