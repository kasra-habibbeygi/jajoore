/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Component
import Checkbox from '@/components/form-group/checkbox';

const AreaFilters = ({ setNumberCounter }: { setNumberCounter: (state: any) => void }) => {
    const [checkedValue, setCheckedValue] = useState({
        جنگلی: false,
        ساحلی: false,
        شهری: false,
        بیابانی: false
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
                <Checkbox name='جنگلی' label='جنگلی' value={checkedValue.جنگلی} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
            <div className='row'>
                <Checkbox name='ساحلی' label='ساحلی' value={checkedValue.ساحلی} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
            <div className='row'>
                <Checkbox name='شهری' label='شهری' value={checkedValue.شهری} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
            <div className='row'>
                <Checkbox name='بیابانی' label='بیابانی' value={checkedValue.بیابانی} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
        </div>
    );
};

export default AreaFilters;
