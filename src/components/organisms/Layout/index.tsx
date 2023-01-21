import {ReactNode} from 'react';
import {HTMLHead} from './HTMLHead';
import {Container, LogoContainer, LogoContainerMobile, ScrollInfo} from './styles';
import Logo from '~public/icons/logo.svg';
import LogoMobile from '~public/icons/logo-mobile.svg';
type LayoutProps = {
    children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <HTMLHead pageTitle="Marel Portfolio" />

            <Container>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <LogoContainerMobile>
                    <LogoMobile />
                </LogoContainerMobile>
                {children}
                <ScrollInfo>{'scroll'}</ScrollInfo>
            </Container>
        </>
    );
};

export default Layout;
