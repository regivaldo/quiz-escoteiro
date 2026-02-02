type SubheaderProps = {
  title: string;
  subtitle: string;
};

const Subheader = ({ title, subtitle }: SubheaderProps) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-text-on-dark">{title}</h1>
      <p className="mt-2 text-base font-normal leading-normal text-gray-400">{subtitle}</p>
    </div>
  );
};

export default Subheader;
