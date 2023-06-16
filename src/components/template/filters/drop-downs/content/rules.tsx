/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

// Component
import Checkbox from '@/components/form-group/checkbox';

const RulesFilter = ({ setNumberCounter }: { setNumberCounter: (state: any) => void }) => {
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
            <div className='row full_width'>
                <Checkbox
                    name='جنگلی'
                    label='همراه داشتن حیوان خانگی مجاز باشد.'
                    value={checkedValue.جنگلی}
                    handler={(e: any) => checkboxValueHandler(e)}
                />
            </div>
            <div className='row full_width'>
                <Checkbox
                    name='ساحلی'
                    label='استعمال دخانیات در داخل اقامتگاه مجاز باشد.'
                    value={checkedValue.ساحلی}
                    handler={(e: any) => checkboxValueHandler(e)}
                />
            </div>
            <div className='row full_width'>
                <Checkbox
                    name='بیابانی'
                    label='برگزاری مهمانی کوچک و پخش موزیک مجاز باشد.'
                    value={checkedValue.بیابانی}
                    handler={(e: any) => checkboxValueHandler(e)}
                />
            </div>
        </div>
    );
};

export default RulesFilter;
