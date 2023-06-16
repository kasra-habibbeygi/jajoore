import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import HammerIcon from '@/assets/images/filter/hammer.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import RulesContent from './content/rules';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const RulesFilter = () => {
    const uniqValue = 'RulesFilter';
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
            return `${numberCounter} قوانین اقامتگاه`;
        }

        return 'قوانین اقامتگاه';
    };

    return (
        <DropdownField ref={ref} className='rules_filter'>
            <FilterPill title={titleProvider()} img={HammerIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout
                title='قوانین اقامتگاه'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                boxWidth={450}
                name='rules'
            >
                <RulesContent setNumberCounter={setNumberCounter} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default RulesFilter;