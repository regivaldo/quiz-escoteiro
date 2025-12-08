import { useState } from "react"
import { useNavigate } from "react-router"
import Submit from "../components/Submit";
import Hyperlink from "../components/Hyperlink";
import Subheader from "../components/Subheader";
import Form from "../components/Form";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });

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

        const newErrors = {
            email: emailError,
            password: !password.trim() ? "Preenchimento obrigatório" : "",
        };

        setErrors(newErrors);

        if (newErrors.email || newErrors.password) {
            return;
        }

        console.log('Entrar');
        navigate('/quiz');
    }

    const inputBaseClass = "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-on-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 bg-bg-dark h-12 placeholder:text-text-on-dark-muted px-4 text-base font-normal leading-normal transition-shadow duration-200";
    const inputNormalClass = `${inputBaseClass} border border-border-dark`;
    const inputErrorClass = `${inputBaseClass} border-2 border-red-500`;

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
                        className={errors.email ? inputErrorClass : inputNormalClass}
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail ou nome de usuário"
                        type="text"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label
                        className="text-text-on-dark text-sm font-medium leading-normal pb-2 block"
                        htmlFor="password"
                    >
                        Senha
                    </label>
                    <input
                        className={errors.password ? inputErrorClass : inputNormalClass}
                        id="password"
                        name="password"
                        placeholder="Digite sua senha"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
                        }}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
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
