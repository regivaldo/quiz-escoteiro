const GamePage = () => {
    const featuredCategories = [
        {
            icon: "military_tech",
            title: "Promessa Escoteira",
            description: "Os pilares do movimento escoteiro.",
            color: "highlight-green",
            href: "#"
        },
        {
            icon: "gavel",
            title: "Lei Escoteira",
            description: "Os dez artigos que guiam os escoteiros.",
            color: "teal",
            href: "#"
        },
        {
            icon: "cruelty_free",
            title: "Promessa do Lobinho",
            description: "O início da jornada no escotismo.",
            color: "highlight-green",
            href: "#"
        }
    ];

    const allCategories = [
        "Promessa do Lobinho",
        "Promessa Escoteira",
        "Promessa do Adulto",
        "Lei do Lobinho",
        "Lei Escoteira",
        "Nós e Amarras",
        "Sinalização",
        "História do Escotismo",
        "Orientações e Mapas",
        "Vida ao Ar Livre",
        "Primeiros Socorros"
    ];

    return (
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
                {/* Page Header */}
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-gray-100">
                        Seleção de Categorias
                    </h1>
                    <p className="text-lg text-gray-400">
                        Comece pelos desafios mais populares ou explore todas as categorias.
                    </p>
                </div>

                {/* Featured Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {featuredCategories.map((category, index) => (
                        <a
                            key={index}
                            className={`group col-span-1 flex flex-col justify-between p-6 bg-card-dark border-2 border-${category.color} rounded-xl shadow-lg hover:shadow-${category.color}/20 hover:-translate-y-1 transition-all duration-300`}
                            href={category.href}
                        >
                            <div>
                                <span className={`material-symbols-outlined text-4xl text-${category.color}`}>
                                    {category.icon}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-100 mt-3">
                                    {category.title}
                                </h3>
                                <p className="text-gray-300 mt-2">
                                    {category.description}
                                </p>
                            </div>
                            <div className={`mt-6 flex items-center gap-2 text-${category.color} font-bold`}>
                                <span>Começar Agora</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                                    arrow_forward
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* All Categories */}
                <div className="flex flex-col gap-6 mt-6">
                    <h2 className="text-2xl font-bold tracking-tight text-center text-gray-100">
                        Todas as Categorias
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allCategories.map((category, index) => (
                            <a
                                key={index}
                                className="flex items-center justify-between p-4 bg-card-dark border border-border-dark-game rounded-lg hover:bg-[#25281e] hover:border-highlight-green transition-colors"
                                href="#"
                            >
                                <span className="font-medium text-gray-300">{category}</span>
                                <span className="material-symbols-outlined text-gray-500">chevron_right</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default GamePage;
