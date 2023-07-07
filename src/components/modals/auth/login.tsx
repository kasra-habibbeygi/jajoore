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

const Login = () => {
    const dispatch = useDispatch();
    const ModalStatus = useSelector((state: RootState) => state.Utils.authModalStatus);

    const [inputValues, setInputValues] = useState({
        mobilePhone: '',
        passowrd: ''
    });

    const inputValueHandler = (e: any) => {};

    return (
        <ModalField
            onClose={() => dispatch(authStateHandler(''))}
            open={ModalStatus === 'login'}
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
                <div className='w-100'>
                    <Input label='رمز عبور' name='passowrd' value={inputValues.passowrd} setValue={inputValueHandler} />
                </div>
                <div className='links_field'>
                    <p>رمز عبور خود را فراموش کرده اید ؟ </p>
                    <p>ورود با رمز یکبار مصرف</p>
                </div>
                <div className='submit_button'>
                    <Button color='green'>ورود</Button>
                </div>
            </div>
        </ModalField>
    );
};

export default Login;
