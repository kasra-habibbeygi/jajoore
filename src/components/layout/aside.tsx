/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import { AsideField, AsideLayout } from './aside.styles';
import EmptyAvatar from '@/assets/images/card/empty-avatar.svg';
import LoginIcon from '@/assets/images/layout/login.svg';
import BookIcon from '@/assets/images/side-bars/book.svg';
import BrifCaseIcon from '@/assets/images/side-bars/brifcase.svg';
import GiftBoxIcon from '@/assets/images/side-bars/gift-box.svg';
import HomePlusIcon from '@/assets/images/side-bars/home-plus.svg';
import HomeIcon from '@/assets/images/side-bars/home.svg';
import InfoIcon from '@/assets/images/side-bars/info.svg';
import QuestionCommentIcon from '@/assets/images/side-bars/question-comment.svg';
import QuestionIcon from '@/assets/images/side-bars/question.svg';
import ShieldIcon from '@/assets/images/side-bars/shield.svg';
import SupportIcon from '@/assets/images/side-bars/support.svg';

// Component
import Button from '../form-group/button';

// Types
interface AsideTypes {
    status: boolean;
    setStatus: (status: boolean) => void;
}

const Aside = ({ status, setStatus }: AsideTypes) => {
    return (
        <>
            <AsideLayout status={status} onClick={() => setStatus(false)}></AsideLayout>
            <AsideField status={status}>
                <div className='header'>
                    <Image src={EmptyAvatar} alt='' className='avatar_img' />
                    <Button color='white' type='outline'>
                        <Image src={LoginIcon} alt='' />
                        ورود | ثبت نام
                    </Button>
                </div>
                <span className='seprator'></span>
                <ol className='main_list_field'>
                    <li>
                        <Link href='/'>
                            <Image src={HomeIcon} alt='' />
                            <p>صفحه اصلی</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={HomePlusIcon} alt='' />
                            <p>میزبان شوید</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={SupportIcon} alt='' />
                            <p>پشتیبانی</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={QuestionCommentIcon} alt='' />
                            <p>سوالات متداول</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={ShieldIcon} alt='' />
                            <p>ضمانت تحویل</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={BrifCaseIcon} alt='' />
                            <p>فرصت شغلی</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={QuestionIcon} alt='' />
                            <p>راهنما</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={GiftBoxIcon} alt='' />
                            <p>دعوت دوستان</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={InfoIcon} alt='' />
                            <p>درباره ما</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <Image src={BookIcon} alt='' />
                            <p>قوانین و مقررات</p>
                        </Link>
                    </li>
                </ol>
            </AsideField>
        </>
    );
};

export default Aside;
