import { createBrowserRouter } from 'react-router'
import HomePage from './module/public/pages/HomePage'
import RegisterPage from './module/auth/pages/RegisterPage'
import LoginPage from './module/auth/pages/LoginPage'
import ForgotPasswordPage from './module/auth/pages/ForgotPasswordPage'
import ChangePasswordPage from './module/auth/pages/ChangePasswordPage'
import GamePage from './module/privado/pages/GamePage'
import AskPage from './module/privado/pages/AskPage'
import ResultPage from './module/privado/pages/ResultPage'
import RankingPage from './module/privado/pages/RankingPage'
import ProfilePage from './module/privado/pages/ProfilePage'
import AboutPage from './module/public/pages/AboutPage'
import PrivacyPolicyPage from './module/public/pages/PrivacyPolicyPage'
import TermsOfUsePage from './module/public/pages/TermsOfUsePage'
import ContactPage from './module/public/pages/ContactPage'
import NotFoundPage from './module/common/pages/NotFoundPage'
import AuthTemplate from './module/auth/AuthTemplate'
import PublicTemplate from './module/public/PublicTemplate'
import PrivateTemplate from './module/privado/PrivateTemplate'

const router = createBrowserRouter([
    {
        path: '/quiz',
        Component: PrivateTemplate,
        children: [
            {
                index: true,
                Component: GamePage,
            },
            {
                path: ':slug',
                Component: AskPage,
            },
            {
                path: 'resultado',
                Component: ResultPage,
            },
            {
                path: 'ranking',
                Component: RankingPage,
            },
            {
                path: 'perfil',
                Component: ProfilePage,
            },
            {
                path: 'contato',
                Component: ContactPage,
            },
        ],
    },
    {
        path: '/auth',
        Component: AuthTemplate,
        children: [
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
        ],
    },
    {
        path: '/',
        Component: PublicTemplate,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: 'sobre',
                Component: AboutPage,
            },
            {
                path: 'termos-de-uso',
                Component: TermsOfUsePage,
            },
            {
                path: 'politica-de-privacidade',
                Component: PrivacyPolicyPage,
            },
            {
                path: 'contato',
                Component: ContactPage,
            },
        ],
    },

    {
        path: '*',
        Component: NotFoundPage,
    },
])

export default router
