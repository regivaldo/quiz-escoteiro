import { useParams } from "react-router"
import Submit from "../components/Submit";
import Hyperlink from "../components/Hyperlink";
import Subheader from "../components/Subheader";
import Form from "../components/Form";

const ChangePasswordPage = () => {
    let params = useParams();
    const email = params.email;
    const code = params.code;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('Alterar senha');
    }

    return (
        <div className="w-full p-8">
            <Subheader title="Alterar Senha" subtitle="Digite o código recebido e sua nova senha." />

            <Form handleSubmit={handleSubmit}>
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
                    <Submit label="Alterar Senha" />
                </div>
            </Form>

            <div className="mt-6 text-center">
                <p className="text-sm text-text-on-dark-muted">
                    Lembrou a senha?{' '}
                </p>
                <Hyperlink label="Voltar ao login" to="/auth" />
            </div>
        </div>
    )
}

export default ChangePasswordPage
