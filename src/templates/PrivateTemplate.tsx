import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrivateTemplate = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default PrivateTemplate;
