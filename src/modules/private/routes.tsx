import ContactPage from '../public/pages/ContactPage';
import GamePage from './pages/GamePage';
import ProfilePage from './pages/ProfilePage';
import QuizPage from './pages/QuizPage';
import RankingPage from './pages/RankingPage';
import ResultDetailPage from './pages/ResultDetailPage';
import ResultPage from './pages/ResultPage';
import FirstAccessPage from './pages/FirstAccessPage';

const privateRoutes = [
  {
    index: true,
    Component: GamePage,
  },
  {
    path: 'quiz/:slug',
    Component: QuizPage,
  },
  {
    path: 'resultado',
    Component: ResultPage,
  },
  {
    path: 'respostas',
    Component: ResultDetailPage,
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
  {
    path: 'primeiro-acesso',
    Component: FirstAccessPage,
  },
];

export default privateRoutes;
