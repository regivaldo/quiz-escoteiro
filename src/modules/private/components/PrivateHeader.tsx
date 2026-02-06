import Logo from '@/assets/logo.svg?react';
import { Link, NavLink } from 'react-router';
import { useUserStore } from '@/stores/userStore';
import { useState } from 'react';
import { ListIcon, XIcon } from '@phosphor-icons/react';

const PrivateHeader = () => {
  const user = useUserStore((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 w-full bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-3">
        <Link to="/game" className="flex items-center gap-4 text-gray-900">
          <div className="size-8">
            <Logo className="w-full h-full object-contain" />
          </div>
          <h2 className="text-lg font-bold tracking-[-0.015em] text-gray-900 flex items-center gap-2">
            Quiz Escoteiro
          </h2>
        </Link>

        <div className="hidden sm:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <NavLink
              to="/game"
              end
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/game/ranking"
              end
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'
              }
            >
              Ranking
            </NavLink>
            <NavLink
              to="/game/perfil"
              end
              className={({ isActive }) =>
                isActive ? 'text-primary' : 'text-gray-700 hover:text-primary transition-colors'
              }
            >
              Meu Perfil
            </NavLink>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4 ml-4">
          {user?.isAdmin && (
            <Link
              to="/admin"
              className="hidden sm:inline-flex items-center px-3 py-1 text-sm font-bold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              Administração
            </Link>
          )}
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{ backgroundImage: `url('${user?.photoURL}')` }}
            aria-label="User avatar"
          />
          <button
            className="sm:hidden text-gray-900 p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg sm:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-2">
          <NavLink
            to="/game"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary transition-colors py-2'
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/game/ranking"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary transition-colors py-2'
            }
          >
            Ranking
          </NavLink>
          <NavLink
            to="/game/perfil"
            end
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary transition-colors py-2'
            }
          >
            Meu Perfil
          </NavLink>
          {user?.isAdmin && (
            <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="text-primary font-bold py-2">
              Administração
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default PrivateHeader;
