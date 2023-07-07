/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Assets
import { ModalField, DetailsField, InvoiceField } from './submit-modal.style';
import WhatsAppIcon from '@/assets/images/layout/whatsapp.svg';
import ShieldIcon from '@/assets/images/side-bars/shield.svg';
import QuestionIcon from '@/assets/images/side-bars/question.svg';
import TelephoneIcon from '@/assets/images/icons/telephone-call.svg';

// MUI
import { Dialog } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

// Component
import Button from '@/components/form-group/button';
import SelectComponent from '@/components/form-group/select';
import Checkbox from '@/components/form-group/checkbox';

const orderItems = [
    { label: 'انتخاب تعداد نفرات', value: 'null' },
    { label: '3 نفر', value: '3' },
    { label: '4 نفر', value: '4' },
    { label: '5 نفر', value: '5' },
    { label: '6 نفر', value: '6' }
];

const SubmitModal = ({ status, setStatus, data }: any) => {
    const [domLoader, setDomLoader] = useState(false);

    useEffect(() => {
        setDomLoader(true);
    }, []);

    const selectValueHandler = (e: SelectChangeEvent) => {};

    return (
        <ModalField>
            <Dialog onClose={() => setStatus(false)} open={status} disablePortal keepMounted fullWidth={true} scroll='body' maxWidth='xs'>
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
                    <DetailsField>
                        <p className='title'>تعداد نفرات</p>
                        <SelectComponent
                            items={orderItems}
                            handler={selectValueHandler}
                            name='orderFilter'
                            valueKey='value'
                            state={orderItems[0].value}
                            itemKey='label'
                        />
                        <InvoiceField>
                            <div className='header_box'>
                                <div className='row'>
                                    <p>6 شب * 1.100.000 تومان</p>
                                    <p>2.800.000 تومان</p>
                                </div>
                                <div className='row'>
                                    <p>2 شب * 1.400.000 تومان</p>
                                    <p>6.600.000 تومان</p>
                                </div>
                                <div className='row'>
                                    <p>هزینه نفرات اضافه</p>
                                    <p>+ 600.000 تومان</p>
                                </div>
                            </div>
                            <div className='invoice_main_field'>
                                <div className='row'>
                                    <p>مجموع اجاره بها - 8 شب</p>
                                    <p>10.000.000 تومان</p>
                                </div>
                                <div className='row'>
                                    <p>مبلغ صورت حساب</p>
                                    <p>10.000.000 تومان</p>
                                </div>
                                <div className='row'>
                                    <p>مبلغ قابل پرداخت</p>
                                    <p>10.000.000 تومان</p>
                                </div>
                            </div>
                        </InvoiceField>
                        <p className='discount_link'>کد تخفیف دارم</p>
                        <div className='rules'>
                            <Checkbox name='sale' value={false} handler={() => {}} />
                            <p>قوانین و مقررات را می پذیرم</p>
                            <Link href='/'>(مطالعه)</Link>
                        </div>
                        <Button color='green' shadow extraClass='submit_btn'>
                            ثبت درخواست (پرداخت امن)
                        </Button>
                    </DetailsField>
                    <div className='content'>
                        <div className='avatar_field'>
                            <div>
                                <Image
                                    src={`${process.env.IMAGE_URL}${data.ownerProfileImg.url}`}
                                    alt={data.ownerProfileImg.alt}
                                    width={500}
                                    height={300}
                                />
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
                            هنگام تماس تلفنی، لطفا به کد ملک 108 در جاجوره اشاره کنید تا سریع تر راهنمایی شوید. قبل از تماس، راهنمای رزرو
                            ویلا و قوانین را بخوانید.
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
            </Dialog>
        </ModalField>
    );
};

export default SubmitModal;
