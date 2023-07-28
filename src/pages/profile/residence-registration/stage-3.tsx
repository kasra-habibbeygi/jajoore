import React, { useState } from 'react';
import Axios from '@/configs/axios';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import Filter from '@/components/template/filters/filter';
import ProfileLayoutProvider from '@/components/layout/profile-layout-provider';
import ConfirmButton from '@/components/pages/profile/residence-registration/confirm-buttom';
import StagePill from '@/components/pages/profile/residence-registration/stage-pill';
import Checkbox from '@/components/form-group/checkbox';

// Assets
import { MainField } from '@/assets/styles/profile/residence-registration/main.style';

const ResidenceRegistrationStage3 = ({ popularDestinations }: any) => {
    const [checkboxValue, setCheckboxValue] = useState({
        test: false
    });

    const checkboxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue({
            ...checkboxValue,
            [e.target.name]: e.target.checked
        });
    };

    return (
        <LayoutProvider>
            <Filter popularDestinations={popularDestinations.result} filterStatus={false} />
            <ProfileLayoutProvider>
                <h3 style={{ fontWeight: '400' }}>ثبت اقامتگاه جدید</h3>
                <StagePill />
                <MainField>
                    <h3>امکانات اقامتگاه</h3>
                    <div className='header'>سرویس بهداشتی</div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ایرانی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='فرنگی' value={checkboxValue.test} />
                    </div>
                    <div className='header'>چشم انداز</div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به جنگل' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به رودخانه' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به کوهستان' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به دریا' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به روستا' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به دریاچه' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به شهر' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='بدون ویو' value={checkboxValue.test} />
                    </div>
                    <div className='header'>منطقه اقامتگاه</div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به جنگل' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به رودخانه' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به کوهستان' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به دریا' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به روستا' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به دریاچه' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ویو به شهر' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='بدون ویو' value={checkboxValue.test} />
                    </div>
                    <div className='header'>امکانات</div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='اینترنت' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='یخچال' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='پکیج دیواری' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='بخاری' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ماشین ظرف شویی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شومینه گازی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='فضای نشیمن در محوطه' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ماشین لباسشویی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شومینه هیزمی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='گرمایش از کف' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='پارکینگ' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شوفاژ' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='استخر روزباز چهارفصل' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='سشوار' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='استخر سرپوشیده' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='میز ناهارخوری' value={checkboxValue.test} />
                    </div>
                    <div className='header'>لوازم بازی</div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='اینترنت' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='یخچال' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='پکیج دیواری' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='بخاری' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ماشین ظرف شویی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شومینه گازی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='فضای نشیمن در محوطه' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ماشین لباسشویی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شومینه هیزمی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='گرمایش از کف' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='پارکینگ' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شوفاژ' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='استخر روزباز چهارفصل' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='سشوار' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='استخر سرپوشیده' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='میز ناهارخوری' value={checkboxValue.test} />
                    </div>
                    <div className='header'>حریم خصوصی و امنیت</div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='اینترنت' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='یخچال' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='پکیج دیواری' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='بخاری' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ماشین ظرف شویی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شومینه گازی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='فضای نشیمن در محوطه' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ماشین لباسشویی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شومینه هیزمی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='گرمایش از کف' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='پارکینگ' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شوفاژ' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='استخر روزباز چهارفصل' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='سشوار' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='استخر سرپوشیده' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='میز ناهارخوری' value={checkboxValue.test} />
                    </div>
                    <div className='header'>انشعابات</div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='اینترنت' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='یخچال' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='پکیج دیواری' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='بخاری' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ماشین ظرف شویی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شومینه گازی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='فضای نشیمن در محوطه' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='ماشین لباسشویی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شومینه هیزمی' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='گرمایش از کف' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='پارکینگ' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='شوفاژ' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='استخر روزباز چهارفصل' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='سشوار' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='استخر سرپوشیده' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='میز ناهارخوری' value={checkboxValue.test} />
                    </div>
                </MainField>
                <ConfirmButton />
            </ProfileLayoutProvider>
        </LayoutProvider>
    );
};

export default ResidenceRegistrationStage3;

export async function getServerSideProps() {
    const [popularDestinations] = await Promise.all([Axios.get('residence/popularDestinations')]);

    return {
        props: {
            popularDestinations: popularDestinations.data
        }
    };
}
