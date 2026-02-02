import { useNavigate } from 'react-router';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { useUserStore } from '@/stores/userStore';
import Subheader from '../components/Subheader';
import Google from '@/assets/google.svg?react';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setError(null);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Logged in user:', user);
      setUser({
        id: user.uid,
        name: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || '',
        group: 'Escoteiro', // Default Group or fetch from DB later
      });

      navigate('/game');
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error('Google login error:', message);
      setError('Erro ao fazer login: ' + message);
    }
  };

  return (
    <div className="w-full p-8">
      <Subheader title="Bem-vindo!" subtitle="Faça login para continuar sua jornada." />

      <div className="flex flex-col items-center gap-6 mt-8">
        {error && <div className="w-full max-w-sm rounded-lg bg-red-100 p-4 text-sm text-red-700">{error}</div>}

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full max-w-sm bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg border border-gray-300 shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer"
        >
          <Google />
          Entrar com Google
        </button>

        <p className="text-sm text-text-on-dark-muted text-center">
          Ao continuar, você concorda com nossos
          <br />
          Termos de Uso e Política de Privacidade.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
