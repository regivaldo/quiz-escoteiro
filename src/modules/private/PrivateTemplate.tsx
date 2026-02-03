import { Outlet, useLocation, useNavigate } from 'react-router';
import PrivateHeader from '@/modules/private/components/PrivateHeader';
import PrivateFooter from '@/modules/private/components/PrivateFooter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUserStore } from '@/stores/userStore';
import { useEffect } from 'react';

const PrivateTemplate = () => {
  const queryClient = new QueryClient();
  const { user, isLoading } = useUserStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Aguarda o carregamento dos dados do usuário antes de verificar
    if (isLoading) return;

    if (user) {
      // Check if profile is complete (ignoring group as it has a default)
      const isSetupComplete = user.numeral && user.city && user.state;
      const isSetupPage = location.pathname.includes('primeiro-acesso');

      if (!isSetupComplete && !isSetupPage) {
        navigate('/game/primeiro-acesso');
      }
    }
  }, [user, isLoading, location.pathname, navigate]);

  // Mostra loading enquanto carrega dados do usuário
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-text-muted">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen w-full flex-col bg-background font-display text-text">
        <PrivateHeader />
        <Outlet />
        <PrivateFooter />
      </div>
    </QueryClientProvider>
  );
};

export default PrivateTemplate;
