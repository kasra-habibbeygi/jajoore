/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
    return (
        <Html lang='fa'>
            <Head>
                <link rel='stylesheet' href='/style.css' />
            </Head>
            <body dir='rtl'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
