import React, { useState } from 'react';

// Assets
import { MainField } from './about-us.style';

// Component
import Button from '@/components/form-group/button';

// MUI
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const AboutUs = () => {
    const [heightStatus, setHeightStatus] = useState(false);

    return (
        <MainField heightStatus={heightStatus}>
            <article>
                <p>
                    جاجوره سایت آگهی اجاره ویلا و سوئیت جهت اقامت روزانه مسافران با هدف ارتباط بیواسطه مسافر با میزبان و بدون پرداخت پورسانت
                    و کمیسیون می‌باشد. در سایت جاجوره، فهرستی از آگهی‌های اجاره ویلا و اجاره سوئیت - آپارتمان را مشاهده خواهید کرد که به ۲
                    دسته تقسیم میشود آگهی های ویژه و آگهی های VIP که توسط مالک و یا کیوسک اجاره ویلا ثبت شده‌اند. افرادی که با لیبل (آگهی
                    ویژه و VIP) در سایت جاجوره، آگهی اجاره ویلا درج کرده‌اند به روش‌های گوناگون توسط جاجوره شناسایی و احراز هویت شده‌اند.
                    اگر تلفن همراه اعتباری در آگهی درج شده است، اطمینان داشته باشید که قبلا .کارت ملی، نشانی و شماره تلفن ثابت آگهی دهنده
                    توسط تیم ما (جاجوره) بررسی و احراز هویت شده و جهت پیگیری‌های بعدی محفوظ می‌باشد
                </p>
                <p>
                    آگهی های VIP بعد از مشخص کردن درجه ویلا و تایید تیم جاجوره وارد دسته VIP میشوند و جز بهترین اقامتگاها در هر شهر میباشند.
                    تضمین کیفیت انها توسط جاجوره انجام میشود (و در صورت نا رضایتی مهمان با ارسال عکس از اقامتگاه مبلغ واریز شده برای بیعانه
                    از طرف سایت عودت میشود) برایه آگهی ویژه جهت درج آگهی اجاره اقامتگاه، لازم است كه به عنوان كاربر ثبت نام كنید. پس از درج
                    آگهی ویژه، اگر مایل بودید که آگهی شما بیشتر دیده شود می توانید آگهی خود را با امکانات جاجوره ارتقا بدهید. درآمد سایت
                    جاجوره از محل نمایش آگهی VIP و ویژه می باشد. سایت جاجوره منفعتی در قراردادهای اجاره منعقده بین مسافر و میزبان در آگهی ها
                    ندارد
                </p>
                <p>
                    و صرفا نمایش دهنده آگهی ها می باشد. هیچ یک از واحدهای اقامتی ثبت شده در سایت جاجوره، متعلق به جاجوره نمی باشند و توسط
                    کاربران در سایت درج شده اند و فقط صحت حضور مالکین و اقامتکاها را تایید میکند و در صورت کنسل کردن مالک و پاسخگو نبودن در
                    صورت بروز مشکل جاجوره از طرف اقامتگاها مبلغ واریز شده بیعانه عودت میدهد با خیال راحت بهترین گذینه را انتخاب کنید و
                    مستقیم با او در تماس باشید بدون کمیسیون خودتان بهترین گذینه را انتخاب کنید و ۰ تا ۱۰۰ مراحل را پیش ببرید.
                </p>
            </article>
            <Button handler={() => setHeightStatus(!heightStatus)}>
                بیشتر بخوانید <KeyboardArrowDownRoundedIcon />
            </Button>
        </MainField>
    );
};

export default AboutUs;
