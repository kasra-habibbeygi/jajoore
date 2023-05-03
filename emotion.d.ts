/* eslint-disable no-unused-vars */
import '@emotion/react';

interface ThemeConfig {
    colors: {
        primary: string;
        yellow: string;
        green: string;
        lightGray: string;
        blue: string;
        alert: string;
        pale: {
            primary: string;
            green: string;
        };
        light: {
            primary: string;
            yellow: string;
        };
        dark: {
            yellow: string;
            blue: string;
        };
        text: {
            primary: string;
            secondary: string;
            light: string;
        };
    };
}

declare module '@emotion/react' {
    interface Theme {
        mode: string;
        palette: ThemeConfig;
    }
}

declare module '@mui/material/styles' {
    interface Theme {
        mode: string;
        palette: ThemeConfig;
    }
}
