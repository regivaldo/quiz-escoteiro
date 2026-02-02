type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <h1 className="font-display text-text-on-dark tracking-tight text-2xl font-bold text-center">{children}</h1>;
};

export default Title;
