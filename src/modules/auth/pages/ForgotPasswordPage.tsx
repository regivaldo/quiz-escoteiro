import Submit from "../components/Submit"
import Hyperlink from "../components/Hyperlink"
import Subheader from "../components/Subheader"
import Form from "../components/Form"

const ForgotPasswordPage = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('Enviar código de recuperação');
        // TODO: Implementar lógica de envio de código
    }

    return (
        <div className="w-full p-8">
            <Subheader title="Esqueceu a senha?" subtitle="Digite seu e-mail para receber o código de recuperação." />

            <Form handleSubmit={handleSubmit}>
                <div>
                    <label
                        className="text-text-on-dark text-sm font-medium leading-normal pb-2 block"
                        htmlFor="email"
                    >
                        E-mail
                    </label>
                    <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-on-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-dark bg-bg-dark h-12 placeholder:text-text-on-dark-muted px-4 text-base font-normal leading-normal transition-shadow duration-200"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        type="email"
                        required
                    />
                </div>

                <div className="pt-4">
                    <Submit label="Enviar" />
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

export default ForgotPasswordPage
