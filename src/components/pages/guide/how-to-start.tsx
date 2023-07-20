import React from 'react';
import Image from 'next/image';

//Assets
import { HowToStartStyle } from './how-to-start.style';
import startMap from '@/assets/images/guide/Capture.svg';

const HowToStart = () => {
    return (
        <HowToStartStyle className='container'>
            <div className='text'>
                <h2>راهنما</h2>
                <h3>چطور با جاجوره شروع کنم ؟</h3>
            </div>
            <Image src={startMap} alt='' />
        </HowToStartStyle>
    );
};

export default HowToStart;
