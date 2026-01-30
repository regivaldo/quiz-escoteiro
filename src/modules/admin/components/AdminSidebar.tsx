import { useUserStore } from '@/stores/userStore';
import { ChartBarIcon, ListDashesIcon, SignOutIcon, CaretLeftIcon } from '@phosphor-icons/react';
import { NavLink, Link, useNavigate } from 'react-router';
import { auth } from '@/config/firebase';
import { signOut } from 'firebase/auth';

const AdminSidebar = () => {
    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <aside className="w-64 bg-surface-dark border-r border-gray-200 min-h-screen flex flex-col fixed left-0 top-0 bottom-0 z-20">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                    <Link to="/game" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm">
                        <CaretLeftIcon /> Voltar ao Jogo
                    </Link>
                </div>
                <h1 className="text-xl font-bold text-primary">Painel Admin</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                    }
                >
                    <ChartBarIcon size={20} />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin/quizzes"
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                    }
                >
                    <ListDashesIcon size={20} />
                    Quizzes
                </NavLink>
            </nav>

            {/* User Info & Logout */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                    <div
                        className="w-10 h-10 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${user?.photoURL}')` }}
                    />
                    <div className="overflow-hidden">
                        <p className="text-sm font-bold text-gray-900 truncate">{user?.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
                >
                    <SignOutIcon size={18} />
                    Sair
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
