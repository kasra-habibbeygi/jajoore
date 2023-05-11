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

const AreaFilter = () => {
    const uniqValue = 'AreaFilter';
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
            return `${count} منطقه اقامتگاه`;
        }

        return 'منطقه اقامتگاه';
    };

    return (
        <CheckboxStyle ref={ref}>
            <FilterPill title={titleProvider()} img={SearchIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout title='منطقه اقامتگاه' status={uniqValue === DropDownStatus} setDropDownStatus={setDropDownStatus} width={600}>
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
                        <Checkbox
                            name='بیابانی'
                            label='بیابانی'
                            value={checkedValue.بیابانی}
                            handler={(e: any) => checkboxValueHandler(e)}
                        />
                    </div>
                </div>
            </DropDownLayout>
        </CheckboxStyle>
    );
};

export default AreaFilter;
