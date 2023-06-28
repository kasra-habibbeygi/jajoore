/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/state-manager/store';

// MUI
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const RoomCounterFilter = ({ setRoomValues, roomValues }: { setRoomValues: (state: any) => void; roomValues: any }) => {
    const router = useRouter();
    const filterActionStatus = useSelector((state: RootState) => state.Utils.filterAction);
    const counterHandler = (type: 'add' | 'reduce', name: 'beds' | 'rooms') => {
        setRoomValues((prev: any) => ({
            ...prev,
            [name]: type === 'add' ? prev[name] + 1 : prev[name] > 0 ? prev[name] - 1 : 0
        }));
    };

    useEffect(() => {
        if (filterActionStatus.type === 'roomsBedsCounter') {
            if (filterActionStatus.action === 'remove') {
                delete router.query.beds;
                delete router.query.rooms;
                router.push(router);
            } else {
                Object.keys(roomValues).forEach((item: any) => {
                    if (roomValues[item] !== 0) {
                        router.query[item] = roomValues[item];
                    }
                });

                router.push(router);
            }
        }
    }, [filterActionStatus]);

    useEffect(() => {
        setRoomValues({
            beds: router.query.beds ?? 0,
            rooms: router.query.rooms ?? 0
        });
    }, [router.query.beds, router.query.rooms]);

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
