import ChangePasswordPage from "./pages/ChangePasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const authRoutes = [
    {
        index: true,
        Component: LoginPage,
    },
    {
        path: 'registro',
        Component: RegisterPage,
    },
    {
        path: 'esqueci-senha',
        Component: ForgotPasswordPage,
    },
    {
        path: 'alterar-senha/:email',
        Component: ChangePasswordPage,
    },
    {
        path: 'alterar-senha/:email/:code',
        Component: ChangePasswordPage,
    },
];

export default authRoutes;
