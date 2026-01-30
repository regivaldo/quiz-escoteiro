import { createBrowserRouter } from 'react-router'
import NotFoundPage from '@/modules/common/pages/NotFoundPage'
import SeedPage from './modules/admin/pages/SeedPage'
import AuthTemplate from '@/modules/auth/AuthTemplate'
import PublicTemplate from '@/modules/public/PublicTemplate'
import PrivateTemplate from '@/modules/private/PrivateTemplate'
import authRoutes from './modules/auth/routes'
import privateRoutes from './modules/private/routes'
import publicRoutes from './modules/public/routes'

const router = createBrowserRouter([
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
        path: '/seed',
        Component: SeedPage,
    },
    {
        path: '*',
        Component: NotFoundPage,
    },
])

export default router
