import LinkItem from './LinkItem';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 px-5 py-6 text-center w-full z-10 bg-bg-light border-t border-gray-300">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <LinkItem to="/termos-de-uso" label="Termos de Uso" />
        <LinkItem to="/politica-de-privacidade" label="Política de Privacidade" />
        <LinkItem to="/sobre" label="Sobre" />
        <LinkItem to="/contato" label="Contato" />
      </div>
      <p className="text-gray-500 text-sm font-normal leading-normal">
        © 2024 Quiz Escoteiro. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
