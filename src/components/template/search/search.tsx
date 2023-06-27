import React, { useRef, useState } from 'react';
import Image from 'next/image';
import useOutsideClick from '@/hooks/use-outside-click';

// Assets
import { SearchBoxField } from './search.style';
import SearchIcon from '@/assets/images/layout/search.svg';

// Component
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

const SearchField = ({ setCitiesModalStatus, mode = '', setMobileSearchStatus, mobileSearchStatus }: any) => {
    const uniqValue = 'search_field';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [inputValue, setInputValue] = useState('');

    const searchBoxHandler = () => {
        setDropDownStatus(uniqValue);

        if (mode !== 'mobile') {
            setMobileSearchStatus(true);
        }
    };

    useOutsideClick(ref, () => {
        setDropDownStatus('');
    });

    return (
        <SearchBoxField
            status={uniqValue === DropDownStatus}
            onClick={searchBoxHandler}
            ref={ref}
            mobileMode={mobileSearchStatus}
            className={mode === 'mobile' ? 'mobile_search' : ''}
        >
            <div className='content'>
                <Input
                    type='text'
                    placeholder='کجا می خوای بری ؟ | کد ویلا ... ؟'
                    name='search'
                    setValue={e => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <Image src={SearchIcon} alt='' className='search_icon' />
                <div className='search_box_dropdown'>
                    <div className={`top_rate_field ${inputValue !== '' ? 'hidden' : ''}`}>
                        <b>مقاصد پر طرفدار :</b>
                        <span>رامسر</span>
                        <span>ماسال</span>
                        <span>کیش</span>
                        <span>بندر انزلی</span>
                    </div>

                    <div className='button_field'>
                        <Button handler={() => setCitiesModalStatus(true)}>لیست شهر ها</Button>
                        <span className='seprator'></span>
                        <Button>جستجو در نقشه </Button>
                    </div>
                    <div className={`search_field ${inputValue === '' ? 'hidden' : ''}`}>
                        <div className='row'>
                            <p>کردان - البرز</p>
                            <p>544 اقامتگاه</p>
                        </div>
                        <div className='row'>
                            <p>کردان - البرز</p>
                            <p>544 اقامتگاه</p>
                        </div>
                        <div className='row'>
                            <p>کردان - البرز</p>
                            <p>544 اقامتگاه</p>
                        </div>
                        <div className='row'>
                            <p>کردان - البرز</p>
                            <p>544 اقامتگاه</p>
                        </div>
                        <div className='row'>
                            <p>کردان - البرز</p>
                            <p>544 اقامتگاه</p>
                        </div>
                        <div className='row'>
                            <p>کردان - البرز</p>
                            <p>544 اقامتگاه</p>
                        </div>
                        <div className='row'>
                            <p>کردان - البرز</p>
                            <p>544 اقامتگاه</p>
                        </div>
                        <div className='row'>
                            <p>کردان - البرز</p>
                            <p>544 اقامتگاه</p>
                        </div>
                    </div>
                </div>
            </div>
        </SearchBoxField>
    );
};

export default SearchField;
