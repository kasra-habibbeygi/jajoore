/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// MUI
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

// Types
interface InputValueType {
    beds: number;
    rooms: number;
}

const RoomCounterFilter = ({ setRoomValues, roomValues }: { setRoomValues: (state: any) => void; roomValues: InputValueType }) => {
    const counterHandler = (type: 'add' | 'reduce', name: 'beds' | 'rooms') => {
        setRoomValues((prev: any) => ({
            ...prev,
            [name]: type === 'add' ? prev[name] + 1 : prev[name] > 0 ? prev[name] - 1 : 0
        }));
    };

    return (
        <>
            <div className='counter_row'>
                <p>
                    <span></span>
                    تعداد اتاق خواب ها
                </p>
                <div className='counter'>
                    <AddCircleOutlineIcon className='green' onClick={() => counterHandler('add', 'rooms')} />
                    {roomValues.rooms}
                    <RemoveCircleOutlineIcon className='red' onClick={() => counterHandler('reduce', 'rooms')} />
                </div>
            </div>
            <div className='counter_row'>
                <p>
                    <span></span>
                    تعداد تخت ها
                </p>
                <div className='counter'>
                    <AddCircleOutlineIcon className='green' onClick={() => counterHandler('add', 'beds')} />
                    {roomValues.beds}
                    <RemoveCircleOutlineIcon className='red' onClick={() => counterHandler('reduce', 'beds')} />
                </div>
            </div>
        </>
    );
};

export default RoomCounterFilter;
