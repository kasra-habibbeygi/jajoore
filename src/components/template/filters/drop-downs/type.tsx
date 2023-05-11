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

const TypeFilter = () => {
    const uniqValue = 'TypeFilter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [checkedValue, setCheckedValue] = useState({
        ویلایی: false,
        آپارتمان: false,
        کلبه: false,
        قایق: false
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
            return `${count} نوع اقامتگاه`;
        }

        return 'نوع اقامتگاه';
    };

    return (
        <CheckboxStyle ref={ref}>
            <FilterPill title={titleProvider()} img={SearchIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout title='نوع اقامتگاه' status={uniqValue === DropDownStatus} setDropDownStatus={setDropDownStatus} width={600}>
                <div className='checkbox_field'>
                    <div className='row'>
                        <Checkbox name='ویلایی' label='ویلایی' value={checkedValue.ویلایی} handler={(e: any) => checkboxValueHandler(e)} />
                    </div>
                    <div className='row'>
                        <Checkbox
                            name='آپارتمان'
                            label='آپارتمان'
                            value={checkedValue.آپارتمان}
                            handler={(e: any) => checkboxValueHandler(e)}
                        />
                    </div>
                    <div className='row'>
                        <Checkbox name='کلبه' label='کلبه' value={checkedValue.کلبه} handler={(e: any) => checkboxValueHandler(e)} />
                    </div>
                    <div className='row'>
                        <Checkbox name='قایق' label='قایق' value={checkedValue.قایق} handler={(e: any) => checkboxValueHandler(e)} />
                    </div>
                </div>
            </DropDownLayout>
        </CheckboxStyle>
    );
};

export default TypeFilter;
