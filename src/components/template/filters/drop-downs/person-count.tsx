import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import UsersIcon from '@/assets/images/card/group-users.svg';

// MUI
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const RoomCounter = () => {
    const uniqValue = 'room_counter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [inputValue, setInputValue] = useState<number>(0);

    const counterHandler = (type: 'add' | 'reduce') => {
        setInputValue(type === 'add' ? inputValue + 1 : inputValue > 0 ? inputValue - 1 : 0);
    };

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
        if (inputValue) {
            return `${inputValue} نفر`;
        }

        return 'تعداد نفرات';
    };

    return (
        <DropdownField ref={ref} className='person_filter'>
            <FilterPill
                title={titleProvider()}
                img={UsersIcon}
                handler={() => FilterDropDownStatusHandler(uniqValue)}
                activeStatus={inputValue !== 0}
            />
            <DropDownLayout title='تعداد نفرات' status={uniqValue === DropDownStatus} setDropDownStatus={setDropDownStatus} name='counter'>
                <div className='counter_row'>
                    <p>
                        <span></span>
                        تعداد نفرات
                    </p>
                    <div className='counter'>
                        <AddCircleOutlineIcon className='green' onClick={() => counterHandler('add')} />
                        {inputValue}
                        <RemoveCircleOutlineIcon className='red' onClick={() => counterHandler('reduce')} />
                    </div>
                </div>
            </DropDownLayout>
        </DropdownField>
    );
};

export default RoomCounter;
