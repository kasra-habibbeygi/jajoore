import React from 'react';

// Assets
import { MainField } from './rate.style';

// MUI
import { Rating } from '@mui/material';

// Component
import MuiRtlWraper from '@/components/mui-rtl-wraper';

const Rate = () => {
    return (
        <MainField>
            <header>
                <div className='right_field'>
                    <h3>امتیاز</h3>
                    <span>23 نفر</span>
                </div>
                <div>
                    4.7
                    <MuiRtlWraper>
                        <Rating name='size-small' readOnly defaultValue={4.5} precision={0.5} size='small' />
                    </MuiRtlWraper>
                </div>
            </header>
            <div className='attr_rate_list'>
                <div>
                    <p>صحت مطالب</p>
                    <MuiRtlWraper>
                        <Rating name='size-small' readOnly defaultValue={5} precision={0.5} size='small' />
                    </MuiRtlWraper>
                </div>
                <div>
                    <p>پاکیزگی اقامتگاه</p>
                    <MuiRtlWraper>
                        <Rating name='size-small' readOnly defaultValue={4} precision={0.5} size='small' />
                    </MuiRtlWraper>
                </div>
                <div>
                    <p>تحویل اقامتگاه</p>
                    <MuiRtlWraper>
                        <Rating name='size-small' readOnly defaultValue={5} precision={0.5} size='small' />
                    </MuiRtlWraper>
                </div>
                <div>
                    <p>شیوه برخورد میزبان</p>
                    <MuiRtlWraper>
                        <Rating name='size-small' readOnly defaultValue={3.5} precision={0.5} size='small' />
                    </MuiRtlWraper>
                </div>
                <div>
                    <p>مکان اقامتگاه</p>
                    <MuiRtlWraper>
                        <Rating name='size-small' readOnly defaultValue={5} precision={0.5} size='small' />
                    </MuiRtlWraper>
                </div>
                <div>
                    <p>کیفیت نسبت به نرخ </p>
                    <MuiRtlWraper>
                        <Rating name='size-small' readOnly defaultValue={3} precision={0.5} size='small' />
                    </MuiRtlWraper>
                </div>
            </div>
        </MainField>
    );
};

export default Rate;
