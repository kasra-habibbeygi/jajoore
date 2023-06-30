import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './search-header.style';
import MocImg from '@/assets/images/moc/bg.jpg';

const SearchHeader = () => {
    return (
        <MainField>
            <Image src={MocImg} alt='' className='image_field' width={1000} height={300} />
            <div className='left_field'></div>
        </MainField>
    );
};

export default SearchHeader;
