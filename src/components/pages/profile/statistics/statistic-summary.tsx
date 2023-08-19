import React from 'react';

// Assets
import { MainField } from './header-summary.style';

const StatisticSummary = () => {
    return (
        <MainField>
            <div className='item'>
                <h4>پیامک ها</h4>
                <p>پیامک های ارسال شده: 0</p>
                <p>پیامک های منتظر تایید: 0</p>
                <p>پیامک های رد شده: 0</p>
            </div>
            <div className='item'>
                <h4>تیزر ها</h4>
                <p>تیزر های انجام شده: 0</p>
                <p>تیزر های منتظر تاریخ: 0</p>
                <p>تیزر فعال: 0</p>
            </div>
        </MainField>
    );
};

export default StatisticSummary;
