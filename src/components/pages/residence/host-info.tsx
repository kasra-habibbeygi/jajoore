import React from 'react';

// Assets
import { MainField } from './host-info.style';
import MocImg from '@/assets/images/moc/destination.jpg';
import Image from 'next/image';
import Button from '@/components/form-group/button';

const HostInfo = () => {
    return (
        <MainField>
            <div className='header_field'>
                <div className='avatar'>
                    <Image src={MocImg} alt='' />
                    <div>
                        <p>کسری حبیب بیگی</p>
                        <small>عضویت : از 29 اردیبهشت 1377</small>
                    </div>
                </div>
                <div className='left_field'>
                    <p>
                        سرعت پاسخگویی : <span>کمتر از 1 ثانیه</span>
                    </p>
                    <p>
                        میزارن تایید رزرو : <span>77 درصد</span>
                    </p>
                </div>
            </div>
            <Button type='outline'>مشاهده حساب کاربری مالک</Button>
        </MainField>
    );
};

export default HostInfo;
