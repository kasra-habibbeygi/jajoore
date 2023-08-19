import React from 'react';

// Assets
import { MainField } from './rate.style';

// Component
import StatisticProgress from './progress';

const StatisticRate = () => {
    return (
        <MainField>
            <header>
                <h4>امتیاز اقامتگاه ها</h4>
                <div>
                    <p>تعداد کل نظرات: 20</p>
                    <p>میانگین امتیازات: 5</p>
                </div>
            </header>
            <div className='progress_field'>
                <StatisticProgress title='صحت مطالب' subTitle='میزان درستی مطالب درج شده در مشخصات اقامتگاه' rate={3} />
                <StatisticProgress title='شیوه برخورد میزبان' subTitle='میهمان نوازی و نوع برخورد میزبان با میهمان' rate={4} />
                <StatisticProgress title='پاکیزگی اقامتگاه' subTitle='میزان پاکیزگی و نظافت اقامتگاه' rate={4} />
                <StatisticProgress title='مکان اقامتگاه' subTitle='مکان اقامتگاه' rate={5} />
                <StatisticProgress title='تحویل به موقع' subTitle='تحویل به موقع اقامتگاه به میهمان' rate={2} />
                <StatisticProgress title='کیفیت نسبت به نرخ' subTitle='میزان ارزش اقامتگاه نسبت به قیمت آن' rate={5} />
            </div>
        </MainField>
    );
};

export default StatisticRate;
