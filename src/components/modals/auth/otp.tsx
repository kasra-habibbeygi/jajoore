/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state-manager/store';
import { authModalStatusHandler } from '@/state-manager/reducer/utils';

// Assets
import { ModalField } from './auth.style';

// Component
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

const LoginWithOTP = () => {
    const dispatch = useDispatch();
    const ModalStatus = useSelector((state: RootState) => state.Utils.authModalStatus);

    const [inputValues, setInputValues] = useState({
        mobilePhone: '',
        otp: ''
    });

    const inputValueHandler = (e: any) => {};

    return (
        <ModalField
            onClose={() => dispatch(authModalStatusHandler(''))}
            open={ModalStatus === 'otp'}
            disablePortal
            keepMounted
            fullWidth={true}
            scroll='body'
            maxWidth='xs'
        >
            <div className='main_field'>
                <div className='w-100'>
                    <Input label='شماره موبایل' name='mobilePhone' value={inputValues.mobilePhone} setValue={inputValueHandler} />
                </div>
                <div className='otp_field'>
                    <Input label='کد تایید' name='otp' value={inputValues.otp} setValue={inputValueHandler} />
                    <Button color='green' type='outline'>
                        ارسال کد تایید
                    </Button>
                </div>
                <div className='submit_button'>
                    <Button color='green'>ورود</Button>
                </div>
            </div>
        </ModalField>
    );
};

export default LoginWithOTP;
