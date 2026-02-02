import { Outlet, useLocation, useNavigate } from 'react-router'
import PrivateHeader from '@/modules/private/components/PrivateHeader'
import PrivateFooter from '@/modules/private/components/PrivateFooter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useUserStore } from '@/stores/userStore'
import { useEffect } from 'react'

const PrivateTemplate = () => {
    const queryClient = new QueryClient();
    const { user } = useUserStore();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            // Check if profile is complete (ignoring group as it has a default)
            const isSetupComplete = user.numeral && user.city && user.state;
            const isSetupPage = location.pathname.includes('primeiro-acesso');

            if (!isSetupComplete && !isSetupPage) {
                navigate('/game/primeiro-acesso');
            }
        }
    }, [user, location.pathname, navigate]);

    return (
        <QueryClientProvider client={queryClient}>
            <div className="relative flex min-h-screen w-full flex-col bg-background font-display text-text">
                <PrivateHeader />
                <Outlet />
                <PrivateFooter />
            </div>
        </QueryClientProvider>
    )
}

export default PrivateTemplate
