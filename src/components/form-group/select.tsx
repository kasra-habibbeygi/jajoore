import React from 'react';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

// Assets
import { MainField } from './select.style';

// MUI
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
});

// Types
interface SelectComponentTypes {
    items: any;
    state: any;
    handler: any;
    itemKey: string;
    name: string;
    valueKey: string;
}

const SelectComponent = ({ items, state, handler, itemKey, valueKey, name }: SelectComponentTypes) => {
    return (
        <MainField>
            <CacheProvider value={cacheRtl}>
                <Select value={state} onChange={handler} name={name}>
                    {items.map((item: any, index: number) => (
                        <MenuItem key={`select_Items_${name}_${index}`} value={item[valueKey]}>
                            {item[itemKey]}
                        </MenuItem>
                    ))}
                </Select>
            </CacheProvider>
        </MainField>
    );
};

export default SelectComponent;
