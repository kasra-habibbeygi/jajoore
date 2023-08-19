/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Image from 'next/image';

//Assets
import { ReservationDetailsStyle } from '@/assets/styles/profile/reservation-details.style';
import location from '@/assets/images/profile/ReservationDetails/location-pin.svg';
import house from '@/assets/images/profile/ReservationDetails/house.svg';
import villa from '@/assets/images/profile/ReservationDetails/villa.svg';
import coin from '@/assets/images/profile/ReservationDetails/dollar-coin.svg';
import villaImage from '@/assets/images/profile/ReservationDetails/b2a652c2825f4358b6bb2adee39059f8.png';
import user from '@/assets/images/profile/aside/userImage.jpeg';
import calendar from '@/assets/images/profile/aside/calendar.svg';
import clock from '@/assets/images/profile/ReservationDetails/clock.svg';
import group from '@/assets/images/profile/ReservationDetails/group.svg';

// Component
import ProfileLayoutProvider from '@/components/layout/profile-layout-provider';
import LayoutProvider from '@/components/layout/layout-provider';
import Button from '@/components/form-group/button';
import { green } from '@mui/material/colors';

const ReservationDetails = () => {
    const [progressStatus, setProgressStatus] = useState('2');
    return (
        <LayoutProvider>
            <ProfileLayoutProvider>
                <ReservationDetailsStyle>
                    <div className='titleBox'>
                        <h2>جزییات رزرو</h2>
                        <Button color='primary' type='filled'>
                            بازگشت
                        </Button>
                    </div>
                    <div className='main_content'>
                        <div className='right_box'>
                            <div className='advertising_title'>
                                <p>
                                    عنوان آگهی:
                                    <span>اجاره ویلای استخردار آب گرم</span>
                                </p>
                                <div className='botton_field'>دریافتی</div>
                            </div>
                            <div className='details'>
                                <section>
                                    <Image src={location} alt='ایکون' />
                                    <p>
                                        استان : <span>البرز</span>
                                    </p>
                                </section>
                                <section>
                                    <Image src={location} alt='ایکون' />
                                    <p>
                                        منطقه : <span>کردان</span>
                                    </p>
                                </section>
                                <section>
                                    <Image src={house} alt='ایکون' />
                                    <p>
                                        دسته بندی : <span>ویلا</span>
                                    </p>
                                </section>
                                <section>
                                    <Image src={villa} alt='ایکون' />
                                    <p>
                                        نوع رزرو : <span>درگاه پرداخت / نقدی</span>
                                    </p>
                                </section>
                            </div>
                            <div className='price'>
                                <section>
                                    <Image src={coin} alt='ایکون' />
                                    <p>
                                        مبلغ کل : <span> 3.000.000 تومان</span>
                                    </p>
                                </section>
                                <section>
                                    <Image src={coin} alt='ایکون' />
                                    <p>
                                        سهم شما : <span> 2.700.000 تومان</span>
                                    </p>
                                </section>
                                <section>
                                    <Image src={coin} alt='ایکون' />
                                    <p>
                                        مبلغ بیعانه : <span> 300.000 تومان</span>
                                    </p>
                                </section>
                                <section>
                                    <Image src={coin} alt='ایکون' />
                                    <p>
                                        مبلغ مانده : <span> 2.500.000 تومان</span>
                                    </p>
                                </section>
                            </div>
                            <p className='alert'>
                                نصف مبلغ اجاره اقامتگاه توسط سایت دریافت میشود و تازمان تایید مهمان سهم مالک در حساب بلوکه اضاف میشود و بعد
                                از تایید مهمان به کیف اضاف میگردد و نصف دیگر مبلغ موقع تحویل توسط خود دریافت میشود.
                            </p>
                        </div>
                        <div className='left_box'>
                            <Image alt='تصویر ویلا' src={villaImage} />
                            <div className='btn_box'>
                                <p className='code'>
                                    کد اقامتگاه : <span>564</span>
                                </p>
                                <p className={`${progressStatus === '1' ? 'red_status' : 'greenStatus'} status`}>
                                    وضعیت : <span>رزرو کامل</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='user_details'>
                        <div className='right_box_user_details'>
                            <div className='user'>
                                <span> دریافتی از: </span>
                                <Image src={user} alt='' />
                                <span>حمیدرضا رییسی</span>
                            </div>
                            <div className='time'>
                                <Image src={calendar} alt='' />
                                <p>
                                    ورود : <span>سه شنبه 13 دی 1401</span> - <span> 12:30</span>
                                </p>
                            </div>
                            <div className='time'>
                                <Image src={calendar} alt='' />
                                <p>
                                    خروج : <span>سه شنبه 13 دی 1401</span> - <span> 14:30</span>
                                </p>
                            </div>
                            <div className='time_box'>
                                <div className='time'>
                                    <Image src={clock} alt='' />
                                    <span>ساعت ورود : </span>
                                    <span>14:30</span>
                                </div>
                                <div className='time'>
                                    <Image src={clock} alt='' />
                                    <span>ساعت ورود : </span>
                                    <span>14:30</span>
                                </div>
                            </div>
                        </div>
                        <div className='left_box_user_details'>
                            <div className='reservation_number'>
                                شماره رزرو : <span>34353</span>
                            </div>
                            <div className='time'>
                                <Image src={clock} alt='' />
                                <span>مدت زمان : </span>
                                <span>دو شب</span>
                            </div>
                            <div className='guest'>
                                <Image src={group} alt='' />
                                <span>تعداد مهمان : </span>
                                <span>8 نفر</span>
                            </div>
                        </div>
                    </div>
                </ReservationDetailsStyle>
            </ProfileLayoutProvider>
        </LayoutProvider>
    );
};

export default ReservationDetails;
