import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Assets
import { AsideMainField } from './aside.style';
import WhatsAppIcon from '@/assets/images/layout/whatsapp.svg';
import ShieldIcon from '@/assets/images/side-bars/shield.svg';
import QuestionIcon from '@/assets/images/side-bars/question.svg';
import TelephoneIcon from '@/assets/images/icons/telephone-call.svg';

// Component
import Button from '@/components/form-group/button';

const Aside = ({ data }: any) => {
    const [domLoader, setDomLoader] = useState(false);

    useEffect(() => {
        setDomLoader(true);
    }, []);

    return (
        <AsideMainField>
            <div className='main_field'>
                <header>
                    <p>اجاره از شبی</p>
                    <div>
                        {data.discountedPrice !== 0 ? (
                            <>
                                <span className='discount'>{domLoader && parseFloat(data.price).toLocaleString()}</span>
                                {domLoader && parseFloat(data.discountedPrice).toLocaleString()}
                            </>
                        ) : (
                            domLoader && parseFloat(data.price).toLocaleString()
                        )}
                        <span className='money_unit'>تومان</span>
                    </div>
                </header>
                <div className='content'>
                    <div className='avatar_field'>
                        <div>
                            <Image src={`${process.env.IMAGE_URL}${data.ownerProfileImg}`} alt='' width={500} height={300} />
                            {data.ownerName}
                        </div>
                        <Link href='/'>
                            <Button type='outline' shadow radius='half-rounded'>
                                حساب کاربری
                            </Button>
                        </Link>
                    </div>
                    <p className='answer_field'>ساعت پاسخگویی: 9:30 الی 11 شب</p>
                    <p className='tip'>
                        هنگام تماس تلفنی، لطفا به کد ملک 108 در جاجوره اشاره کنید تا سریع تر راهنمایی شوید. قبل از تماس، راهنمای رزرو ویلا و
                        قوانین را بخوانید.
                    </p>
                    <div className='button_group'>
                        <Button type='outline' radius='half-rounded' color='green'>
                            <Image src={WhatsAppIcon} alt='' />
                            پیام به واتس اپ
                        </Button>
                        <Button type='outline' radius='half-rounded' color='yellow' extraClass='blue_one'>
                            <Image src={TelephoneIcon} alt='' />
                            09123636601
                        </Button>
                    </div>
                    <div className='button_group'>
                        <Button shadow radius='half-rounded' disabled>
                            <Image src={ShieldIcon} alt='' />
                            ضمانت تحویل
                        </Button>
                        <Button shadow radius='half-rounded' disabled>
                            <Image src={QuestionIcon} alt='' />
                            راهنمای رزرو
                        </Button>
                    </div>
                </div>
            </div>
        </AsideMainField>
    );
};

export default Aside;
