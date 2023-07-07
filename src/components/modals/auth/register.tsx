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

const Register = () => {
    const dispatch = useDispatch();
    const ModalStatus = useSelector((state: RootState) => state.Utils.authModalStatus);

    const [inputValues, setInputValues] = useState({
        name: '',
        lastName: '',
        mobilePhone: '',
        nationalCode: '',
        password: '',
        confirmPassword: '',
        otp: ''
    });

    const inputValueHandler = (e: any) => {};

    return (
        <ModalField
            onClose={() => dispatch(authStateHandler(''))}
            open={ModalStatus === 'register'}
            disablePortal
            keepMounted
            fullWidth={true}
            scroll='body'
            maxWidth='sm'
        >
            <div className='main_field'>
                <div className='form_field'>
                    <div className='w-50'>
                        <Input label='نام' name='name' value={inputValues.name} setValue={inputValueHandler} />
                    </div>
                    <div className='w-50'>
                        <Input label='نام خانوادگی' name='lastName' value={inputValues.lastName} setValue={inputValueHandler} />
                    </div>
                    <div className='w-50'>
                        <Input label='شماره موبایل' name='mobilePhone' value={inputValues.mobilePhone} setValue={inputValueHandler} />
                    </div>
                    <div className='w-50'>
                        <Input label='کد ملی' name='nationalCode' value={inputValues.nationalCode} setValue={inputValueHandler} />
                    </div>
                    <div className='w-50'>
                        <Input label='رمز عبور' name='password' value={inputValues.password} setValue={inputValueHandler} />
                    </div>
                    <div className='w-50'>
                        <Input
                            label='تکرار رمز عبور'
                            name='confirmPassword'
                            value={inputValues.confirmPassword}
                            setValue={inputValueHandler}
                        />
                    </div>
                    <div className='otp_field'>
                        <Input label='کد تایید' name='otp' value={inputValues.otp} setValue={inputValueHandler} />
                        <Button color='green' type='outline'>
                            ارسال کد تایید
                        </Button>
                    </div>
                </div>
                <div className='submit_button'>
                    <Button color='green'>ثبت نام</Button>
                </div>
            </div>
        </ModalField>
    );
};

export default Register;
