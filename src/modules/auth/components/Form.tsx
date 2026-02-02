type FormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

const Form = ({ handleSubmit, children }: FormProps) => {
  return (
    <form action="#" className="mt-8 space-y-4" method="POST" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
