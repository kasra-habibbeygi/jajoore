import React, { ChangeEvent, useState } from 'react';
import Axios from '@/configs/axios';

// Assets
import { MainField } from '@/assets/styles/profile/residence-registration/main.style';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import Filter from '@/components/template/filters/filter';
import ProfileLayoutProvider from '@/components/layout/profile-layout-provider';
import StagePill from '@/components/pages/profile/residence-registration/stage-pill';
import ConfirmButton from '@/components/pages/profile/residence-registration/confirm-buttom';
import Checkbox from '@/components/form-group/checkbox';
import Input from '@/components/form-group/input';

const ResidenceRegistrationStage4 = ({ popularDestinations }: any) => {
    const [checkboxValue, setCheckboxValue] = useState({
        test: false
    });

    const [inputValues, setInputValues] = useState({
        providence: null,
        title: '',
        description: ''
    });

    const checkboxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue({
            ...checkboxValue,
            [e.target.name]: e.target.checked
        });
    };

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    return (
        <LayoutProvider>
            <Filter popularDestinations={popularDestinations.result} filterStatus={false} />
            <ProfileLayoutProvider>
                <h3 style={{ fontWeight: '400' }}>مقررات</h3>
                <StagePill />
                <MainField>
                    <div className='header'>موارد ممنوعه</div>
                    <div className='w-50 p-0'>
                        <Checkbox
                            name='test'
                            handler={checkboxValueHandler}
                            label=' برگذاری جشن مهمانی های کوچک'
                            value={checkboxValue.test}
                        />
                    </div>
                    <div className='w-50 p-0'>
                        <Checkbox
                            name='test'
                            handler={checkboxValueHandler}
                            label='استعمال دخانیات ممنوع است (سیگار و قلیون)'
                            value={checkboxValue.test}
                        />
                    </div>
                    <div className='w-50 p-0'>
                        <Checkbox
                            name='test'
                            handler={checkboxValueHandler}
                            label='برگذاری جشن و مهمانی های بزرگ'
                            value={checkboxValue.test}
                        />
                    </div>
                    <div className='w-50 p-0'>
                        <Checkbox
                            name='test'
                            handler={checkboxValueHandler}
                            label='ورود حیوان خانگی ممنوع (پت های خانگی)'
                            value={checkboxValue.test}
                        />
                    </div>
                    <div className='header'>مقررات اقامتگاه</div>
                    <div className='w-50 p-0'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ارائه کارت ملی الزامیست' value={checkboxValue.test} />
                    </div>
                    <div className='w-50 p-0'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ارائه کارت ماشین الزامیست' value={checkboxValue.test} />
                    </div>
                    <div className='w-50 p-0'>
                        <Checkbox
                            name='test'
                            handler={checkboxValueHandler}
                            label='ارائه مدرک محرمیت الزامیست'
                            value={checkboxValue.test}
                        />
                    </div>
                    <div className='header'>مقررات اقامتگاه</div>
                    <div className='w-50'>
                        <Input name='title' setValue={inputValueHandler} value={inputValues.title} label='ساعت ورود مهمان' />
                    </div>
                    <div className='w-50'>
                        <Input name='title' setValue={inputValueHandler} value={inputValues.title} label='ساعت خروج مهمان' />
                    </div>
                    <div className='header'>مقررات اقامتگاه</div>
                    <div className='w-100 p-0'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='بدون عودت وجه' value={checkboxValue.test} />
                        <small className='check_box_helper'>
                            در صورتی که رزرو، کامل شود هیچ وجهی به مهمان عودت داده نمیشود و مهمان باید در انتخاب خود دقت کند .
                        </small>
                    </div>
                    <div className='w-100 p-0'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='سیاست سختگیرانه' value={checkboxValue.test} />
                        <small className='check_box_helper'>
                            در صورتی که رزرو, بیش از 5 روز کامل از تاریخ ورود لغو گردد, 10% صورتحساب به میزبان پرداخت میشود. درصورت لغو کمتر
                            از 5 روز به تاریخ ورود، اجاره شب اول بعلاوه 40 درصد از شب‌های باقیمانده به میزبان پرداخت می شود.
                        </small>
                    </div>
                    <div className='w-100 p-0'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='سیاست متعادل' value={checkboxValue.test} />
                        <small className='check_box_helper'>
                            در صورتی که رزرو, بیش از 3 روز کامل از تاریخ ورود لغو گردد, میزبان دریافتی ندارد. درصورت لغو کمتر از 3 روز به
                            تاریخ ورود، اجاره شب اول به میزبان پرداخت می شود.
                        </small>
                    </div>
                    <div className='w-100 p-0'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='سیاست سهلگیرانه' value={checkboxValue.test} />
                        <small className='check_box_helper'>
                            در صورتی که رزرو، بیش از ۲۴ ساعت از تاریخ ورود لغو گردد میزبان دریافتی ندارد. درصورت لغو کمتر از 24 ساعت به
                            تاریخ ورود، اجاره شب اول به میزبان پرداخت می شود.
                        </small>
                    </div>
                </MainField>
                <ConfirmButton />
            </ProfileLayoutProvider>
        </LayoutProvider>
    );
};

export default ResidenceRegistrationStage4;

export async function getServerSideProps() {
    const [popularDestinations] = await Promise.all([Axios.get('residence/popularDestinations')]);

    return {
        props: {
            popularDestinations: popularDestinations.data
        }
    };
}
