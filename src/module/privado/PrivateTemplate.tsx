import { Outlet } from 'react-router'
import PrivateHeader from '@/module/privado/components/PrivateHeader'
import PrivateFooter from '@/module/privado/components/PrivateFooter'

const PrivateTemplate = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background font-display text-text">
            <PrivateHeader />
            <Outlet />
            <PrivateFooter />
        </div>
    )
}

export default PrivateTemplate
