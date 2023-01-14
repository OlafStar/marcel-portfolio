import {ReactNode} from 'react';
import {HTMLHead} from './HTMLHead';

type LayoutProps = {
    children?: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <HTMLHead pageTitle="Marel Portfolio" />
            <div>{children}</div>
        </>
    );
};

export default Layout;
