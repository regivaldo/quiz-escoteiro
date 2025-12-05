import { Outlet } from 'react-router'
import Page from './components/Page'
import Header from './components/Header'

const AuthTemplate = () => {
    return (
        <main className="bg-bg-light font-display text-text-on-light min-h-screen">
            <Page>
                <Header />
                <Outlet />
            </Page>
        </main>
    )
}

export default AuthTemplate
