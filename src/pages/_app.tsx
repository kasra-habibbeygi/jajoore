/* eslint-disable @next/next/next-script-for-ga */
import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import Router from 'next/router';
import Store from '../state-manager/store';
import Head from 'next/head';
import 'nprogress/nprogress.css';

//Config
import { theme } from '../configs/theme';

//Assets
import '../assets/styles/globals/general.css';

NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
    const darkModeTheme = createTheme(theme('light'));

    return (
        <Provider store={Store}>
            <Head>
                <title>جاجوره | هر جا میخوای برو !</title>
            </Head>
            <ThemeProvider theme={darkModeTheme}>
                <Toaster
                    position='bottom-left'
                    containerStyle={{
                        zIndex: 9999,
                        textAlign: 'right',
                        direction: 'rtl'
                    }}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}
