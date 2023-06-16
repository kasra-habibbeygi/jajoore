import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import CheckListIcon from '@/assets/images/filter/checklist.svg';

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
        var count = 0;
        Object.values(checkedValue).forEach(item => {
            item && count++;
        });

        if (count > 0) {
            return `${count} امکانات اقامتگاه`;
        }

        return 'امکانات اقامتگاه';
    };

    return (
        <DropdownField ref={ref} className='facilities_filter'>
            <FilterPill title={titleProvider()} img={CheckListIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout
                title='امکانات اقامتگاه'
                status={uniqValue === DropDownStatus}
                setDropDownStatus={setDropDownStatus}
                boxWidth={600}
                name='facilities'
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
        </DropdownField>
    );
};

export default Facilities;
