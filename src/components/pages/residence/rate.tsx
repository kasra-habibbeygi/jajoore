import React, { useEffect, useState } from 'react';

// Assets
import { MainField } from './rate.style';

// MUI
import { Rating } from '@mui/material';

// Component
import MuiRtlWraper from '@/components/mui-rtl-wraper';

const Rate = ({ attribute, score }: any) => {
    const [avrage, setAvrage] = useState<any>(0);

    useEffect(() => {
        setAvrage(() => {
            let avrage = 0;
            score.forEach((item: any) => (avrage += item.rating));
            return (avrage / score.length).toFixed(1);
        });
    }, [score]);

    return (
        <MainField>
            <header>
                <div className='right_field'>
                    <h3>امتیاز</h3>
                    <span>23 نفر</span>
                </div>
                <div>
                    {avrage}
                    <MuiRtlWraper>
                        <Rating name='size-small' readOnly defaultValue={4.5} precision={0.5} size='small' />
                    </MuiRtlWraper>
                </div>
            </header>
            <div className='attr_rate_list'>
                {attribute.map((item: any, index: number) => (
                    <div key={`rate_items_${item.id}`}>
                        <p>{item.name}</p>
                        <MuiRtlWraper>
                            <Rating name='size-small' readOnly defaultValue={4} precision={score[index].rating} size='small' />
                        </MuiRtlWraper>
                    </div>
                ))}
            </div>
        </MainField>
    );
};

export default Rate;
