import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import CalenderIcon from '@/assets/images/filter/calendar.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import TypeFilterContent from './content/type';

// Hooks
import useOutsideClick from '@/hooks/useOutsideClick';

const CalenderFilter = () => {
    const uniqValue = 'CalenderFilter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [numberCounter, setNumberCounter] = useState(0);

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
        if (numberCounter > 0) {
            return '5 تیر الی 21 مرداد';
        }

        return '5 تیر الی 21 مرداد';
    };

    return (
        <DropdownField ref={ref} className='calender_filter'>
            <FilterPill title={titleProvider()} img={CalenderIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout
                title='تاریخ سفر'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                boxWidth={600}
                name='types'
            >
                <TypeFilterContent setNumberCounter={setNumberCounter} filterItem={[]} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default CalenderFilter;
