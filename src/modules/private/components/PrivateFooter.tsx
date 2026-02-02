import { Link } from 'react-router';

const PrivateFooter = () => {
  return (
    <footer className="bg-card-dark/50 mt-16">
      <div className="container mx-auto flex flex-col gap-6 px-5 py-10 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link className="text-gray-400 hover:text-gray-200 text-sm" to="/termos-de-uso">
            Termos de Uso
          </Link>
          <Link className="text-gray-400 hover:text-gray-200 text-sm" to="/politica-de-privacidade">
            Política de Privacidade
          </Link>
        </div>
        <p className="text-gray-400 text-sm">© 2024 Quiz Escoteiro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default PrivateFooter;
