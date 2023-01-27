import {ReactNode} from 'react';
import {HTMLHead} from './HTMLHead';
import {Container, LogoContainer, LogoContainerMobile} from './styles';
import Logo from '~public/icons/logo.svg';
import LogoMobile from '~public/icons/logo-mobile.svg';
import {useRouter} from 'next/router';
import Navigation from '~components/molecules/Navigation';
import {useScrollNavigation} from '~providers/ScrollNavigation';

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
                {children}
            </Container>
        </>
    );
};

export default Layout;
