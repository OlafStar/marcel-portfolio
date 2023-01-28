import {ReactNode} from 'react';
import {HTMLHead} from './HTMLHead';
import {Container, LogoContainer, LogoContainerMobile} from './styles';
import Logo from '~public/icons/logo.svg';
import LogoMobile from '~public/icons/logo-mobile.svg';
import Navigation from '~components/molecules/Navigation';
import {useScrollNavigation} from '~providers/ScrollNavigation';
import BlackNavigation from '~components/molecules/Navigation/BlackNavigation';

type LayoutProps = {
    children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
    const {screen} = useScrollNavigation();
    return (
        <>
            <HTMLHead pageTitle="Marel Portfolio" />

            <Container>
                <LogoContainer color={screen === 'contact' ? 'black' : 'white'}>
                    <Logo />
                </LogoContainer>
                <LogoContainerMobile
                    color={screen === 'contact' ? 'black' : 'white'}
                >
                    <LogoMobile />
                </LogoContainerMobile>
                <Navigation />
                <BlackNavigation />
                {children}
            </Container>
        </>
    );
};

export default Layout;
