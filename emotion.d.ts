/* eslint-disable no-unused-vars */
import '@emotion/react';

interface ThemeConfig {
    color: string;
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
