import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//Assets
import { ProfileAsideStyle } from './profile-aside.style';
import Button from '../form-group/button';
import bell from '@/assets/images/profile/aside/bell.svg';
import calendar from '@/assets/images/profile/aside/calendar.svg';
import chat from '@/assets/images/profile/aside/chat.svg';
import diagram from '@/assets/images/profile/aside/diagram.svg';
import heart from '@/assets/images/profile/aside/heart.svg';
import home from '@/assets/images/profile/aside/home.svg';
import logout from '@/assets/images/profile/aside/logout.svg';
import menu from '@/assets/images/profile/aside/menu.svg';
import notification from '@/assets/images/profile/aside/notification.svg';
import question from '@/assets/images/profile/aside/question.svg';
import shopping from '@/assets/images/profile/aside/shopping-bag.svg';
import user from '@/assets/images/profile/aside/user.svg';
import wallet from '@/assets/images/profile/aside/wallet.svg';
import userImage from '@/assets/images/profile/aside/userImage.jpeg';

const ProfileAside = () => {
    return (
        <ProfileAsideStyle>
            <ul>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={menu} alt='' />
                            <p>پیشخوان</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={home} alt='' />
                            <p>آگهی ها</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={bell} alt='' />
                            <p>لیست رزروها</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={shopping} alt='' />
                            <p>خرید پکیج</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={calendar} alt='' />
                            <p>درخواست تقویم</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={diagram} alt='' />
                            <p>آمار</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={wallet} alt='' />
                            <p>کیف پول</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={heart} alt='' />
                            <p>علاقه‌مندی‌ها</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={notification} alt='' />
                            <p>اعلانات</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={chat} alt='' />
                            <p>لیست نظرات‌ و‌استوری‌ها</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={user} alt='' />
                            <p>حساب کاربری</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={question} alt='' />
                            <p>راهنما</p>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link href='/profile/turnover'>
                        <Button type='text' radius='half-rounded'>
                            <Image src={logout} alt='' />
                            <p>خروج از حساب کاربری</p>
                        </Button>
                    </Link>
                </li>
                <li className='userInfoLi'>
                    <Image src={userImage} alt='user' />
                    <p className='role'>مالک</p>
                    <p>حمید رضا محمدی</p>
                    <p className='walletDetails'>
                        موجودی : <span>12.000.000 تومان</span>
                    </p>
                </li>
            </ul>
        </ProfileAsideStyle>
    );
};

export default ProfileAside;
