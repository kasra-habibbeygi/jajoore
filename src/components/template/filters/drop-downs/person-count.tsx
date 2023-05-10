import React, { useRef, useState } from 'react';

// Assets
import { CheckboxStyle } from './style/counter-dropdown.style';
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
        <CheckboxStyle ref={ref}>
            <FilterPill title={titleProvider()} img={UsersIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout title='تعداد نفرات' status={uniqValue === DropDownStatus} setDropDownStatus={setDropDownStatus}>
                <div className='row'>
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
        </CheckboxStyle>
    );
};

export default RoomCounter;
