import React from 'react';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import Image from 'next/image';

// Assets
import { MainField } from './autocomplete.style';
import Alert from '@/assets/images/icons/simple-alert.svg';

// MUI
import TextField from '@mui/material/TextField';
import { Autocomplete as MUIAutocomplete } from '@mui/material';

// Component
import Tooltip from './tooltip';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
});

// Types
interface AutoCompleteTypes {
    value: any;
    items: any;
    labelKey: any;
    setValue: any;
    valueKey: string;
    name: string;
    placeholder?: string;
    label?: string;
    tooltipContent?: any;
    tooltipBody?: any;
}

const Autocomplete = ({
    setValue,
    placeholder,
    value,
    items,
    labelKey,
    valueKey,
    name,
    label,
    tooltipContent,
    tooltipBody = Alert
}: AutoCompleteTypes) => {
    return (
        <CacheProvider value={cacheRtl}>
            <MainField>
                {label && (
                    <label htmlFor={name}>
                        {label}
                        {tooltipContent && (
                            <Tooltip title={tooltipContent}>
                                <Image className='tooltip_helper_img' src={tooltipBody} alt='' />
                            </Tooltip>
                        )}
                    </label>
                )}
                <MUIAutocomplete
                    disablePortal
                    value={items.filter((item: any) => item[valueKey] === value)[0]}
                    isOptionEqualToValue={(option, value) => option === value}
                    options={items}
                    getOptionLabel={option => option[labelKey]}
                    renderInput={params => <TextField {...params} disabled placeholder={placeholder} />}
                    onChange={(_, newValue: any) => {
                        setValue({
                            ...value,
                            [name]: newValue ? newValue[valueKey] : null
                        });
                    }}
                />
            </MainField>
        </CacheProvider>
    );
};

export default Autocomplete;
