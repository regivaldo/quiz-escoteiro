import { Outlet } from 'react-router'
import PrivateHeader from '@/modules/private/components/PrivateHeader'
import PrivateFooter from '@/modules/private/components/PrivateFooter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const PrivateTemplate = () => {
    const queryClient = new QueryClient();

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
