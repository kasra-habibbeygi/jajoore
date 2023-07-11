import React, { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import useOutsideClick from '@/hooks/useOutsideClick';

// Assets
import { SearchBoxField } from './search.style';
import SearchIcon from '@/assets/images/layout/search.svg';

// Component
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';
import { PulseLoader } from 'react-spinners';

const SearchField = ({ setProvincesModalStatus, mode = '', setMobileSearchStatus, mobileSearchStatus, popularDestinations }: any) => {
    const uniqValue = 'search_field';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [loaderStatus, setLoaderStatus] = useState(false);

    const searchBoxHandler = () => {
        setDropDownStatus(uniqValue);

        if (mode !== 'mobile') {
            setMobileSearchStatus(true);
        }
    };

    useOutsideClick(ref, () => {
        setDropDownStatus('');
    });

    const searchValuehandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setLoaderStatus(true);

        const delayDebounceFn = setTimeout(() => {
            setLoaderStatus(false);
        }, 3000);

        return () => clearTimeout(delayDebounceFn);
    };

    return (
        <SearchBoxField
            status={uniqValue === DropDownStatus}
            onClick={searchBoxHandler}
            ref={ref}
            mobileMode={mobileSearchStatus}
            className={mode === 'mobile' ? 'mobile_search' : ''}
            mode={mode}
            inputValue={inputValue}
        >
            <div className='content'>
                <Input
                    type='text'
                    placeholder='کجا می خوای بری ؟ | کد ویلا ... ؟'
                    name='search'
                    setValue={e => searchValuehandler(e)}
                    value={inputValue}
                />
                <Image src={SearchIcon} alt='' className='search_icon' />
                <div className='search_box_dropdown'>
                    <div className='top_rate_field'>
                        <b>مقاصد پر طرفدار :</b>
                        {popularDestinations.map((item: any, index: number) => (
                            <span key={`search_popular_destinations_${index}`}>{item.title}</span>
                        ))}
                    </div>

                    <div className='button_field'>
                        <Button handler={() => setProvincesModalStatus(true)}>لیست شهر ها</Button>
                        <span className='seprator'></span>
                        <Button>جستجو در نقشه </Button>
                    </div>
                    {loaderStatus && (
                        <div className='search_loader'>
                            <PulseLoader loading={true} color='#d8d8d8' size={10} />
                        </div>
                    )}
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
