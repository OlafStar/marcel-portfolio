import {
    ButtonsContainer,
    LineContainer,
    NavigationContainer,
    RelativeWrapper,
    StyledButton,
} from './styles';
import Home from '~public/icons/home.svg';
import Projects from '~public/icons/projects.svg';
import Contact from '~public/icons/contact.svg';
import About from '~public/icons/about.svg';
import {motion} from 'framer-motion';
import {useScrollNavigation} from '~providers/ScrollNavigation';
const Navigation = () => {
    const {screen, setScreen} = useScrollNavigation();

    return (
        <NavigationContainer>
            <RelativeWrapper>
                <ButtonsContainer>
                    <StyledButton
                        onClick={() => {
                            setScreen('home');
                        }}
                    >
                        <Home />
                        {screen === 'home' && (
                            <motion.div className="line" layoutId="line" />
                        )}
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            setScreen('projects');
                        }}
                    >
                        <Projects />
                        {screen === 'projects' && (
                            <motion.div className="line" layoutId="line" />
                        )}
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            setScreen('contact')
                        }}
                    >
                        <Contact />
                        {screen === 'contact' && (
                            <motion.div className="line" layoutId="line" />
                        )}
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            setScreen('about')
                        }}
                    >
                        <About />
                        {screen === 'about' && (
                            <motion.div className="line" layoutId="line" />
                        )}
                    </StyledButton>
                </ButtonsContainer>
                <LineContainer />
            </RelativeWrapper>
        </NavigationContainer>
    );
};

export default Navigation;
