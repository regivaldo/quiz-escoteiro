type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md overflow-hidden rounded-xl bg-surface-dark-alt shadow-lg ring-1 ring-black/20">
        {children}
      </div>
    </div>
  );
};

export default Page;
