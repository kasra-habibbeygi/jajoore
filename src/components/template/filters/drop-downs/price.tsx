import React, { useRef, useState } from 'react';

// Assets
import { RangeField } from './style/range-dropwdown.style';
import CoinIcon from '@/assets/images/filter/coin.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import Input from '@/components/form-group/input';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

// MUI
import Slider from '@mui/material/Slider';
import { CacheProvider } from '@emotion/react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
});

const PriceFilter = () => {
    const uniqValue = 'PriceFilter';
    const minDistance = 400_000;
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [sliderValue, setSliderValue] = useState([100_000, 25_000_000]);
    const removeNonNumeric = (num: any) => num.toString().replace(/[^0-9]/g, '');

    useOutsideClick(ref, () => {
        setDropDownStatus('');
    });

    const FilterDropDownStatusHandler = (name: any) => {
        setDropDownStatus(name);
        if (name === DropDownStatus) {
            setDropDownStatus('');
        }
    };

    const titleProvider = () => {
        if (sliderValue[0] > 100_000 || sliderValue[1] < 25_000_000) {
            return `از ${sliderValue[0].toLocaleString()} تا ${sliderValue[1].toLocaleString()}`;
        }
        return 'محدوده اجاره ها';
    };

    const inputValueHandler = (e: any) => {
        if (e.target.name === 'from') {
            setSliderValue([sliderValue[0], removeNonNumeric(e.target.value)]);
        } else {
            setSliderValue([removeNonNumeric(e.target.value), sliderValue[1]]);
        }
    };

    const sliderValueHandler = (e: any, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 25_000_000 - minDistance);
                setSliderValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setSliderValue([clamped - minDistance, clamped]);
            }
        } else {
            setSliderValue(newValue);
        }
    };

    return (
        <RangeField ref={ref}>
            <FilterPill
                title={titleProvider()}
                img={CoinIcon}
                handler={() => FilterDropDownStatusHandler(uniqValue)}
                activeStatus={sliderValue[0] > 100_000 || sliderValue[1] < 25_000_000}
            />
            <DropDownLayout title='منطقه اقامتگاه' status={uniqValue === DropDownStatus} setDropDownStatus={setDropDownStatus} width={450}>
                <div className='slider_field'>
                    <CacheProvider value={cacheRtl}>
                        <Slider
                            getAriaLabel={() => 'Minimum distance shift'}
                            value={sliderValue}
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
                            value={sliderValue[0].toLocaleString()}
                            label='نرخ از شبی'
                            placeholder='0'
                            setValue={inputValueHandler}
                        />
                    </div>
                    <div className='form_field'>
                        <p>تومان</p>
                        <Input
                            name='to'
                            value={sliderValue[1].toLocaleString()}
                            label='تا'
                            placeholder='25،000،000'
                            setValue={inputValueHandler}
                        />
                    </div>
                </div>
            </DropDownLayout>
        </RangeField>
    );
};

export default PriceFilter;
