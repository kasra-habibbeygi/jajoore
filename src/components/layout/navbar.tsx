import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { authModalStatusHandler } from '@/state-manager/reducer/utils';

// Assets
import { NavbarField } from './navbar.style';
import LogoImg from '@/assets/images/logo.png';
import LoginIcon from '@/assets/images/layout/login.svg';

// Component
import Button from '../form-group/button';
import Register from '../modals/auth/register';
import LoginRegisterModal from '../modals/auth/login-register';
import Login from '../modals/auth/login';
import LoginWithOTP from '../modals/auth/otp';
import ForgetPassword from '../modals/auth/forget-password';

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <>
            <NavbarField>
                <div className='right_right'>
                    <Image src={LogoImg} alt='لوگوی جاجوره' className='main_logo' width={200} height={100} />
                    <ol>
                        <li>
                            <Link href='/' className='active'>
                                اجاره ویلا
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>اجاره آپارتمان</Link>
                        </li>
                        <li>
                            <Link href='/'>بوم گردی</Link>
                        </li>
                        <li>
                            <Link href='/'>هتل آپارتمان</Link>
                        </li>
                        <li>
                            <Link href='/'>بوتیک هتل</Link>
                        </li>
                        <li>
                            <Link href='/'>کلبه چوبی</Link>
                        </li>
                    </ol>
                </div>
                <div className='left_field'>
                    <Button color='white' type='outline' handler={() => dispatch(authModalStatusHandler('mobile_login_register'))}>
                        <Image src={LoginIcon} alt='' />
                        ورود | ثبت نام
                    </Button>
                </div>
            </NavbarField>
            <Register />
            <Login />
            <LoginWithOTP />
            <LoginRegisterModal />
            <ForgetPassword />
        </>
    );
};

export default Navbar;
