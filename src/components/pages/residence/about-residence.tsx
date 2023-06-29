import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './about-residence.style';
import DisinfectionIcon from '@/assets/images/icons/disinfection.svg';
import Appointment from '@/assets/images/icons/appointment.svg';
import Discount from '@/assets/images/icons/discount.svg';

// Component
import TitleField from '@/components/template/title';

const AboutResidence = ({ data }: any) => {
    return (
        <MainField>
            <TitleField title='درباره اقامتگاه' />
            <p className='about_text'>{data.content}</p>
            <ul>
                {data.plus && (
                    <li>
                        <Image src={DisinfectionIcon} alt='' />
                        <div>
                            <p>اقامتکاه پلاس</p>
                            <small>
                                این اقامتگاه مطابق با پروتکل‌های بهداشتی نظافت و ضدعفونی می‌شود. خرید یک دست کامل ظروف + ملحفه هتلی + تشک
                                هتلی + پک های تک نفره
                            </small>
                        </div>
                    </li>
                )}

                {data.instant && (
                    <li>
                        <Image src={Appointment} alt='' />
                        <div>
                            <p>رزرو فوری</p>
                            <small>در این روزها رزرو در یک مرحله و بدون نیاز به تایید میزبان قطعی می شود.</small>
                        </div>
                    </li>
                )}

                <li>
                    <Image src={Discount} alt='' />
                    <div>
                        <p>رزرو لحظه آخری</p>
                        <small>این اقامتگاه لحظه اخری است.</small>
                    </div>
                </li>
            </ul>
        </MainField>
    );
};

export default AboutResidence;
