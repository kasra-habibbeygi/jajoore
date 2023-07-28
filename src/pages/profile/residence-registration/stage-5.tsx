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
import Textarea from '@/components/form-group/textarea';

const ResidenceRegistrationStage4 = ({ popularDestinations }: any) => {
    const [checkboxValue, setCheckboxValue] = useState({
        test: false
    });

    const [inputValues, setInputValues] = useState({
        providence: ''
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
                <h3 style={{ fontWeight: '400' }}>ثبت اقامتگاه جدید</h3>
                <StagePill />
                <MainField>
                    <h3>ایمنی</h3>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='منشور خانه مسافر' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='جعبه کمک های اولیه' value={checkboxValue.test} />
                    </div>
                    <div className='w-25'>
                        <Checkbox name='test' handler={checkboxValueHandler} label='کپسول آتش نشانی' value={checkboxValue.test} />
                    </div>
                    <div className='w-100'>
                        <Textarea
                            name='providence'
                            value={inputValues.providence}
                            onChange={inputValueHandler}
                            label='توضیحات بیشتر (اختیاری)'
                        />
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
