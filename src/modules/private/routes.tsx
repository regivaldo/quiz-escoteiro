import ContactPage from "../public/pages/ContactPage";
import AskPage from "./pages/AskPage";
import GamePage from "./pages/GamePage";
import ProfilePage from "./pages/ProfilePage";
import RankingPage from "./pages/RankingPage";
import ResultPage from "./pages/ResultPage";

const privateRoutes = [
    {
        index: true,
        Component: GamePage,
    },
    {
        path: ':slug',
        Component: AskPage,
    },
    {
        path: 'resultado',
        Component: ResultPage,
    },
    {
        path: 'ranking',
        Component: RankingPage,
    },
    {
        path: 'perfil',
        Component: ProfilePage,
    },
    {
        path: 'contato',
        Component: ContactPage,
    },
];

export default privateRoutes;
