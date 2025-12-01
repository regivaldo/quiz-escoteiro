import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import PrivateTemplate from "./templates/PrivateTemplate";
import PublicTemplate from "./templates/PublicTemplate";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import GamePage from "./pages/GamePage";
import AskPage from "./pages/AskPage";

const router = createBrowserRouter([
    {
        path: "/a",
        Component: PrivateTemplate,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "game",
                Component: GamePage,
            },
            {
                path: "ask",
                Component: AskPage,
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
            {
                path: 'login',
                Component: LoginPage,
            },
        ],
    }
]);

export default router;
