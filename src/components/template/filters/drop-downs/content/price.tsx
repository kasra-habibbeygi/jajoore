/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from 'react';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

// Component
import Input from '@/components/form-group/input';

// MUI
import Slider from '@mui/material/Slider';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
});

const PriceFilters = ({ setPriceValue, priceValue }: { setPriceValue: (state: any) => void; priceValue: number[] }) => {
    const minDistance = 400_000;
    const removeNonNumeric = (num: any) => num.toString().replace(/[^0-9]/g, '');

    const inputValueHandler = (e: any) => {
        if (e.target.name === 'from') {
            setPriceValue([priceValue[0], removeNonNumeric(e.target.value)]);
        } else {
            setPriceValue([removeNonNumeric(e.target.value), priceValue[1]]);
        }
    };

    const sliderValueHandler = (e: any, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 25_000_000 - minDistance);
                setPriceValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setPriceValue([clamped - minDistance, clamped]);
            }
        } else {
            setPriceValue(newValue);
        }
    };

    return (
        <>
            <div className='slider_field'>
                <CacheProvider value={cacheRtl}>
                    <Slider
                        getAriaLabel={() => 'Minimum distance shift'}
                        value={priceValue}
                        onChange={sliderValueHandler}
                        valueLabelDisplay='auto'
                        disableSwap
                        step={100_000}
                        min={100_000}
                        max={25_000_000}
                        scale={(num: any): any => num.toLocaleString()}
                    />
                </CacheProvider>
            </div>
            <div className='form_group'>
                <div className='form_field'>
                    <p>تومان</p>
                    <Input
                        name='from'
                        value={priceValue[0].toLocaleString()}
                        label='نرخ از شبی'
                        placeholder='0'
                        setValue={inputValueHandler}
                    />
                </div>
                <div className='form_field'>
                    <p>تومان</p>
                    <Input
                        name='to'
                        value={priceValue[1].toLocaleString()}
                        label='تا'
                        placeholder='25،000،000'
                        setValue={inputValueHandler}
                    />
                </div>
            </div>
        </>
    );
};

export default PriceFilters;
