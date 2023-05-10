import React, { useRef, useState } from 'react';

// Assets
import { CheckboxStyle } from './style/counter-dropdown.style';
import BedIcon from '@/assets/images/card/double-bed.svg';

// MUI
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

// Types
interface InputValueType {
    beds: number;
    rooms: number;
}

const PersonCounter = () => {
    const uniqValue = 'room_counter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [inputValue, setInputValue] = useState<InputValueType>({
        beds: 0,
        rooms: 0
    });

    const counterHandler = (type: 'add' | 'reduce', name: 'beds' | 'rooms') => {
        setInputValue({
            ...inputValue,
            [name]: type === 'add' ? inputValue[name] + 1 : inputValue[name] > 0 ? inputValue[name] - 1 : 0
        });
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
        if (inputValue.beds !== 0 || inputValue.rooms !== 0) {
            return `تخت ${inputValue.beds} - اتاق ${inputValue.rooms}`;
        }

        return 'تعداد تخت و اتاق';
    };

    return (
        <CheckboxStyle ref={ref}>
            <FilterPill title={titleProvider()} img={BedIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout title='تعداد تخت و اتاق' status={uniqValue === DropDownStatus} setDropDownStatus={setDropDownStatus}>
                <div className='row'>
                    <p>
                        <span></span>
                        تعداد اتاق خواب ها
                    </p>
                    <div className='counter'>
                        <AddCircleOutlineIcon className='green' onClick={() => counterHandler('add', 'rooms')} />
                        {inputValue.rooms}
                        <RemoveCircleOutlineIcon className='red' onClick={() => counterHandler('reduce', 'rooms')} />
                    </div>
                </div>
                <div className='row'>
                    <p>
                        <span></span>
                        تعداد تخت ها
                    </p>
                    <div className='counter'>
                        <AddCircleOutlineIcon className='green' onClick={() => counterHandler('add', 'beds')} />
                        {inputValue.beds}
                        <RemoveCircleOutlineIcon className='red' onClick={() => counterHandler('reduce', 'beds')} />
                    </div>
                </div>
            </DropDownLayout>
        </CheckboxStyle>
    );
};

export default PersonCounter;
