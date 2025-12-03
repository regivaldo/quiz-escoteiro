import HomePage from "../public/pages/HomePage";
import AboutPage from "../public/pages/AboutPage";
import ContactPage from "../public/pages/ContactPage";
import PrivacyPolicyPage from "../public/pages/PrivacyPolicyPage";
import TermsOfUsePage from "../public/pages/TermsOfUsePage";

const publicRoutes = [
    {
        index: true,
        Component: HomePage,
    },
    {
        path: 'sobre',
        Component: AboutPage,
    },
    {
        path: 'termos-de-uso',
        Component: TermsOfUsePage,
    },
    {
        path: 'politica-de-privacidade',
        Component: PrivacyPolicyPage,
    },
    {
        path: 'contato',
        Component: ContactPage,
    },
];

export default publicRoutes;