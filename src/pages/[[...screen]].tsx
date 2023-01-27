import {AnimatePresence} from 'framer-motion';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import Homepage, {screens} from '~components/organisms/Homepage';
import Layout from '~components/organisms/Layout';
import ScrollNavigationProvider from '~providers/ScrollNavigation';
const Index: NextPage = () => {
    return (
        <ScrollNavigationProvider screens={screens}>
            <Layout>
                <AnimatePresence>
                    <Homepage />
                </AnimatePresence>
            </Layout>
        </ScrollNavigationProvider>
    );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    };
};

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [
            {params: {screen: undefined}},
            ...screens.slice(1).map((screen) => ({
                params: {screen: [screen]},
            })),
        ],
        fallback: false,
    };
};
