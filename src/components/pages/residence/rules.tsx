import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './rules.style';
import CLockIcon from '@/assets/images/card/clock.svg';
import CLock1Icon from '@/assets/images/card/clock-1.svg';

// Component
import TitleField from '@/components/template/title';

const Rules = () => {
    return (
        <MainField>
            <TitleField title='نرخ هر نفر اضافه: +300٬000 تومان / بیشتر از 4 نفر' />
            <div className='card_content'>
                <div>
                    <span>
                        <Image src={CLock1Icon} alt='' />
                        ساعت ورود
                    </span>
                    <p> ظهر تا نامحدود</p>
                </div>
                <div>
                    <span>
                        <Image src={CLockIcon} alt='' />
                        ساعت خروج
                    </span>
                    <p> ظهر تا نامحدود</p>
                </div>
            </div>
        </MainField>
    );
};

export default Rules;
