import Footer from '@/modules/public/components/Footer';
import Header from '@/modules/public/components/Header';
import { Outlet } from 'react-router';

const PublicTemplate = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background font-display text-text">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicTemplate;
