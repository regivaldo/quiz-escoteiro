import { useState } from "react"
import { useParams } from "react-router"
import Submit from "../components/Submit";
import Hyperlink from "../components/Hyperlink";
import Subheader from "../components/Subheader";
import Form from "../components/Form";

interface FormErrors {
    code: string;
    password: string;
    confirmPassword: string;
}

const ChangePasswordPage = () => {
    const params = useParams();
    const email = params.email;
    const initialCode = params.code?.toUpperCase() ?? '';

    const [code, setCode] = useState(initialCode);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState<FormErrors>({
        code: "",
        password: "",
        confirmPassword: "",
    });

    const isValidCode = (value: string): boolean => {
        // Aceita até 6 letras maiúsculas
        const codeRegex = /^[A-Z]{1,6}$/;
        return codeRegex.test(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const newErrors: FormErrors = {
            code: "",
            password: "",
            confirmPassword: "",
        };

        // Validação de código
        if (!code.trim()) {
            newErrors.code = "Preenchimento obrigatório";
        } else if (!isValidCode(code.trim())) {
            newErrors.code = "Digite até 6 letras";
        }

        // Validação de senha
        if (!password) {
            newErrors.password = "Preenchimento obrigatório";
        }

        // Validação de confirmar senha
        if (!confirmPassword) {
            newErrors.confirmPassword = "Preenchimento obrigatório";
        } else if (password !== confirmPassword) {
            newErrors.confirmPassword = "As senhas não coincidem";
        }

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error !== "");
        if (hasErrors) {
            return;
        }

        console.log('Alterar senha');
    }

    const clearError = (field: keyof FormErrors) => {
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const inputBaseClass = "form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-on-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 bg-bg-dark h-12 placeholder:text-text-on-dark-muted px-4 text-base font-normal leading-normal transition-shadow duration-200";
    const inputNormalClass = `${inputBaseClass} border border-border-dark`;
    const inputErrorClass = `${inputBaseClass} border-2 border-red-500`;

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
                        className={errors.code ? inputErrorClass : inputNormalClass}
                        id="code"
                        name="code"
                        placeholder="Digite o código recebido por e-mail"
                        type="text"
                        maxLength={6}
                        value={code}
                        onChange={(e) => {
                            setCode(e.target.value.toUpperCase());
                            clearError("code");
                        }}
                        style={{ textTransform: 'uppercase' }}
                    />
                    {errors.code && (
                        <p className="text-red-500 text-sm mt-1">{errors.code}</p>
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
                        placeholder="Digite sua nova senha"
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            clearError("password");
                        }}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                </div>

                <div>
                    <label
                        className="text-text-on-dark text-sm font-medium leading-normal pb-2 block"
                        htmlFor="confirmPassword"
                    >
                        Nova Senha
                    </label>
                    <input
                        className={errors.confirmPassword ? inputErrorClass : inputNormalClass}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirme sua nova senha"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                            clearError("confirmPassword");
                        }}
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                    )}
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
