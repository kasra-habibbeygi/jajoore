import React from 'react';

// Assets
import { MainField } from './progress.style';

// Types
interface StatisticProgressTypes {
    title: string;
    subTitle: string;
    rate: number;
    maxRate?: number;
}

const StatisticProgress = ({ title, subTitle, rate, maxRate = 5 }: StatisticProgressTypes) => {
    return (
        <MainField rate={rate} maxRate={maxRate}>
            <h5>{title}</h5>
            <small>{subTitle}</small>
            <div className='progress'>
                <div className='pill'>
                    <span></span>
                </div>
                <p className='title'>
                    {rate} از {maxRate}
                </p>
            </div>
        </MainField>
    );
};

export default StatisticProgress;
