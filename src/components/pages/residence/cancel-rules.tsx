import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './cancel-rules.style';
import BookIcon from '@/assets/images/card/book.svg';

// Components
import TitleField from '@/components/template/title';

const CancelRules = () => {
    return (
        <MainField>
            <TitleField title='قوانین کنسلی' />
            <div className='content'>
                <Image src={BookIcon} alt='' />
                <h6>سیاست سختگیرانه</h6>
                <p>
                    در صورتی که رزرو, بیش از 5 روز کامل از تاریخ ورود لغو گردد, 10% صورتحساب به میزبان پرداخت . درصورت لغو کمتر از 5 روز به
                    تاریخ ورود، اجاره شب اول بعلاوه 40 درصد از شب‌های باقیمانده به میزبان پرداخت می شود.
                </p>
            </div>
        </MainField>
    );
};

export default CancelRules;
