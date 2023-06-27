import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import CheckListIcon from '@/assets/images/filter/checklist.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import LeaseFilters from './content/lease';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const LeaseType = ({ filterItem }: any) => {
    const uniqValue = 'LeaseType';
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
            return `${numberCounter} نوع اجاره`;
        }

        return 'نوع اجاره';
    };

    return (
        <DropdownField ref={ref} className='lease_filter'>
            <FilterPill title={titleProvider()} img={CheckListIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout
                title='نوع اجاره'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                boxWidth={600}
                name='lease'
            >
                <LeaseFilters setNumberCounter={setNumberCounter} filterItem={filterItem} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default LeaseType;
