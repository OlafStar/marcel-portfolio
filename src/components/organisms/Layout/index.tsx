import {ReactNode} from 'react';
import {HTMLHead} from './HTMLHead';
import {Container, LogoContainer, LogoContainerMobile, ScrollInfo} from './styles';
import Logo from '~public/icons/logo.svg';
import LogoMobile from '~public/icons/logo-mobile.svg';
import {useRouter} from 'next/router';
type LayoutProps = {
    children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
    const router = useRouter();
    return (
        <>
            <HTMLHead pageTitle="Marel Portfolio" />

            <Container>
                <LogoContainer
                    color={router.asPath === '/contact' ? 'black' : 'white'}
                >
                    <Logo />
                </LogoContainer>
                <LogoContainerMobile
                    color={router.asPath === '/contact' ? 'black' : 'white'}
                >
                    <LogoMobile />
                </LogoContainerMobile>
                {children}
                <ScrollInfo>{'scroll'}</ScrollInfo>
            </Container>
        </>
    );
};

export default Layout;
