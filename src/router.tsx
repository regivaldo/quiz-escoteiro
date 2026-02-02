import { createBrowserRouter } from 'react-router'
import NotFoundPage from '@/modules/common/pages/NotFoundPage'
import SeedPage from './modules/admin/pages/SeedPage'
import AuthTemplate from '@/modules/auth/AuthTemplate'
import PublicTemplate from '@/modules/public/PublicTemplate'
import PrivateTemplate from '@/modules/private/PrivateTemplate'
import authRoutes from './modules/auth/routes'
import privateRoutes from './modules/private/routes'
import publicRoutes from './modules/public/routes'

import AdminTemplate from './modules/admin/AdminTemplate'
import AdminDashboardPage from './modules/admin/pages/AdminDashboardPage'
import AdminQuizList from './modules/admin/pages/AdminQuizList'
import AdminQuizFormPage from './modules/admin/pages/AdminQuizFormPage'
import AdminUsersPage from './modules/admin/pages/AdminUsersPage'

const router = createBrowserRouter([
    {
        path: '/admin',
        Component: AdminTemplate,
        children: [
            {
                index: true,
                Component: AdminDashboardPage
            },
            {
                path: 'quizzes',
                Component: AdminQuizList
            },
            {
                path: 'users',
                Component: AdminUsersPage
            },
            {
                path: 'quizzes/new',
                Component: AdminQuizFormPage
            },
            {
                path: 'quizzes/:id',
                Component: AdminQuizFormPage
            },
            {
                path: 'seed',
                Component: SeedPage
            }
        ]
    },
    {
        path: '/game',
        Component: PrivateTemplate,
        children: privateRoutes,
    },
    {
        path: '/login',
        Component: AuthTemplate,
        children: authRoutes,
    },
    {
        path: '/',
        Component: PublicTemplate,
        children: publicRoutes,
    },
    {
        path: '*',
        Component: NotFoundPage,
    },
])

export default router
