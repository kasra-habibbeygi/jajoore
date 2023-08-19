import React from 'react';

// Assets
import { MainField, PageHeader } from './header-summary.style';

const StatisticHeaderSummary = () => {
    return (
        <>
            <PageHeader>آمار</PageHeader>
            <MainField>
                <div className='item'>
                    <h4>کل درخواست رزرو</h4>
                    <p>تایید شده: 0</p>
                    <p>کنسل شده: 0</p>
                </div>
                <div className='item'>
                    <h4>مهمان</h4>
                    <p>0 مهمان</p>
                    <p>تعداد کل مهمان هایی که تا کنون داشتید</p>
                </div>
                <div className='item'>
                    <h4>شب اقامتگاه</h4>
                    <p>0 شب</p>
                    <p>تعداد کل شب های رزرو شده در جاجوره</p>
                </div>
            </MainField>
        </>
    );
};

export default StatisticHeaderSummary;
