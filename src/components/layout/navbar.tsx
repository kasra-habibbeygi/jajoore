import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import { NavbarField } from './navbar.style';
import LogoImg from '@/assets/images/logo.png';
import LoginIcon from '@/assets/images/layout/login.svg';
// import MobileLogo from '@/assets/images/mobile-logo.png';

// Component
import Button from '../form-group/button';

const Navbar = () => {
    return (
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
                <Button color='white' type='outline'>
                    <Image src={LoginIcon} alt='' />
                    ورود | ثبت نام
                </Button>
            </div>
        </NavbarField>
    );
};

export default Navbar;
