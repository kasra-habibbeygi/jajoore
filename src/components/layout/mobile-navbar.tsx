import React from 'react';

// Assets
import { MobileNavbarField } from './mobile-navbar.style';
import Image from 'next/image';
import HomePlusIcon from '@/assets/images/side-bars/home-plus.svg';
import HomeIcon from '@/assets/images/side-bars/home.svg';
import QuestionIcon from '@/assets/images/side-bars/question.svg';
import LoginIcon from '@/assets/images/layout/login.svg';
import MapIcon from '@/assets/images/layout/map.svg';
import Link from 'next/link';

const MobileNavbar = () => {
    return (
        <MobileNavbarField>
            <ol>
                <li>
                    <Link href='/'>
                        <Image src={LoginIcon} alt='' />
                        ورود | ثبت نام
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <Image src={HomePlusIcon} alt='' />
                        میزبان شوید
                    </Link>
                </li>
                <li>
                    <Link href='/' className='middle_one'>
                        <span>
                            <Image src={MapIcon} alt='' />
                        </span>
                        نقشه
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <Image src={QuestionIcon} alt='' />
                        راهنما
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <Image src={HomeIcon} alt='' />
                        صفحه اصلی
                    </Link>
                </li>
            </ol>
        </MobileNavbarField>
    );
};

export default MobileNavbar;
