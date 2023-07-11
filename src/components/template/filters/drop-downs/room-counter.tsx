import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import BedIcon from '@/assets/images/card/double-bed.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import RoomCounterFilter from './content/room-counter';

// Hooks
import useOutsideClick from '@/hooks/useOutsideClick';

// Types
interface InputValueType {
    beds: number;
    rooms: number;
}

const PersonCounter = () => {
    const uniqValue = 'room_counter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [roomValues, setRoomValues] = useState<InputValueType>({
        beds: 0,
        rooms: 0
    });

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
        if (roomValues.beds !== 0 || roomValues.rooms !== 0) {
            return `تخت ${roomValues.beds} - اتاق ${roomValues.rooms}`;
        }

        return 'تعداد تخت و اتاق';
    };

    return (
        <DropdownField ref={ref} className='room_filter'>
            <FilterPill
                title={titleProvider()}
                img={BedIcon}
                handler={() => FilterDropDownStatusHandler(uniqValue)}
                activeStatus={roomValues.beds > 0 || roomValues.rooms > 0}
            />
            <DropDownLayout
                title='تعداد تخت و اتاق'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                name='roomsBedsCounter'
            >
                <RoomCounterFilter setRoomValues={setRoomValues} roomValues={roomValues} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default PersonCounter;
