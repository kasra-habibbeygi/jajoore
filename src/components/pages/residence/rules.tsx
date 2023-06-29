import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './rules.style';
import CLockIcon from '@/assets/images/card/clock.svg';
import CLock1Icon from '@/assets/images/card/clock-1.svg';

// Component
import TitleField from '@/components/template/title';

const Rules = ({ data }: any) => {
    return (
        <MainField>
            <TitleField title='قوانین و مقررات اقامتگاه' />
            <div className='card_content'>
                <div>
                    <span>
                        <Image src={CLock1Icon} alt='' />
                        ساعت ورود
                    </span>
                    <p>{data.entryTime} ظهر تا نامحدود </p>
                </div>
                <div>
                    <span>
                        <Image src={CLockIcon} alt='' />
                        ساعت خروج
                    </span>
                    <p>{data.exitTime} ظهر</p>
                </div>
            </div>
        </MainField>
    );
};

export default Rules;
