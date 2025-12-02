import Logo from '@/assets/logo.svg?react'

const PrivateHeader = () => {
    return (
        <header className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-300 px-4 sm:px-6 lg:px-8 py-3">
                {/* Logo and Title */}
                <div className="flex items-center gap-4 text-gray-900">
                    <div className="size-8">
                        <Logo className='w-full h-full object-contain' />
                    </div>
                    <h2 className="text-lg font-bold tracking-[-0.015em] text-gray-900">
                        Quiz Escoteiro
                    </h2>
                </div>

                {/* Navigation Links (hidden on mobile) */}
                <div className="hidden sm:flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <a
                            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                            href="#"
                        >
                            Início
                        </a>
                        <a
                            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                            href="#"
                        >
                            Meu Perfil
                        </a>
                        <a
                            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                            href="#"
                        >
                            Ranking
                        </a>
                    </div>
                </div>

                {/* User Actions */}
                <div className="flex items-center gap-4">
                    <button className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
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
