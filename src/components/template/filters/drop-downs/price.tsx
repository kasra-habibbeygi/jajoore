/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/state-manager/store';

// Assets
import { DropdownField } from './style/dropdown.style';
import CoinIcon from '@/assets/images/filter/coin.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import PriceFilters from './content/price';

// Hooks
import useOutsideClick from '@/hooks/useOutsideClick';

const PriceFilter = () => {
    const router = useRouter();
    const filterActionStatus = useSelector((state: RootState) => state.Utils.filterAction);
    const uniqValue = 'PriceFilter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [priceValue, setPriceValue] = useState<any>([100_000, 25_000_000]);

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
            return `از ${parseInt(priceValue[0]).toLocaleString()} تا ${parseInt(priceValue[1]).toLocaleString()}`;
        }
        return 'محدوده اجاره بها';
    };

    useEffect(() => {
        if (filterActionStatus.type === 'price') {
            if (filterActionStatus.action === 'remove') {
                delete router.query.minPrice;
                delete router.query.maxPrice;
                router.push(router);
            } else {
                if (priceValue[0] !== 100_000 || priceValue[1] !== 25_000_000) {
                    router.query.minPrice = priceValue[0];
                    router.query.maxPrice = priceValue[1];
                }

                router.push(router);
            }
        }
    }, [filterActionStatus]);

    useEffect(() => {
        setPriceValue([router.query.minPrice ?? 100_000, router.query.maxPrice ?? 25_000_000]);
    }, [router.query.minPrice, router.query.maxPrice]);

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
