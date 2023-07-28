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
import Input from '@/components/form-group/input';

const ResidenceRegistrationStage6 = ({ popularDestinations }: any) => {
    const [inputValues, setInputValues] = useState({
        providence: ''
    });

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
                    <h3>ظرفیت</h3>
                    <div className='w-50'>
                        <Input
                            name='providence'
                            setValue={inputValueHandler}
                            value={inputValues.providence}
                            label='ظرفیت حداقل نفرات'
                            mode='numeric'
                            maxLength={2}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            name='providence'
                            setValue={inputValueHandler}
                            value={inputValues.providence}
                            label='ظرفیت حداکثر نفرات'
                            mode='numeric'
                            maxLength={2}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            name='providence'
                            setValue={inputValueHandler}
                            value={inputValues.providence}
                            label='تعداد اتاق ها'
                            mode='numeric'
                            maxLength={2}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            name='providence'
                            setValue={inputValueHandler}
                            value={inputValues.providence}
                            label='تعداد تخت خواب 2 نفره'
                            mode='numeric'
                            maxLength={2}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            name='providence'
                            setValue={inputValueHandler}
                            value={inputValues.providence}
                            label='تعداد تخت خواب 1 نفره'
                            mode='numeric'
                            maxLength={2}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            name='providence'
                            setValue={inputValueHandler}
                            value={inputValues.providence}
                            label='تعداد مبل تخت شو'
                            mode='numeric'
                            maxLength={2}
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            name='providence'
                            setValue={inputValueHandler}
                            value={inputValues.providence}
                            label='تعداد رخت خواب'
                            mode='numeric'
                            maxLength={2}
                        />
                    </div>
                </MainField>
                <ConfirmButton />
            </ProfileLayoutProvider>
        </LayoutProvider>
    );
};

export default ResidenceRegistrationStage6;

export async function getServerSideProps() {
    const [popularDestinations] = await Promise.all([Axios.get('residence/popularDestinations')]);

    return {
        props: {
            popularDestinations: popularDestinations.data
        }
    };
}
