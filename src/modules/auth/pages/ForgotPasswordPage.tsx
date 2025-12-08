import { useState } from "react"
import Submit from "../components/Submit"
import Hyperlink from "../components/Hyperlink"
import Subheader from "../components/Subheader"
import Form from "../components/Form"

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const isValidEmail = (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let emailError = "";
        if (!email.trim()) {
            emailError = "Preenchimento obrigatório";
        } else if (!isValidEmail(email.trim())) {
            emailError = "Preencha com um e-mail válido";
        }

        setError(emailError);

        if (emailError) {
            return;
        }

        console.log('Enviar código de recuperação');
        // TODO: Implementar lógica de envio de código
    }

    const inputBaseClass = "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-on-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 bg-bg-dark h-12 placeholder:text-text-on-dark-muted px-4 text-base font-normal leading-normal transition-shadow duration-200";
    const inputNormalClass = `${inputBaseClass} border border-border-dark`;
    const inputErrorClass = `${inputBaseClass} border-2 border-red-500`;

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
                        className={error ? inputErrorClass : inputNormalClass}
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError("");
                        }}
                    />
                    {error && (
                        <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
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
