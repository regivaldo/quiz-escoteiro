import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <div
            className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background group/design-root overflow-hidden"
            style={{ fontFamily: "Lexend, 'Noto Sans', sans-serif" }}
        >
            <div className="absolute inset-0 z-0">
                <span className="material-symbols-outlined text-9xl text-gray-200/50 absolute top-[10%] left-[15%] -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] opacity-50">
                    explore
                </span>
                <span className="material-symbols-outlined text-8xl text-gray-200/50 absolute bottom-[15%] right-[20%] translate-x-1/2 translate-y-1/2 rotate-[20deg] opacity-50">
                    forest
                </span>
                <span className="material-symbols-outlined text-7xl text-gray-200/50 absolute top-[20%] right-[10%] translate-x-1/2 -translate-y-1/2 rotate-[10deg] opacity-50">
                    flag
                </span>
                <span className="material-symbols-outlined text-6xl text-gray-200/50 absolute bottom-[25%] left-[5%] -translate-x-1/2 translate-y-1/2 rotate-[-25deg] opacity-50">
                    terrain
                </span>
            </div>
            <div className="relative z-10 flex h-full grow flex-col items-center justify-center px-4 py-10">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex max-w-lg flex-col items-center gap-4">
                        <h1 className="text-7xl font-bold tracking-tighter text-primary">
                            404
                        </h1>
                        <p className="text-2xl font-bold tracking-tight text-text-dark">
                            Página não encontrada
                        </p>
                        <p className="max-w-md text-base text-text-muted">
                            Oops! Parece que você se perdeu na trilha. A página
                            que você está procurando não existe ou foi movida.
                        </p>
                    </div>
                    <Link
                        className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide transition-colors hover:bg-secondary"
                        to="/"
                    >
                        <span>Voltar ao Acampamento</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
