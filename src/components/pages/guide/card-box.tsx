import React from 'react';

//Assets
import { CardBoxStyle } from './card-box.style';
import img1 from '@/assets/images/guide/img1.svg';
import img2 from '@/assets/images/guide/img2.svg';
import img3 from '@/assets/images/guide/img3.svg';
import img4 from '@/assets/images/guide/img4.svg';

//Componnets
import Card from './card';

const CardBox = () => {
    return (
        <CardBoxStyle className='container'>
            <Card src={img2} title='حساب کاربری' text='راهنمای ثبت نام و تغییر گذرواژه و تایید حساب کاربری...' />
            <Card src={img4} title='میزبان شدن' text='راهنمای میزبانی و ثبت و تایید اقامتگاه و مدیریت آگهی ها...' />
            <Card src={img1} title='میهمان شدن' text='راهنمای رزرو اقامتگاه و طریقه پرداخت و دریافت تخفیف...' />
            <Card src={img3} title='ایمنی و اعتماد' text='به عنوان میزبان یا مهمان چه نکات ایمنی را باید رعایت کنیم...' />
        </CardBoxStyle>
    );
};

export default CardBox;
