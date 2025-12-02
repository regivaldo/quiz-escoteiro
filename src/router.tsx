import { createBrowserRouter } from 'react-router'
import HomePage from './pages/HomePage'
import PrivateTemplate from './templates/PrivateTemplate'
import PublicTemplate from './templates/PublicTemplate'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import GamePage from './pages/GamePage'
import AskPage from './pages/AskPage'
import ResultPage from './pages/ResultPage'
import RankingPage from './pages/RankingPage'
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfUsePage from './pages/TermsOfUsePage'

const router = createBrowserRouter([
    {
        path: '/a',
        Component: PrivateTemplate,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: 'categorias',
                Component: GamePage,
            },
            {
                path: 'quiz',
                Component: AskPage,
            },
            {
                path: 'resulto',
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
                path: 'registro',
                Component: RegisterPage,
            },
            {
                path: 'login',
                Component: LoginPage,
            },
        ],
    },
])

export default router
