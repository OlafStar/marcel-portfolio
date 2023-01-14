import React, {useMemo} from 'react';
import Head from 'next/head';

import {If} from '~atoms/If';

type HTMLHeadProps = {pageTitle: string; pageDescription?: string};

export const HTMLHead: React.FC<HTMLHeadProps> = ({pageTitle, pageDescription}) => {
    return (
        <Head>
            <meta charSet="utf8" />
            <title>{pageTitle}</title>

            <meta name="referrer" content="origin" />
            <meta name="robots" content="noindex" />
            <meta name="googlebot" content="noindex" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <If condition={pageDescription}>
                <meta name="description" content={pageDescription} />
                <meta property="og:description" content={pageDescription} />
            </If>

            <meta property="og:title" content={pageTitle} />
            <meta property="og:type" content="website" />

            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />
        </Head>
    );
};
