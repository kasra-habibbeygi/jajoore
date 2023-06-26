import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import TypesIcon from '@/assets/images/filter/types.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import TypeFilterContent from './content/type';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const TypeFilter = () => {
    const uniqValue = 'TypeFilter';
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
            return `${numberCounter} نوع اقامتگاه`;
        }

        return 'نوع اقامتگاه';
    };

    return (
        <DropdownField ref={ref} className='type_filter'>
            <FilterPill title={titleProvider()} img={TypesIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout
                title='نوع اقامتگاه'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                boxWidth={600}
                name='types'
            >
                <TypeFilterContent setNumberCounter={setNumberCounter} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default TypeFilter;
