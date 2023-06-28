/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './info.style';
import HeartIcon from '@/assets/images/card/heart.svg';
import LocationIcon from '@/assets/images/card/location.svg';
import ShareIcon from '@/assets/images/card/share.svg';
import FastChargeIcon from '@/assets/images/card/fast-charge.svg';
import PlayIcon from '@/assets/images/card/play.svg';
import PlusIcon from '@/assets/images/card/plus.svg';
import VilaIcon from '@/assets/images/card/villa.svg';
import DoubleBedIcon from '@/assets/images/card/double-bed.svg';
import GroupUsersIcon from '@/assets/images/card/group-users.svg';
import StairsIcon from '@/assets/images/card/stairs.svg';
import MeterIcon from '@/assets/images/card/meter.svg';

// Component
import SelectComponent from '@/components/form-group/select';

// MUI
import { SelectChangeEvent } from '@mui/material';

const selectItems = [
    {
        label: '20% تخفیف برای رزرو بیشتر از 6 روز',
        value: 1
    },
    {
        label: '20% تخفیف برای رزرو بیشتر از 20 روز',
        value: 1
    }
];

const Info = () => {
    const selectValueHandler = (e: SelectChangeEvent) => {};

    return (
        <MainField>
            <div className='header'>
                <div className='right_field'>
                    <h1>
                        ویلا دوبلکس چهار خواب سهیلیه <span>VIP</span>
                    </h1>
                    <div className='location'>
                        <Image src={LocationIcon} alt='' />
                        البرز ، کردان
                    </div>
                </div>
                <div className='left_field'>
                    <Image src={HeartIcon} alt='' />
                    <Image src={ShareIcon} alt='' />
                </div>
            </div>
            <div className='midle_field'>
                <div className='code'>کد ویلا : 144</div>
                <div>
                    <SelectComponent
                        items={selectItems}
                        handler={selectValueHandler}
                        name='orderFilter'
                        valueKey='value'
                        state={selectItems[0].value}
                        itemKey='label'
                    />
                </div>
                <div className='pills_field'>
                    <span className='yellow'>
                        <Image src={FastChargeIcon} alt='' />
                        <p>رزرو آنی</p>
                    </span>
                    <span className='yellow_light'>
                        <Image src={PlusIcon} alt='' />
                        <p>پلاس</p>
                    </span>
                    <span className='red'>
                        <Image src={PlayIcon} alt='' />
                        <p>ویدیو</p>
                    </span>
                    <span className='green'>
                        <p> تضمین قیمت</p>
                    </span>
                </div>
            </div>
            <div className='details'>
                <div>
                    <Image src={VilaIcon} alt='' />
                    دربستی
                </div>
                <div>
                    <Image src={GroupUsersIcon} alt='' />
                    10 ~ 8
                </div>
                <div>
                    <Image src={DoubleBedIcon} alt='' />4 خواب
                </div>
                <div>
                    <Image src={StairsIcon} alt='' />2 طبقه
                </div>
                <div>
                    <Image src={MeterIcon} alt='' />
                    250 متر بنا
                </div>
                <div>
                    <Image src={MeterIcon} alt='' />
                    250 متر زمین
                </div>
            </div>
        </MainField>
    );
};

export default Info;
