import { GavelIcon, MedalMilitaryIcon, PawPrintIcon } from "@phosphor-icons/react"
import CategorySmall from "../components/CategorySmall"
import CategoryCard from "../components/CategoryCard"

const GamePage = () => {
    const featuredCategories = [
        {
            icon: <MedalMilitaryIcon size={32} />,
            title: 'Promessa Escoteira',
            description: 'Os pilares do movimento escoteiro.',
            color: 'primary' as const,
            slug: 'promessa-escoteira',
        },
        {
            icon: <GavelIcon size={32} />,
            title: 'Lei Escoteira',
            description: 'Os dez artigos que guiam os escoteiros.',
            color: 'secondary' as const,
            slug: 'lei-escoteira',
        },
        {
            icon: <PawPrintIcon size={32} />,
            title: 'Promessa do Lobinho',
            description: 'O início da jornada no escotismo.',
            color: 'primary' as const,
            slug: 'promessa-do-lobinho',
        },
    ]

    const allCategories = [
        { title: 'Promessa do Lobinho', slug: 'promessa-do-lobinho' },
        { title: 'Promessa Escoteira', slug: 'promessa-escoteira' },
        { title: 'Promessa do Adulto', slug: 'promessa-do-adulto' },
        { title: 'Lei do Lobinho', slug: 'lei-do-lobinho' },
        { title: 'Lei Escoteira', slug: 'lei-escoteira' },
        { title: 'Nós e Amarras', slug: 'nos-e-amarras' },
        { title: 'Sinalização', slug: 'sinalizacao' },
        { title: 'História do Escotismo', slug: 'historia-do-escotismo' },
        { title: 'Orientações e Mapas', slug: 'orientacoes-e-mapas' },
        { title: 'Vida ao Ar Livre', slug: 'vida-ao-ar-livre' },
        { title: 'Primeiros Socorros', slug: 'primeiros-socorros' },
    ]

    return (
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#171810]">
                        Seleção de Categorias
                    </h1>
                    <p className="text-lg text-gray-500">
                        Comece pelos desafios mais populares ou explore todas as
                        categorias.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {featuredCategories.map((category, index) => (
                        <CategoryCard key={index} category={category} />
                    ))}
                </div>
                <div className="flex flex-col gap-6 mt-6">
                    <h2 className="text-2xl font-bold tracking-tight text-center text-[#171810]">
                        Todas as Categorias
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allCategories.map((category, index) => (
                            <CategorySmall key={index} category={category} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GamePage
