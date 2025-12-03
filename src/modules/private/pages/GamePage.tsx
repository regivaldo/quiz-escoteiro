import { ArrowRightIcon, CaretRightIcon, GavelIcon, MedalMilitaryIcon, PawPrintIcon } from "@phosphor-icons/react"
import { Link } from "react-router"

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

    const getCardClasses = (color: 'primary' | 'secondary') => {
        if (color === 'primary') {
            return 'bg-primary/10 border-primary'
        }
        return 'bg-secondary/10 border-secondary'
    }

    const getIconClasses = (color: 'primary' | 'secondary') => {
        if (color === 'primary') {
            return 'text-primary'
        }
        return 'text-secondary'
    }

    const getTextClasses = (color: 'primary' | 'secondary') => {
        if (color === 'primary') {
            return 'text-primary'
        }
        return 'text-secondary'
    }

    return (
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
                {/* Page Header */}
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#171810]">
                        Seleção de Categorias
                    </h1>
                    <p className="text-lg text-gray-500">
                        Comece pelos desafios mais populares ou explore todas as
                        categorias.
                    </p>
                </div>

                {/* Featured Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {featuredCategories.map((category, index) => (
                        <Link
                            key={index}
                            className={`group col-span-1 flex flex-col justify-between p-6 border-2 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${getCardClasses(category.color)}`}
                            to={`/quiz/${category.slug}`}
                        >
                            <div>
                                <span className={`material-symbols-outlined text-4xl ${getIconClasses(category.color)}`}>
                                    {category.icon}
                                </span>
                                <h3 className="text-2xl font-bold text-[#171810] mt-3">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    {category.description}
                                </p>
                            </div>
                            <div className={`mt-6 flex items-center gap-2 font-bold ${getTextClasses(category.color)}`}>
                                <span>Começar Agora</span>
                                <ArrowRightIcon size={24} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-6 mt-6">
                    <h2 className="text-2xl font-bold tracking-tight text-center text-[#171810]">
                        Todas as Categorias
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allCategories.map((category, index) => (
                            <Link
                                key={index}
                                className="flex items-center justify-between p-4 bg-white border border-gray-200/80 rounded-lg hover:bg-gray-50 transition-colors"
                                to={`/quiz/${category.slug}`}
                            >
                                <span className="font-medium">
                                    {category.title}
                                </span>
                                <CaretRightIcon size={16} className="text-gray-400" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GamePage
