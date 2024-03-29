/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
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

// Hooks
import useElementOffset from '@/hooks/useOffset';

// Component
import DepartmentGuid from './department-guid';

const Info = ({ data }: any) => {
    const titleRef = useRef<HTMLDivElement>(null);
    const titleOffset = useElementOffset(titleRef);

    return (
        <>
            <DepartmentGuid titleOffset={titleOffset} />
            <MainField ref={titleRef} id='info'>
                <div className='header'>
                    <div className='right_field'>
                        <h1>
                            {data.title}
                            {data.vip && <span>VIP</span>}
                        </h1>
                        <div className='location'>
                            <Image src={LocationIcon} alt='' />
                            {data.provinceName} , {data.cityName}
                        </div>
                    </div>
                    <div className='left_field'>
                        <Image src={HeartIcon} alt='' />
                        <Image src={ShareIcon} alt='' />
                    </div>
                </div>
                <div className='midle_field'>
                    <div className='code'>کد ویلا : {data.residenceNO}</div>
                    <div className='pills_field'>
                        {data.instant && (
                            <span className='yellow'>
                                <Image src={FastChargeIcon} alt='' />
                                <p>رزرو آنی</p>
                            </span>
                        )}
                        {data.plus && (
                            <span className='yellow_light'>
                                <Image src={PlusIcon} alt='' />
                                <p>پلاس</p>
                            </span>
                        )}
                        {data.hasVideo && (
                            <span className='red'>
                                <Image src={PlayIcon} alt='' />
                                <p>ویدیو</p>
                            </span>
                        )}
                        {data.priceGuarantee && (
                            <span className='green'>
                                <p> تضمین قیمت</p>
                            </span>
                        )}
                    </div>
                </div>
                <div className='details'>
                    <div>
                        <Image src={VilaIcon} alt='' />
                        {data.privacyAndSecurityName}
                    </div>
                    <div>
                        <Image src={GroupUsersIcon} alt='' />
                        {data.capacity} ~ {data.maxCapacity}
                    </div>
                    <div>
                        <Image src={DoubleBedIcon} alt='' />
                        {data.numberOfRoom} خواب
                    </div>
                    <div>
                        <Image src={StairsIcon} alt='' />
                        {data.numberOfFloor} طبقه
                    </div>
                    <div>
                        <Image src={MeterIcon} alt='' />
                        {data.areaOfFloor} متر بنا
                    </div>
                    <div>
                        <Image src={MeterIcon} alt='' />
                        {data.areaOfPlot} متر زمین
                    </div>
                </div>
            </MainField>
        </>
    );
};

export default Info;
