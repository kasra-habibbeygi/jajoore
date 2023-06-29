import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './rate-per-person.style';
import DiscountIcon from '@/assets/images/card/discount.svg';

// Component
import TitleField from '@/components/template/title';

const RatePerPerson = ({ data }: any) => {
    const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (
        <MainField>
            <TitleField
                title={`نرخ هر نفر اضافه: +${domLoaded && parseInt(data.extraPeoplePrice).toLocaleString()} تومان / بیشتر از 4 نفر`}
            />
            <div className='card_content'>
                <div>
                    <Image src={DiscountIcon} alt='' />
                    <p>تخفیف رزرو بیش از 7 شب: {data.oneWeekDiscountPercent} درصد</p>
                </div>
                <div>
                    <Image src={DiscountIcon} alt='' />
                    <p>تخفیف رزرو بیش از 30 شب: {data.oneMonthDiscountPercent} درصد</p>
                </div>
            </div>
            <div className='info'>
                <p>ظرفیت حداقل نفرات: {data.capacity} نفر</p>
                <p>حداکثر نفرات: {data.maxCapacity} نفر</p>
            </div>
        </MainField>
    );
};

export default RatePerPerson;
