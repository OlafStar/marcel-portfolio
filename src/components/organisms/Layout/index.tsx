import {ReactNode} from 'react';
import {HTMLHead} from './HTMLHead';
import {Container} from './styles';

type LayoutProps = {
    children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <HTMLHead pageTitle="Marel Portfolio" />
            <Container>{children}</Container>
        </>
    );
};

export default Layout;
