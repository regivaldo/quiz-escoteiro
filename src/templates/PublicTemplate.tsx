import { Outlet } from 'react-router'

const PublicTemplate = () => {
    return (
        <div className="bg-bg-light font-display text-text-on-light min-h-screen">
            <Outlet />
        </div>
    )
}

export default PublicTemplate
