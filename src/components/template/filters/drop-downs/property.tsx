import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import CheckListIcon from '@/assets/images/filter/checklist.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import PropertyFilter from './content/property';

// Hooks
import useOutsideClick from '@/hooks/useOutsideClick';

const Property = () => {
    const uniqValue = 'Property';
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
            return `${numberCounter} ویژگی های اقامتگاه`;
        }

        return 'ویژگی های اقامتگاه';
    };

    return (
        <DropdownField ref={ref} className='property_filter'>
            <FilterPill
                title={titleProvider()}
                img={CheckListIcon}
                handler={() => FilterDropDownStatusHandler(uniqValue)}
                activeStatus={numberCounter}
            />
            <DropDownLayout
                title='ویژگی های اقامتگاه'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                boxWidth={600}
                name='property'
            >
                <PropertyFilter setNumberCounter={setNumberCounter} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default Property;
