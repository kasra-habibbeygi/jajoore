/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state-manager/store';
import { authStateHandler } from '@/state-manager/reducer/user';

// Assets
import { ModalField } from './auth.style';

// Component
import Input from '@/components/form-group/input';
import Button from '@/components/form-group/button';

const LoginRegisterModal = () => {
    const dispatch = useDispatch();
    const ModalStatus = useSelector((state: RootState) => state.Utils.authModalStatus);

    const [inputValues, setInputValues] = useState({
        mobilePhone: ''
    });

    const inputValueHandler = (e: any) => {};

    return (
        <ModalField
            onClose={() => dispatch(authStateHandler(''))}
            open={ModalStatus === 'mobile_login_register'}
            disablePortal
            keepMounted
            fullWidth={true}
            scroll='body'
            maxWidth='xs'
        >
            <div className='main_field'>
                <h3>ثبت نام / ورود</h3>
                <Input label='شماره موبایل' name='mobilePhone' value={inputValues.mobilePhone} setValue={inputValueHandler} />
                <div className='submit_button'>
                    <Button color='green'>تایید شماره موبایل</Button>
                </div>
            </div>
        </ModalField>
    );
};

export default LoginRegisterModal;
