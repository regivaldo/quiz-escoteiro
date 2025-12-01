import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import PrivateTemplate from "./templates/PrivateTemplate";

const router = createBrowserRouter([
    {
        path: "/",
        Component: PrivateTemplate,
        children: [
            {
                index: true,
                Component: HomePage,
            },
        ],
    }
]);

export default router;
