import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import CoinIcon from '@/assets/images/filter/coin.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import PriceFilters from './content/price';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const PriceFilter = () => {
    const uniqValue = 'PriceFilter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [priceValue, setPriceValue] = useState([100_000, 25_000_000]);

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
        if (priceValue[0] > 100_000 || priceValue[1] < 25_000_000) {
            return `از ${priceValue[0].toLocaleString()} تا ${priceValue[1].toLocaleString()}`;
        }
        return 'محدوده اجاره بها';
    };

    return (
        <DropdownField ref={ref} className='price_filter'>
            <FilterPill
                title={titleProvider()}
                img={CoinIcon}
                handler={() => FilterDropDownStatusHandler(uniqValue)}
                activeStatus={priceValue[0] > 100_000 || priceValue[1] < 25_000_000}
            />
            <DropDownLayout
                title='محدوده اجاره بها'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                boxWidth={450}
                name='price'
            >
                <PriceFilters setPriceValue={setPriceValue} priceValue={priceValue} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default PriceFilter;
