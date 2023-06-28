import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './rate-per-person.style';
import DiscountIcon from '@/assets/images/card/discount.svg';

// Component
import TitleField from '@/components/template/title';

const RatePerPerson = () => {
    return (
        <MainField>
            <TitleField title='نرخ هر نفر اضافه: +300٬000 تومان / بیشتر از 4 نفر' />
            <div className='card_content'>
                <div>
                    <Image src={DiscountIcon} alt='' />
                    <p>تخفیف رزرو بیش از 6 شب: 5 درصد</p>
                </div>
                <div>
                    <Image src={DiscountIcon} alt='' />
                    <p>تخفیف رزرو بیش از 30 شب: 7 درصد</p>
                </div>
            </div>
            <div className='info'>
                <p>ظرفیت حداقل نفرات: 8 نفر</p>
                <p>حداکثر نفرات: 12 نفر</p>
            </div>
        </MainField>
    );
};

export default RatePerPerson;
