import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import FiltersIcon from '@/assets/images/icons/setting.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import RulesFilter from './content/rules';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

// Types

const Filters = () => {
    const uniqValue = 'room_counter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [numberCounter, setNumberCounter] = useState(0);

    console.log(numberCounter);

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
        return 'سایر فیلتر ها';
    };

    return (
        <DropdownField ref={ref} className='room_filter'>
            <FilterPill
                title={titleProvider()}
                img={FiltersIcon}
                handler={() => FilterDropDownStatusHandler(uniqValue)}
                activeStatus={false}
            />
            <DropDownLayout
                title='تعداد تخت و اتاق'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                name='filters'
                boxWidth={500}
            >
                <RulesFilter setNumberCounter={setNumberCounter} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default Filters;
