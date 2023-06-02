import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './about-residence.style';
import DisinfectionIcon from '@/assets/images/icons/disinfection.svg';
import Appointment from '@/assets/images/icons/appointment.svg';
import Discount from '@/assets/images/icons/discount.svg';

// Component
import TitleField from '@/components/template/title';

const AboutResidence = () => {
    return (
        <MainField>
            <TitleField title='درباره اقامتگاه' />
            <p className='about_text'>
                این سوئیت مبله یکخوابه با پشت بام اختصاصی در طبقه دوم یک ساختمان دو طبقه و در منطقه ای دنج و آرام با فاصله حدود 5 کیلومتری
                از مرکز شهر اصفهان واقع شده است. میزبان این اقامتگاه در طبقه پایین همین ساختمان سکونت دارد و این منزل مبله با پیمودن حدود 15
                پله قابل دسترسی است، همچنین سوئیت فاقد پارکینگ می باشد، اما محیط اطراف ساختمان به دوربین مداربسته مجهز است و خیابانی که
                اقامتگاه در آن واقع شده برای پارک خودرو از امنیت مطلوبی برخوردار است.
            </p>
            <ul>
                <li>
                    <Image src={DisinfectionIcon} alt='' />
                    <div>
                        <p>اقامتکاه پلاس</p>
                        <small>
                            این اقامتگاه مطابق با پروتکل‌های بهداشتی نظافت و ضدعفونی می‌شود. خرید یک دست کامل ظروف + ملحفه هتلی + تشک هتلی +
                            پک های تک نفره
                        </small>
                    </div>
                </li>
                <li>
                    <Image src={Appointment} alt='' />
                    <div>
                        <p>رزرو فوری</p>
                        <small>در این روزها رزرو در یک مرحله و بدون نیاز به تایید میزبان قطعی می شود.</small>
                    </div>
                </li>
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
