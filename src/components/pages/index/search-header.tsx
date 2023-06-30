import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './search-header.style';
import MocImg from '@/assets/images/moc/bg.jpg';

const SearchHeader = () => {
    return (
        <MainField>
            <Image src={MocImg} alt='' className='image_field' width={1000} height={300} />
            <div className='left_field'>
                <h1>اجاره ویلا و سوئیت در کردان</h1>
                <p>
                    کردان، مقصدی خوش آب و هوا در نزدیکی تهران؛ اجاره ویلا در کردان و مناطق اطراف مناسب برای یک دورهمی دوستانه یا خانوادگی.
                </p>
            </div>
        </MainField>
    );
};

export default SearchHeader;
