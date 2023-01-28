import {
    ButtonsContainer,
    LineContainer,
    BlackNavigationContainer,
    RelativeWrapper,
    StyledButton,
} from './styles';
import HomeBlack from '~public/icons/home-contact.svg';
import ProjectsBlack from '~public/icons/projects-contact.svg';
import ContactBlack from '~public/icons/contact-contact.svg';
import AboutBlack from '~public/icons/about-contact.svg';
import {motion} from 'framer-motion';
import {useScrollNavigation} from '~providers/ScrollNavigation';
const BlackNavigation = () => {
    const {screen, setScreen} = useScrollNavigation();

    return (
        <BlackNavigationContainer screen={screen}>
            <RelativeWrapper>
                <ButtonsContainer>
                    <StyledButton
                        onClick={() => {
                            setScreen('home');
                        }}
                    >
                        <HomeBlack />
                        {screen === 'home' && (
                            <motion.div className="line" layoutId="lineBlack" />
                        )}
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            setScreen('projects');
                        }}
                    >
                        <ProjectsBlack />
                        {screen === 'projects' && (
                            <motion.div className="line" layoutId="lineBlack" />
                        )}
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            setScreen('contact');
                        }}
                    >
                        <ContactBlack />
                        {screen === 'contact' && (
                            <motion.div className="line" layoutId="lineBlack" />
                        )}
                    </StyledButton>
                    <StyledButton
                        onClick={() => {
                            setScreen('about');
                        }}
                    >
                        <AboutBlack />
                        {screen === 'about' && (
                            <motion.div className="line" layoutId="lineBlack" />
                        )}
                    </StyledButton>
                </ButtonsContainer>
                <LineContainer />
            </RelativeWrapper>
        </BlackNavigationContainer>
    );
};

export default BlackNavigation;
