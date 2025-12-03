import { Outlet } from 'react-router'
import PrivateHeader from '@/modules/private/components/PrivateHeader'
import PrivateFooter from '@/modules/private/components/PrivateFooter'

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
