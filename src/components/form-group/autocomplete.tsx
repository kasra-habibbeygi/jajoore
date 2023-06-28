import React from 'react';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

// Assets
import { MainField } from './autocomplete.style';

// MUI
import TextField from '@mui/material/TextField';
import { Autocomplete as MUIAutocomplete } from '@mui/material';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
});

const Autocomplete = () => {
    return (
        <MainField>
            <CacheProvider value={cacheRtl}>
                <MUIAutocomplete disablePortal options={top100Films} renderInput={params => <TextField {...params} disabled />} />
            </CacheProvider>
        </MainField>
    );
};

const top100Films = [
    { label: 'از برترین', value: 'از برترین' },
    { label: 'از بیشترین امتیاز', value: 'از بیشترین امتیاز' },
    { label: 'از کمترین قیمت', value: 'از کمترین قیمت' },
    { label: 'از بیشترین قیمت', value: 'از بیشترین قیمت' },
    { label: 'از بیشترین رزرو', value: 'از بیشترین رزرو' },
    { label: 'از بیشترین تخفیف', value: 'از بیشترین تخفیف' },
    { label: 'از جدید ترین', value: 'از جدید ترین' }
];

export default Autocomplete;
