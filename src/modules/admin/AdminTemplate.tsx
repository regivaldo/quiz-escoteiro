import { useUserStore } from '@/stores/userStore';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import AdminSidebar from './components/AdminSidebar';

const AdminTemplate = () => {
    const { user } = useUserStore();
    const navigate = useNavigate();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        // Simple delay to allow user store to rehydrate if needed
        // Since main.tsx handles the actual check, we trust user.isAdmin here
        if (user === null) {
            // Let the main auth listener handle null user redirection or wait a bit
            // But usually if we are here, we expect a user.
            // We can wait a small tick or check immediately if loading is done.
            // For simplicity, let's wait a moment effectively handled by the "isChecking" logic if we had a loading state in store.
            // Since we don't have a specific "loading" state in store, we rely on the fact that if user is null *after* init, it's a logout.
        }

        // If we have a user but isAdmin is false/undefined, kick them out
        if (user && user.isAdmin !== true) {
            navigate('/game');
        }

        setIsChecking(false);

    }, [user, navigate]);


    if (isChecking) {
        return <div className="flex min-h-screen items-center justify-center">Carregando painel...</div>;
    }

    // Double check render protection
    if (!user?.isAdmin) {
        return null;
    }

    return (
        <div className="flex bg-gray-50 min-h-screen font-display">
            <AdminSidebar />
            <div className="flex-1 ml-64 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminTemplate;
