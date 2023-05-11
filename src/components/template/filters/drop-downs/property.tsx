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

const Property = () => {
    const uniqValue = 'Property';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [checkedValue, setCheckedValue] = useState({
        ممتاز: false,
        خاص: false,
        'رزرو فوری': false
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
            return `${count} ویژگی های اقامتگاه`;
        }

        return 'ویژگی های اقامتگاه';
    };

    return (
        <CheckboxStyle ref={ref}>
            <FilterPill title={titleProvider()} img={SearchIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout
                title='ویژگی های اقامتگاه'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                width={600}
            >
                <div className='checkbox_field'>
                    <div className='row'>
                        <Checkbox name='ممتاز' label='ممتاز' value={checkedValue.ممتاز} handler={(e: any) => checkboxValueHandler(e)} />
                    </div>
                    <div className='row'>
                        <Checkbox name='خاص' label='خاص' value={checkedValue.خاص} handler={(e: any) => checkboxValueHandler(e)} />
                    </div>
                    <div className='row'>
                        <Checkbox
                            name='رزرو فوری'
                            label='رزرو فوری'
                            value={checkedValue['رزرو فوری']}
                            handler={(e: any) => checkboxValueHandler(e)}
                        />
                    </div>
                </div>
            </DropDownLayout>
        </CheckboxStyle>
    );
};

export default Property;
