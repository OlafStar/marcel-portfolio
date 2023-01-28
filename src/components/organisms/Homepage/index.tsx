import {AnimatePresence} from 'framer-motion';
import {ReactNode} from 'react';
import {useScrollNavigation} from '~providers/ScrollNavigation';
import AboutPage from '../AboutPage';
import ContactPage from '../ContactPage';
import MainPage from '../MainPage';
import ProjectsPage from '../ProjectsPage';
export const screens = ['home', 'projects', 'contact', 'about'] as const;

export type Screens = typeof screens[number];
const Homepage = () => {
    const includeScreen =
        (screen: Screens) => (screens: Screens[], Component: ReactNode) =>
            screens.includes(screen) && Component;

    const {screen} = useScrollNavigation();
    const include = includeScreen(screen);
    return (
        <AnimatePresence>
            {include(['home'], <MainPage key="home" />)}
            {include(['projects'], <ProjectsPage key="projects" />)}
            {include(['contact'], <ContactPage key="contact" />)}
            {include(['about'], <AboutPage key="about" />)}
        </AnimatePresence>
    );
};

export default Homepage;
