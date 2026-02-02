import Logo from '@/assets/logo.svg?react';
import Title from './Title';

const Header = () => {
  return (
    <header className="flex w-full items-center justify-start gap-4 whitespace-nowrap border-b border-solid border-gray-300 px-8 py-5">
      <div className="size-6 text-primary">
        <Logo className="w-full h-full object-contain" />
      </div>
      <Title>Quiz Escoteiro</Title>
    </header>
  );
};

export default Header;
