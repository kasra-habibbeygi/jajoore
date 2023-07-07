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

const ForgetPassword = () => {
    const dispatch = useDispatch();
    const ModalStatus = useSelector((state: RootState) => state.Utils.authModalStatus);

    const [inputValues, setInputValues] = useState({
        mobilePhone: ''
    });

    const inputValueHandler = (e: any) => {};

    return (
        <ModalField
            onClose={() => dispatch(authModalStatusHandler(''))}
            open={ModalStatus === 'forget_password'}
            disablePortal
            keepMounted
            fullWidth={true}
            scroll='body'
            maxWidth='xs'
        >
            <div className='main_field'>
                <Input label='شماره موبایل' name='mobilePhone' value={inputValues.mobilePhone} setValue={inputValueHandler} />
                <div className='submit_button'>
                    <Button color='green'>ارسال لینک تغییر رمز عبور</Button>
                </div>
            </div>
        </ModalField>
    );
};

export default ForgetPassword;
