import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Assets
import { FooterMainField } from './footer.style';
import Button from '../form-group/button';
import WhatsAppIcon from '../../assets/images/layout/whatsapp.svg';
import TrustSymbil from '../../assets/images/layout/trust-symbol.png';
import FooterPath from '../../assets/images/layout/footer-path.svg';
import InstagramIcon from '../../assets/images/layout/instagram.svg';
import TelegramIcon from '../../assets/images/layout/telegram.svg';
import AparatIcon from '../../assets/images/layout/aparat.svg';
import ArrowLeft from '../../assets/images/layout/arrow-left.svg';

const Footer = () => {
    return (
        <FooterMainField>
            <div className='header'>
                <div className='container'>
                    <ol>
                        <li>
                            <Link href='/'>قوانین ما</Link>
                        </li>
                        <li>
                            <Link href='/'>درباره ما</Link>
                        </li>
                        <li>
                            <Link href='/'>تماس با ما</Link>
                        </li>
                        <li>
                            <Link href='/'>مجله جاجوره</Link>
                        </li>
                    </ol>
                    <Button color='green' type='outline-filled'>
                        <a href='/' target='_blank'>
                            <Image src={WhatsAppIcon} alt='' />
                            پشتیبانی واتس اپ
                        </a>
                    </Button>
                </div>
            </div>
            <div className='container'>
                <div className='main_content'>
                    <div className='links_field'>
                        <h5>
                            <span></span>
                            ویلاها
                        </h5>
                        <ul>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='links_field'>
                        <h5>
                            <span></span>
                            ویلاها
                        </h5>
                        <ul>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='links_field'>
                        <h5>
                            <span></span>
                            ویلاها
                        </h5>
                        <ul>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                            <li>
                                <Link href='/'>اجاره ویلا در کردان</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='social_media'>
                        <div className='item_field'>
                            <Image className='path1' src={FooterPath} alt='' />
                            <Image className='path2' src={FooterPath} alt='' />
                            <Image className='path3' src={FooterPath} alt='' />
                            <Image className='social_media_icon' src={InstagramIcon} alt='' />
                            <p>
                                در اینستاگرام
                                <br />
                                <span> جاجوره </span>
                                را دنبال کن
                            </p>
                            <a href='/' target='_blank'>
                                <Image src={ArrowLeft} alt='' />
                            </a>
                        </div>
                        <div className='item_field'>
                            <Image className='path1' src={FooterPath} alt='' />
                            <Image className='path2' src={FooterPath} alt='' />
                            <Image className='path3' src={FooterPath} alt='' />
                            <Image className='social_media_icon' src={TelegramIcon} alt='' />
                            <p>
                                در اینستاگرام
                                <br />
                                <span> جاجوره </span>
                                را دنبال کن
                            </p>
                            <a href='/' target='_blank'>
                                <Image src={ArrowLeft} alt='' />
                            </a>
                        </div>
                        <div className='item_field'>
                            <Image className='path1' src={FooterPath} alt='' />
                            <Image className='path2' src={FooterPath} alt='' />
                            <Image className='path3' src={FooterPath} alt='' />
                            <Image className='social_media_icon' src={AparatIcon} alt='' />
                            <p>
                                در اینستاگرام
                                <br />
                                <span> جاجوره </span>
                                را دنبال کن
                            </p>
                            <a href='/' target='_blank'>
                                <Image src={ArrowLeft} alt='' />
                            </a>
                        </div>
                    </div>
                    <div className='w_max'>
                        <div>
                            <Image src={TrustSymbil} alt='' />
                            <Image src={TrustSymbil} alt='' />
                        </div>
                        <div>
                            <Image src={TrustSymbil} alt='' />
                            <Image src={TrustSymbil} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='copy_right'> © تمامی حقوق این وب‌سایت متعلق شرکت رئیس میباشد </div>
        </FooterMainField>
    );
};

export default Footer;
