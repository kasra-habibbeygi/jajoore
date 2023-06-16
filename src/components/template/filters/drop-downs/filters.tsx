import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import FiltersIcon from '@/assets/images/icons/setting.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import RulesFilter from './content/rules';
import FacilitiesFilter from './content/facilities';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const Filters = () => {
    const uniqValue = 'room_counter';
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
        if (numberCounter !== 0) {
            return `${numberCounter} فیلتر`;
        }
        return 'سایر فیلتر ها ';
    };

    return (
        <DropdownField ref={ref} className='all_filter_list'>
            <FilterPill
                title={titleProvider()}
                img={FiltersIcon}
                handler={() => FilterDropDownStatusHandler(uniqValue)}
                activeStatus={numberCounter !== 0}
            />
            <DropDownLayout status={uniqValue === DropDownStatus} setDropDownStatus={setDropDownStatus} name='filters' boxWidth={500}>
                <div className='body_scrolling'>
                    <div className='header margin_top'>
                        <span></span>
                        قوانین اقامتگاه
                    </div>
                    <RulesFilter setNumberCounter={setNumberCounter} />
                    <div className='header margin_top'>
                        <span></span>
                        امکانات اقامتگاه
                    </div>
                    <FacilitiesFilter setNumberCounter={setNumberCounter} />
                </div>
            </DropDownLayout>
        </DropdownField>
    );
};

export default Filters;
