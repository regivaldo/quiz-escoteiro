import { CaretDownIcon } from "@phosphor-icons/react"

const ContactPage = () => {
    return (
        <>
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                <section className="max-w-4xl mx-auto flex flex-col gap-10">
                    <div className="flex flex-wrap justify-between gap-3 pt-4">
                        <div className="flex min-w-72 flex-col gap-3">
                            <p className="text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
                                Contato e Perguntas Frequentes
                            </p>
                            <p className="text-subtext-light text-base font-normal leading-normal">
                                Tem alguma dúvida ou sugestão? Fale
                                conosco!
                            </p>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <section className="flex flex-col gap-6">
                        <h2 className="text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-0 pb-3 pt-5 border-b border-border">
                            Fale Conosco
                        </h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                            <label className="flex flex-col">
                                <p className="text-text-dark text-base font-medium leading-normal pb-2">
                                    Nome
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-muted focus:outline-0 focus:ring-0 border border-border bg-background focus:border-primary h-14 p-[15px] text-base font-normal leading-normal"
                                    disabled
                                    value="Nome do Usuário"
                                />
                            </label>
                            <label className="flex flex-col">
                                <p className="text-text-dark text-base font-medium leading-normal pb-2">
                                    E-mail
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-muted focus:outline-0 focus:ring-0 border border-border bg-background focus:border-primary h-14 p-[15px] text-base font-normal leading-normal"
                                    disabled
                                    value="emaildousuario@email.com"
                                />
                            </label>
                            <label className="flex flex-col col-span-1 md:col-span-2">
                                <p className="text-text-dark text-base font-medium leading-normal pb-2">
                                    Mensagem
                                </p>
                                <textarea
                                    className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-text-dark focus:outline-0 focus:ring-0 border border-border bg-background focus:border-primary min-h-[120px] p-[15px] text-base font-normal leading-normal placeholder:text-text-muted"
                                    placeholder="Digite sua mensagem aqui..."
                                ></textarea>
                            </label>
                            <div className="col-span-1 md:col-span-2 flex justify-end">
                                <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                                    <span className="truncate">
                                        Enviar Mensagem
                                    </span>
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* FAQ Section */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-0 pb-3 pt-5 border-b border-border">
                            Perguntas Frequentes
                        </h2>
                        <div className="flex flex-col divide-y divide-border">
                            <details className="group py-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-text-dark">
                                    <span>Quem pode jogar?</span>
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                        <CaretDownIcon size={16} weight="bold" className="text-secondary" />
                                    </span>
                                </summary>
                                <p className="mt-4 text-text-muted">
                                    Qualquer pessoa no movimento
                                    escoteiro que queira ampliar seus
                                    conhecimentos e aprender mais.
                                </p>
                            </details>
                            <details className="group py-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-text-dark">
                                    <span>
                                        O Quiz Escoteiro é da União dos
                                        Escoteiros do Brasil?
                                    </span>
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                        <CaretDownIcon size={16} weight="bold" className="text-secondary" />
                                    </span>
                                </summary>
                                <p className="mt-4 text-text-muted">
                                    Não. Esse site é desenvolvido por
                                    escotista do Grupo Escoteiro
                                    Marechal Rondon - 41-SP e não tem
                                    ligação direta com a UEB.
                                </p>
                            </details>
                            <details className="group py-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-text-dark">
                                    <span>
                                        O material usado é da União dos
                                        Escoteiros do Brasil?
                                    </span>
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                        <CaretDownIcon size={16} weight="bold" className="text-secondary" />
                                    </span>
                                </summary>
                                <p className="mt-4 text-text-muted">
                                    Sim. Tudo foi elaborado pensado nos
                                    escoteiros que fazem parte da UEB.
                                </p>
                            </details>
                            <details className="group py-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-text-dark">
                                    <span>
                                        Meu grupo escoteiro não é parte
                                        da UEB, posso usar o quiz?
                                    </span>
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                        <CaretDownIcon size={16} weight="bold" className="text-secondary" />
                                    </span>
                                </summary>
                                <p className="mt-4 text-text-muted">
                                    Sim. Porém, tenha em mente que podem
                                    haver diferenças importantes quanto
                                    ao programa educativo.
                                </p>
                            </details>
                            <details className="group py-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-text-dark">
                                    <span>
                                        Existe algum custo para usar o
                                        quiz?
                                    </span>
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                        <CaretDownIcon size={16} weight="bold" className="text-secondary" />
                                    </span>
                                </summary>
                                <p className="mt-4 text-text-muted">
                                    Não. O quiz é totalmente gratuíto.
                                </p>
                            </details>
                            <details className="group py-4">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-text-dark">
                                    <span>
                                        Posso jogar pelo telefone?
                                    </span>
                                    <span className="transition-transform duration-300 group-open:rotate-180">
                                        <CaretDownIcon size={16} weight="bold" className="text-secondary" />
                                    </span>
                                </summary>
                                <p className="mt-4 text-text-muted">
                                    Sim. O quiz foi elaborado de modo a
                                    funcionar bem tanto em computadores
                                    quanto em telefones celulares.
                                </p>
                            </details>
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default ContactPage
