import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import CheckListIcon from '@/assets/images/filter/checklist.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import AreaFilters from './content/area';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const AreaFilter = ({ filterItem }: any) => {
    const uniqValue = 'AreaFilter';
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
            return `${numberCounter} منطقه اقامتگاه`;
        }

        return 'منطقه اقامتگاه';
    };

    return (
        <DropdownField ref={ref} className='area_filter'>
            <FilterPill title={titleProvider()} img={CheckListIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout
                title='منطقه اقامتگاه'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                boxWidth={600}
                name='area'
            >
                <AreaFilters setNumberCounter={setNumberCounter} filterItem={filterItem} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default AreaFilter;
