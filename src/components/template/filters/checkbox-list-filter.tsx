import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './drop-downs/style/dropdown.style';

// Component
import DropDownLayout from './layout';
import FilterPill from '@/components/template/filters/pill';
import FilterContent from './filter-content';

// Hooks
import useOutsideClick from '@/hooks/useOutsideClick';

// Types
interface CheckBoxListFilterTypes {
    filterItem: any;
    title: string;
    className: string;
    name: string;
    boxWidth?: number;
    Icon: any;
}

const CheckBoxListFilter = ({ filterItem, title, className, name, boxWidth = 600, Icon }: CheckBoxListFilterTypes) => {
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
            return `${numberCounter} ${title}`;
        }

        return title;
    };

    return (
        <DropdownField ref={ref} className={className}>
            <FilterPill title={titleProvider()} img={Icon} handler={() => FilterDropDownStatusHandler(name)} activeStatus={numberCounter} />
            <DropDownLayout
                title={title}
                status={name === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                boxWidth={boxWidth}
                name={name}
            >
                <FilterContent setNumberCounter={setNumberCounter} filterItem={filterItem} name={name} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default CheckBoxListFilter;
