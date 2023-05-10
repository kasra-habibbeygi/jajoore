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

const Facilities = () => {
    const uniqValue = 'facilities';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [checkedValue, setCheckedValue] = useState({
        استخر: false,
        جکوزی: false,
        'ماشین لباس شویی': false,
        'میز بیلیارد': false
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
        // const test = Object.values(checkedValue).forEach(item => item && );

        // console.log(test);

        return 'امکانات اقامتگاه';
    };

    return (
        <CheckboxStyle ref={ref}>
            <FilterPill title={titleProvider()} img={SearchIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout
                title='امکانات اقامتگاه'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                width={600}
            >
                <div className='checkbox_field'>
                    <div className='row'>
                        <Checkbox name='استخر' label='استخر' value={checkedValue.استخر} handler={(e: any) => checkboxValueHandler(e)} />
                    </div>
                    <div className='row'>
                        <Checkbox name='جکوزی' label='جکوزی' value={checkedValue.جکوزی} handler={(e: any) => checkboxValueHandler(e)} />
                    </div>
                    <div className='row'>
                        <Checkbox
                            name='ماشین لباس شویی'
                            label='ماشین لباس شویی'
                            value={checkedValue['ماشین لباس شویی']}
                            handler={(e: any) => checkboxValueHandler(e)}
                        />
                    </div>
                    <div className='row'>
                        <Checkbox
                            name='میز بیلیارد'
                            label='میز بیلیارد'
                            value={checkedValue['میز بیلیارد']}
                            handler={(e: any) => checkboxValueHandler(e)}
                        />
                    </div>
                </div>
            </DropDownLayout>
        </CheckboxStyle>
    );
};

export default Facilities;
