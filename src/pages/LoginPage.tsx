const LoginPage = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6">
            <div className="w-full max-w-md overflow-hidden rounded-xl bg-dark-card shadow-lg ring-1 ring-black/20">
                <div className="p-8 sm:p-10">
                    {/* Logo and Title */}
                    <div className="mb-6 flex flex-col items-center justify-center">
                        <span className="material-symbols-outlined text-5xl text-primary mb-2">
                            emoji_objects
                        </span>
                        <h1 className="font-display text-dark-text tracking-tight text-2xl font-bold text-center">
                            Quiz Escoteiro
                        </h1>
                    </div>

                    {/* Welcome Message */}
                    <div className="text-center">
                        <h1 className="text-dark-text tracking-tight text-[32px] font-bold leading-tight">
                            Bem-vindo de volta!
                        </h1>
                        <p className="text-dark-subtle-text text-base font-normal leading-normal pt-1 pb-6">
                            Faça login para continuar sua jornada.
                        </p>
                    </div>

                    {/* Login Form */}
                    <form action="#" className="space-y-4" method="POST">
                        {/* Email/Username Field */}
                        <div>
                            <label
                                className="text-dark-text text-sm font-medium leading-normal pb-2 block"
                                htmlFor="email"
                            >
                                E-mail ou Usuário
                            </label>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-dark-text focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-dark-border bg-background-dark h-12 placeholder:text-dark-subtle-text px-4 text-base font-normal leading-normal transition-shadow duration-200"
                                id="email"
                                name="email"
                                placeholder="Digite seu e-mail ou nome de usuário"
                                type="text"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                className="text-dark-text text-sm font-medium leading-normal pb-2 block"
                                htmlFor="password"
                            >
                                Senha
                            </label>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-dark-text focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-dark-border bg-background-dark h-12 placeholder:text-dark-subtle-text px-4 text-base font-normal leading-normal transition-shadow duration-200"
                                id="password"
                                name="password"
                                placeholder="Digite sua senha"
                                type="password"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:brightness-110 active:brightness-95 transition-all duration-200"
                                type="submit"
                            >
                                <span className="truncate">Entrar</span>
                            </button>
                        </div>
                    </form>

                    {/* Footer Links */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-dark-subtle-text">
                            Não tem uma conta?{' '}
                            <a
                                className="font-semibold text-accent-teal hover:underline focus:outline-none focus:ring-2 focus:ring-accent-teal/50 rounded"
                                href="/registro"
                            >
                                Crie uma agora
                            </a>
                        </p>
                        <a
                            className="mt-2 block text-sm font-semibold text-accent-teal hover:underline focus:outline-none focus:ring-2 focus:ring-accent-teal/50 rounded"
                            href="#"
                        >
                            Esqueceu a senha?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
