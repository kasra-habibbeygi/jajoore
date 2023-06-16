import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import CheckListIcon from '@/assets/images/filter/checklist.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import FacilitiesFilter from './content/facilities';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const Facilities = () => {
    const uniqValue = 'facilities';
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
            return `${numberCounter} امکانات اقامتگاه`;
        }

        return 'امکانات اقامتگاه';
    };

    return (
        <DropdownField ref={ref} className='facilities_filter'>
            <FilterPill title={titleProvider()} img={CheckListIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout
                title='امکانات اقامتگاه'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                boxWidth={600}
                name='facilities'
            >
                <FacilitiesFilter setNumberCounter={setNumberCounter} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default Facilities;
