import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import PrivateTemplate from "./templates/PrivateTemplate";
import PublicTemplate from "./templates/PublicTemplate";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/a",
        Component: PrivateTemplate,
        children: [
            {
                index: true,
                Component: HomePage,
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
                path: 'registro',
                Component: RegisterPage,
            },
        ],
    }
]);

export default router;
