import React, { useRef, useState } from 'react';

// Assets
import { CheckboxStyle } from './style/checkbox-dropdown.style';
import SearchIcon from '@/assets/images/layout/search.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import Checkbox from '@/components/form-group/checkbox';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const RulesFilter = () => {
    const uniqValue = 'RulesFilter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [checkedValue, setCheckedValue] = useState({
        جنگلی: false,
        ساحلی: false,
        شهری: false,
        بیابانی: false
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

    const checkboxValueHandler = (e: any) => {
        setCheckedValue({
            ...checkedValue,
            [e.target.name]: e.target.checked
        });
    };

    const titleProvider = () => {
        var count = 0;
        Object.values(checkedValue).forEach(item => {
            item && count++;
        });

        if (count > 0) {
            return `${count} قوانین اقامتگاه`;
        }

        return 'قوانین اقامتگاه';
    };

    return (
        <CheckboxStyle ref={ref}>
            <FilterPill title={titleProvider()} img={SearchIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout title='قوانین اقامتگاه' status={uniqValue === DropDownStatus} setDropDownStatus={setDropDownStatus} width={450}>
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
            </DropDownLayout>
        </CheckboxStyle>
    );
};

export default RulesFilter;
