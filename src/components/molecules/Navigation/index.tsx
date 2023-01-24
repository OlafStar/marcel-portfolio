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
import {useRouter} from 'next/router';
const Navigation = () => {
    const router = useRouter();

    console.log(router);

    return (
        <NavigationContainer>
            <RelativeWrapper>
                <ButtonsContainer>
                    <StyledButton onClick={() => {router.push('/')}}>
                        <Home />
                        {router.asPath === '/' && (
                            <motion.div className="line" layoutId="line" />
                        )}
                    </StyledButton>
                    <StyledButton onClick={() => {router.push('/projects')}}>
                        <Projects />
                        {router.asPath === '/projects' && (
                            <motion.div className="line" layoutId="line" />
                        )}
                    </StyledButton>
                    <StyledButton onClick={() => {router.push('/contact')}}>
                        <Contact />
                        {router.asPath === '/contact' && (
                            <motion.div className="line" layoutId="line" />
                        )}
                    </StyledButton>
                    <StyledButton onClick={() => {router.push('/about')}}>
                        <About />
                        {router.asPath === '/about' && (
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
