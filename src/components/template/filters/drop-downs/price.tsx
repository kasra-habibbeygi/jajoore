import React, { useRef, useState } from 'react';

// Assets
import { DropDownMainField } from './room-counter.styles';
import SearchIcon from '@/assets/images/layout/search.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const PriceFilter = () => {
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');

    useOutsideClick(ref, () => {
        setDropDownStatus('');
    });

    const FilterDropDownStatusHandler = (name: any) => {
        setDropDownStatus(name);
        if (name === DropDownStatus) {
            setDropDownStatus('');
        }
    };

    return (
        <DropDownMainField ref={ref}>
            <FilterPill title='تعداد تخت و اتاق' img={SearchIcon} handler={() => FilterDropDownStatusHandler('price')} />
            <DropDownLayout title='تعداد تخت و اتاق' status={true}>
                asd
            </DropDownLayout>
        </DropDownMainField>
    );
};

export default PriceFilter;
