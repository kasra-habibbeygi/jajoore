import React, { ReactNode } from 'react';

// MUI
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
});

interface ComponentType {
    children: ReactNode;
}

const MuiRtlWraper = ({ children }: ComponentType) => {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default MuiRtlWraper;
