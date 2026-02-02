import { Outlet } from 'react-router';
import Page from './components/Page';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AuthTemplate = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-bg-light font-display text-text-on-light min-h-screen">
        <Page>
          <Header />
          <Outlet />
        </Page>
      </main>
    </QueryClientProvider>
  );
};

export default AuthTemplate;
