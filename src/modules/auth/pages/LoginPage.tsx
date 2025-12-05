import { useNavigate } from "react-router"
import Submit from "../components/Submit";
import Hyperlink from "../components/Hyperlink";
import Subheader from "../components/Subheader";
import Form from "../components/Form";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('Entrar');
        navigate('/quiz');
    }

    return (
        <div className="w-full p-8">
            <Subheader title="Bem-vindo de volta!" subtitle="Faça login para continuar sua jornada." />

            <Form handleSubmit={handleSubmit}>
                <div>
                    <label
                        className="text-text-on-dark text-sm font-medium leading-normal pb-2 block"
                        htmlFor="email"
                    >
                        E-mail ou Usuário
                    </label>
                    <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-on-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-bg-dark h-12 placeholder:text-text-on-dark-muted px-4 text-base font-normal leading-normal transition-shadow duration-200"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail ou nome de usuário"
                        type="text"
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
                        placeholder="Digite sua senha"
                        type="password"
                    />
                </div>

                <div className="pt-4">
                    <Submit label="Entrar" />
                </div>
            </Form>

            <div className="mt-6 text-center">
                <p className="text-sm text-text-on-dark-muted">
                    Não tem uma conta?{' '}
                    <Hyperlink label="Crie uma agora" to="/auth/registro" />
                </p>
                <Hyperlink label="Esqueceu a senha?" to="/auth/esqueci-senha" />
            </div>
        </div>
    )
}

export default LoginPage
