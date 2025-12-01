import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        index: true,
        Component: HomePage,
    },
]);

export default router;
