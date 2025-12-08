import { useState } from "react"
import { EyeIcon } from "@phosphor-icons/react"
import Submit from "../components/Submit"
import Hyperlink from "../components/Hyperlink"
import Subheader from "../components/Subheader"
import Form from "../components/Form"

interface FormErrors {
    nome: string;
    email: string;
    grupoEscoteiro: string;
    numeral: string;
    estado: string;
    senha: string;
    repetirSenha: string;
}

const RegisterPage = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [grupoEscoteiro, setGrupoEscoteiro] = useState("");
    const [numeral, setNumeral] = useState("");
    const [estado, setEstado] = useState("");
    const [senha, setSenha] = useState("");
    const [repetirSenha, setRepetirSenha] = useState("");

    const [errors, setErrors] = useState<FormErrors>({
        nome: "",
        email: "",
        grupoEscoteiro: "",
        numeral: "",
        estado: "",
        senha: "",
        repetirSenha: "",
    });

    const isValidEmail = (value: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const isValidNumeral = (value: string): boolean => {
        // Formato: 000-SP (3 números, hífen, 2 letras)
        const numeralRegex = /^\d{3}-[A-Za-z]{2}$/;
        return numeralRegex.test(value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const newErrors: FormErrors = {
            nome: "",
            email: "",
            grupoEscoteiro: "",
            numeral: "",
            estado: "",
            senha: "",
            repetirSenha: "",
        };

        // Validação de nome
        if (!nome.trim()) {
            newErrors.nome = "Preenchimento obrigatório";
        }

        // Validação de email
        if (!email.trim()) {
            newErrors.email = "Preenchimento obrigatório";
        } else if (!isValidEmail(email.trim())) {
            newErrors.email = "Preencha com um e-mail válido";
        }

        // Validação de grupo escoteiro
        if (!grupoEscoteiro.trim()) {
            newErrors.grupoEscoteiro = "Preenchimento obrigatório";
        }

        // Validação de numeral
        if (!numeral.trim()) {
            newErrors.numeral = "Preenchimento obrigatório";
        } else if (!isValidNumeral(numeral.trim())) {
            newErrors.numeral = "Formato inválido. Use: 000-SP";
        }

        // Validação de estado
        if (!estado || estado === "Selecione seu estado") {
            newErrors.estado = "Preenchimento obrigatório";
        }

        // Validação de senha
        if (!senha) {
            newErrors.senha = "Preenchimento obrigatório";
        }

        // Validação de repetir senha
        if (!repetirSenha) {
            newErrors.repetirSenha = "Preenchimento obrigatório";
        } else if (senha !== repetirSenha) {
            newErrors.repetirSenha = "As senhas não coincidem";
        }

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error !== "");
        if (hasErrors) {
            return;
        }

        console.log('Cadastrar usuário');
        // TODO: Implementar lógica de cadastro
    }

    const clearError = (field: keyof FormErrors) => {
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const inputBaseClass = "form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-md bg-surface-dark p-3 text-base font-normal leading-normal text-text-on-dark placeholder:text-text-on-light-muted focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20";
    const inputNormalClass = `${inputBaseClass} border border-border-dark`;
    const inputErrorClass = `${inputBaseClass} border-2 border-red-500`;

    const selectBaseClass = "form-select h-12 w-full flex-1 appearance-none rounded-md bg-surface-dark p-3 text-base font-normal leading-normal text-text-on-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
    const selectNormalClass = `${selectBaseClass} border border-border-dark`;
    const selectErrorClass = `${selectBaseClass} border-2 border-red-500`;

    return (
        <div className="w-full p-8">
            <Subheader title="Crie sua conta" subtitle="Sempre Alerta! Preencha seus dados para começar." />

            <Form handleSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <label className="flex flex-col">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            Nome
                        </p>
                        <input
                            className={errors.nome ? inputErrorClass : inputNormalClass}
                            placeholder="Digite seu nome completo"
                            type="text"
                            value={nome}
                            onChange={(e) => {
                                setNome(e.target.value);
                                clearError("nome");
                            }}
                        />
                        {errors.nome && (
                            <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
                        )}
                    </label>
                    <label className="flex flex-col">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            E-mail
                        </p>
                        <input
                            className={errors.email ? inputErrorClass : inputNormalClass}
                            placeholder="seuemail@exemplo.com"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                clearError("email");
                            }}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </label>
                </div>

                {/* Grupo Escoteiro e Numeral */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <label className="flex flex-col md:col-span-2">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            Grupo Escoteiro
                        </p>
                        <input
                            className={errors.grupoEscoteiro ? inputErrorClass : inputNormalClass}
                            placeholder="Ex: G.E. Lis de Ouro"
                            type="text"
                            value={grupoEscoteiro}
                            onChange={(e) => {
                                setGrupoEscoteiro(e.target.value);
                                clearError("grupoEscoteiro");
                            }}
                        />
                        {errors.grupoEscoteiro && (
                            <p className="text-red-500 text-sm mt-1">{errors.grupoEscoteiro}</p>
                        )}
                    </label>
                    <label className="flex flex-col">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            Numeral
                        </p>
                        <input
                            className={errors.numeral ? inputErrorClass : inputNormalClass}
                            placeholder="Ex: 123-SP"
                            type="text"
                            value={numeral}
                            onChange={(e) => {
                                setNumeral(e.target.value);
                                clearError("numeral");
                            }}
                        />
                        {errors.numeral && (
                            <p className="text-red-500 text-sm mt-1">{errors.numeral}</p>
                        )}
                    </label>
                </div>

                {/* Estado */}
                <div className="flex flex-col">
                    <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                        Estado
                    </p>
                    <select
                        className={errors.estado ? selectErrorClass : selectNormalClass}
                        value={estado}
                        onChange={(e) => {
                            setEstado(e.target.value);
                            clearError("estado");
                        }}
                    >
                        <option value="">Selecione seu estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                    {errors.estado && (
                        <p className="text-red-500 text-sm mt-1">{errors.estado}</p>
                    )}
                </div>

                {/* Senhas */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <label className="flex flex-col">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            Senha
                        </p>
                        <div className="relative flex w-full items-center">
                            <input
                                className={errors.senha ? `${inputErrorClass} pr-10` : `${inputNormalClass} pr-10`}
                                placeholder="••••••••"
                                type="password"
                                value={senha}
                                onChange={(e) => {
                                    setSenha(e.target.value);
                                    clearError("senha");
                                }}
                            />
                            <button
                                className="absolute right-3 text-gray-400 hover:text-gray-200"
                                type="button"
                            >
                                <EyeIcon size={24} />
                            </button>
                        </div>
                        {errors.senha && (
                            <p className="text-red-500 text-sm mt-1">{errors.senha}</p>
                        )}
                    </label>
                    <label className="flex flex-col">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            Repetir Senha
                        </p>
                        <div className="relative flex w-full items-center">
                            <input
                                className={errors.repetirSenha ? `${inputErrorClass} pr-10` : `${inputNormalClass} pr-10`}
                                placeholder="••••••••"
                                type="password"
                                value={repetirSenha}
                                onChange={(e) => {
                                    setRepetirSenha(e.target.value);
                                    clearError("repetirSenha");
                                }}
                            />
                            <button
                                className="absolute right-3 text-gray-400 hover:text-gray-200"
                                type="button"
                            >
                                <EyeIcon size={24} />
                            </button>
                        </div>
                        {errors.repetirSenha && (
                            <p className="text-red-500 text-sm mt-1">{errors.repetirSenha}</p>
                        )}
                    </label>
                </div>

                <Submit label="Cadastrar" />
            </Form>

            {/* Login Link */}
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                    Já tenho conta.{' '}
                </p>
                <Hyperlink label="Entrar" to="/auth" />
            </div>
        </div>
    )
}

export default RegisterPage
