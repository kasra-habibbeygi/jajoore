/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// MUI
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const PersonFilter = ({ personCount, setpersonCount }: { setpersonCount: (state: any) => void; personCount: number }) => {
    const counterHandler = (type: 'add' | 'reduce') => {
        setpersonCount(type === 'add' ? personCount + 1 : personCount > 0 ? personCount - 1 : 0);
    };

    return (
        <>
            <div className='counter_row'>
                <p>
                    <span></span>
                    تعداد نفرات
                </p>
                <div className='counter'>
                    <AddCircleOutlineIcon className='green' onClick={() => counterHandler('add')} />
                    {personCount}
                    <RemoveCircleOutlineIcon className='red' onClick={() => counterHandler('reduce')} />
                </div>
            </div>
        </>
    );
};

export default PersonFilter;
