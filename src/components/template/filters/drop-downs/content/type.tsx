/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Component
import Checkbox from '@/components/form-group/checkbox';

const TypeFilter = ({ setNumberCounter }: { setNumberCounter: (state: any) => void }) => {
    const [checkedValue, setCheckedValue] = useState({
        ویلایی: false,
        آپارتمان: false,
        کلبه: false,
        قایق: false
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
                <Checkbox name='ویلایی' label='ویلایی' value={checkedValue.ویلایی} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
            <div className='row'>
                <Checkbox name='آپارتمان' label='آپارتمان' value={checkedValue.آپارتمان} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
            <div className='row'>
                <Checkbox name='کلبه' label='کلبه' value={checkedValue.کلبه} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
            <div className='row'>
                <Checkbox name='قایق' label='قایق' value={checkedValue.قایق} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
        </div>
    );
};

export default TypeFilter;
