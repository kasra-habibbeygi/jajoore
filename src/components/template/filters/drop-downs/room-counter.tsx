import React, { useRef, useState } from 'react';

// Assets
import { DropDownMainField } from './room-counter.styles';
import SearchIcon from '@/assets/images/layout/search.svg';

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

    useOutsideClick(ref, () => {
        setDropDownStatus('');
    });

    const FilterDropDownStatusHandler = (name: any) => {
        setDropDownStatus(name);
        if (name === DropDownStatus) {
            setDropDownStatus('');
        }
    };

    return (
        <DropDownMainField ref={ref}>
            <FilterPill title='تعداد تخت و اتاق' img={SearchIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout title='تعداد تخت و اتاق' status={uniqValue === DropDownStatus}>
                <div className='row'>
                    <p>
                        <span></span>
                        تعداد اتاق خواب ها
                    </p>
                    <div className='counter'>
                        <AddCircleOutlineIcon className='green' />
                        1
                        <RemoveCircleOutlineIcon className='red' />
                    </div>
                </div>
                <div className='row'>
                    <p>
                        <span></span>
                        تعداد تخت ها
                    </p>
                    <div className='counter'>
                        <AddCircleOutlineIcon className='green' />
                        1
                        <RemoveCircleOutlineIcon className='red' />
                    </div>
                </div>
            </DropDownLayout>
        </DropDownMainField>
    );
};

export default RoomCounter;
