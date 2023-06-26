/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Component
import Checkbox from '@/components/form-group/checkbox';

const PropertyFilter = ({ setNumberCounter }: { setNumberCounter: (state: any) => void }) => {
    const [checkedValue, setCheckedValue] = useState({
        ممتاز: false,
        خاص: false
    });

    const checkboxValueHandler = (e: any) => {
        setCheckedValue(prev => ({
            ...prev,
            [e.target.name]: e.target.checked
        }));

        if (e.target.checked) {
            setNumberCounter((prev: any) => prev + 1);
        } else {
            setNumberCounter((prev: any) => prev - 1);
        }
    };

    return (
        <div className='checkbox_field'>
            <div className='row'>
                <Checkbox name='ممتاز' label='ممتاز' value={checkedValue.ممتاز} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
            <div className='row'>
                <Checkbox name='خاص' label='خاص' value={checkedValue.خاص} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
        </div>
    );
};

export default PropertyFilter;
