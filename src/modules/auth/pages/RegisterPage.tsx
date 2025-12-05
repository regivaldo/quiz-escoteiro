import { EyeIcon } from "@phosphor-icons/react"
import Submit from "../components/Submit"
import Hyperlink from "../components/Hyperlink"
import Subheader from "../components/Subheader"
import Form from "../components/Form"

const RegisterPage = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('Enviar código de recuperação');
        // TODO: Implementar lógica de envio de código
    }

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
                            className="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-md border border-border-dark bg-surface-dark p-3 text-base font-normal leading-normal text-text-on-dark placeholder:text-text-on-light-muted focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20"
                            placeholder="Digite seu nome completo"
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            E-mail
                        </p>
                        <input
                            className="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-md border border-border-dark bg-surface-dark p-3 text-base font-normal leading-normal text-text-on-dark placeholder:text-text-on-light-muted focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20"
                            placeholder="seuemail@exemplo.com"
                            type="email"
                        />
                    </label>
                </div>

                {/* Grupo Escoteiro e Numeral */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <label className="flex flex-col md:col-span-2">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            Grupo Escoteiro
                        </p>
                        <input
                            className="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-md border border-border-dark bg-surface-dark p-3 text-base font-normal leading-normal text-text-on-dark placeholder:text-text-on-light-muted focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20"
                            placeholder="Ex: G.E. Lis de Ouro"
                            type="text"
                        />
                    </label>
                    <label className="flex flex-col">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            Numeral
                        </p>
                        <input
                            className="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-md border border-border-dark bg-surface-dark p-3 text-base font-normal leading-normal text-text-on-dark placeholder:text-text-on-light-muted focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20"
                            placeholder="Ex: 123/SP"
                            type="text"
                        />
                    </label>
                </div>

                {/* Estado */}
                <div className="flex flex-col">
                    <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                        Estado
                    </p>
                    <select className="form-select h-12 w-full flex-1 appearance-none rounded-md border border-border-dark bg-surface-dark p-3 text-base font-normal leading-normal text-text-on-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                        <option>Selecione seu estado</option>
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
                </div>

                {/* Senhas */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <label className="flex flex-col">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            Senha
                        </p>
                        <div className="relative flex w-full items-center">
                            <input
                                className="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-md border border-border-dark bg-surface-dark p-3 pr-10 text-base font-normal leading-normal text-text-on-dark placeholder:text-text-on-light-muted focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20"
                                placeholder="••••••••"
                                type="password"
                            />
                            <button
                                className="absolute right-3 text-gray-400 hover:text-gray-200"
                                type="button"
                            >
                                <EyeIcon size={24} />
                            </button>
                        </div>
                    </label>
                    <label className="flex flex-col">
                        <p className="pb-2 text-sm font-medium leading-normal text-text-on-dark">
                            Repetir Senha
                        </p>
                        <div className="relative flex w-full items-center">
                            <input
                                className="form-input h-12 w-full flex-1 resize-none overflow-hidden rounded-md border border-border-dark bg-surface-dark p-3 pr-10 text-base font-normal leading-normal text-text-on-dark placeholder:text-text-on-light-muted focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20"
                                placeholder="••••••••"
                                type="password"
                            />
                            <button
                                className="absolute right-3 text-gray-400 hover:text-gray-200"
                                type="button"
                            >
                                <EyeIcon size={24} />
                            </button>
                        </div>
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
