import { Outlet } from 'react-router'

const PublicTemplate = () => {
    return (
        <div className="bg-bg-light dark:bg-bg-dark font-display text-text-on-light dark:text-text-on-dark min-h-screen">
            <Outlet />
        </div>
    )
}

export default PublicTemplate
