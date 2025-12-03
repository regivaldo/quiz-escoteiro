import { Outlet } from 'react-router'

const AuthTemplate = () => {
    return (
        <div className="bg-bg-light font-display text-text-on-light min-h-screen">
            <Outlet />
        </div>
    )
}

export default AuthTemplate
