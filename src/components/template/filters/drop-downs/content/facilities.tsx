/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Component
import Checkbox from '@/components/form-group/checkbox';

const FacilitiesFilter = ({ setNumberCounter }: { setNumberCounter: (state: any) => void }) => {
    const [checkedValue, setCheckedValue] = useState({
        استخر: false,
        جکوزی: false,
        'ماشین لباس شویی': false,
        'میز بیلیارد': false
    });

    const checkboxValueHandler = (e: any) => {
        setCheckedValue({
            ...checkedValue,
            [e.target.name]: e.target.checked
        });

        if (e.target.checked) {
            setNumberCounter((prev: any) => prev + 1);
        } else {
            setNumberCounter((prev: any) => prev - 1);
        }
    };

    return (
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
    );
};

export default FacilitiesFilter;
