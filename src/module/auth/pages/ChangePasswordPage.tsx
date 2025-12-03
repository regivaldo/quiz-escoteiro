import Logo from "@/assets/logo.svg?react"
import { Link, useParams } from "react-router"

const ChangePasswordPage = () => {
    let params = useParams();
    const email = params.email;
    const code = params.code;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('Alterar senha');
        // TODO: Implementar lógica de alteração de senha
    }

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6">
            <div className="w-full max-w-md overflow-hidden rounded-xl bg-surface-dark-alt shadow-lg ring-1 ring-black/20">
                <div className="p-8 sm:p-10">
                    <div className="mb-6 flex flex-col items-center justify-center">
                        <Logo className='w-10 h-10 object-contain' />
                        <h1 className="font-display text-text-on-dark tracking-tight text-2xl font-bold text-center">
                            Quiz Escoteiro
                        </h1>
                    </div>

                    <div className="text-center">
                        <h1 className="text-text-on-dark tracking-tight text-[32px] font-bold leading-tight">
                            Alterar Senha
                        </h1>
                        <p className="text-text-on-dark-muted text-base font-normal leading-normal pt-1 pb-6">
                            Digite o código recebido e sua nova senha.
                        </p>
                    </div>

                    <form action="#" className="space-y-4" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label
                                className="text-text-on-dark text-sm font-medium leading-normal pb-2 block"
                                htmlFor="email"
                            >
                                E-mail
                            </label>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-on-dark-muted focus:outline-0 border border-border-dark bg-bg-dark/50 h-12 px-4 text-base font-normal leading-normal cursor-not-allowed opacity-60"
                                id="email"
                                name="email"
                                placeholder="seu-email@exemplo.com"
                                type="email"
                                disabled
                                defaultValue={email ?? ''}
                            />
                        </div>

                        <div>
                            <label
                                className="text-text-on-dark text-sm font-medium leading-normal pb-2 block"
                                htmlFor="code"
                            >
                                Código de alteração
                            </label>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-on-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-bg-dark h-12 placeholder:text-text-on-dark-muted px-4 text-base font-normal leading-normal transition-shadow duration-200"
                                id="code"
                                name="code"
                                placeholder="Digite o código recebido por e-mail"
                                type="text"
                                required
                                maxLength={6}
                                defaultValue={code?.toUpperCase() ?? ''}
                            />
                        </div>

                        <div>
                            <label
                                className="text-text-on-dark text-sm font-medium leading-normal pb-2 block"
                                htmlFor="password"
                            >
                                Senha
                            </label>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-on-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-bg-dark h-12 placeholder:text-text-on-dark-muted px-4 text-base font-normal leading-normal transition-shadow duration-200"
                                id="password"
                                name="password"
                                placeholder="Digite sua nova senha"
                                type="password"
                                required
                            />
                        </div>

                        <div>
                            <label
                                className="text-text-on-dark text-sm font-medium leading-normal pb-2 block"
                                htmlFor="confirmPassword"
                            >
                                Nova Senha
                            </label>
                            <input
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-on-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-bg-dark h-12 placeholder:text-text-on-dark-muted px-4 text-base font-normal leading-normal transition-shadow duration-200"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirme sua nova senha"
                                type="password"
                                required
                            />
                        </div>

                        <div className="pt-4">
                            <button
                                className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-bg-dark text-base font-bold leading-normal tracking-[0.015em] hover:brightness-110 active:brightness-95 transition-all duration-200"
                                type="submit"
                            >
                                <span className="truncate">Alterar Senha</span>
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-text-on-dark-muted">
                            Lembrou a senha?{' '}
                            <Link
                                className="font-semibold text-secondary hover:underline focus:outline-none focus:ring-2 focus:ring-secondary/50 rounded"
                                to="/auth"
                            >
                                Voltar ao login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordPage
