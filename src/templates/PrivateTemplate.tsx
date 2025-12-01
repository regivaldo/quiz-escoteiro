import { Outlet } from 'react-router'
import PrivateHeader from '../components/PrivateHeader'
import PrivateFooter from '../components/PrivateFooter'

const PrivateTemplate = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#12140D] font-display text-gray-200">
            <PrivateHeader />
            <Outlet />
            <PrivateFooter />
        </div>
    )
}

export default PrivateTemplate
