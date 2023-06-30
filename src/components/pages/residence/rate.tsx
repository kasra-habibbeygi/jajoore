import React from 'react';

// Assets
import { MainField } from './rate.style';

// MUI
import { Rating } from '@mui/material';

// Component
import MuiRtlWraper from '@/components/mui-rtl-wraper';

const Rate = ({ attribute, data }: any) => {
    return (
        <MainField>
            <header>
                <div className='right_field'>
                    <h3>امتیاز</h3>
                    <span>{data.numberScore} نفر</span>
                </div>
                <div>
                    {data.averageScore}
                    <MuiRtlWraper>
                        <Rating name='size-small' readOnly defaultValue={data.averageScore} precision={0.5} size='small' />
                    </MuiRtlWraper>
                </div>
            </header>
            <div className='attr_rate_list'>
                {attribute.map((item: any, index: number) => (
                    <div key={`rate_items_${item.id}`}>
                        <p>{item.name}</p>
                        <MuiRtlWraper>
                            <Rating name='size-small' readOnly defaultValue={4} precision={data?.scores[index]?.rating} size='small' />
                        </MuiRtlWraper>
                    </div>
                ))}
            </div>
        </MainField>
    );
};

export default Rate;
