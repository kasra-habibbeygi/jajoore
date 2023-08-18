import React, { ChangeEvent, useState } from 'react';
import Axios from '@/configs/axios';
import Image from 'next/image';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import Filter from '@/components/template/filters/filter';
import ProfileLayoutProvider from '@/components/layout/profile-layout-provider';
import StagePill from '@/components/pages/profile/residence-registration/stage-pill';
import ConfirmButton from '@/components/pages/profile/residence-registration/confirm-buttom';
import Autocomplete from '@/components/form-group/autocomplete';
import Input from '@/components/form-group/input';
import TextArea from '@/components/form-group/textarea';

// Assets
import { MainField } from '@/assets/styles/profile/residence-registration/main.style';
import Alert from '@/assets/images/icons/simple-alert.svg';

const mocItem = [
    { label: 'از برترین', value: 1 },
    { label: 'از بیشترین امتیاز', value: 2 },
    { label: 'از کمترین قیمت', value: 3 },
    { label: 'از بیشترین قیمت', value: 4 },
    { label: 'از بیشترین رزرو', value: 5 },
    { label: 'از بیشترین تخفیف', value: 6 },
    { label: 'از جدید ترین', value: 7 }
];

const ResidenceRegistrationStage2 = ({ popularDestinations }: any) => {
    const [inputValues, setInputValues] = useState({
        providence: null,
        title: '',
        description: ''
    });

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    return (
        <LayoutProvider>
            <Filter popularDestinations={popularDestinations.result} filterStatus={false} />
            <ProfileLayoutProvider>
                <h3 style={{ fontWeight: '400' }}>ثبت اقامتگاه جدید</h3>
                <StagePill />
                <MainField>
                    <h3>اطلاعات پایه</h3>
                    <div className='w-50'>
                        <Autocomplete
                            items={mocItem}
                            setValue={setInputValues}
                            value={inputValues.providence}
                            valueKey='value'
                            name='providence'
                            labelKey='label'
                            label='استان خود را انتخاب کنید'
                        />
                    </div>
                    <div className='w-50'>
                        <Autocomplete
                            items={mocItem}
                            label='شهر خود را انتخاب کنید'
                            setValue={setInputValues}
                            value={inputValues.providence}
                            valueKey='value'
                            name='providence'
                            labelKey='label'
                        />
                    </div>
                    <div className='w-50'>
                        <Autocomplete
                            items={mocItem}
                            label='نوع اقامتگاه را انتخاب کنید'
                            setValue={setInputValues}
                            value={inputValues.providence}
                            valueKey='value'
                            name='providence'
                            labelKey='label'
                        />
                    </div>
                    <div className='w-50'>
                        <Input
                            name='title'
                            setValue={inputValueHandler}
                            value={inputValues.title}
                            placeholder='مثال : اجاره ویلا به همراه آب گرم'
                            label='عنوان آگهی'
                        />
                    </div>
                    <div className='w-100'>
                        <TextArea
                            name='description'
                            onChange={inputValueHandler}
                            value={inputValues.description}
                            label='درباره اقامتگاه'
                            tooltipContent={
                                <>
                                    <p>
                                        جاذبه های گردشگری اطراف اقامتگاه خود را همچون ساحل دریا ، رودخانه ، کوهستان ، اماکت تاریخی ، بازار
                                        محلی و ... را با ذکر فاصله از اقامتگاه و شیوه دسترسی گردشگران به آنها شرح دهید .
                                    </p>
                                    <br />
                                    <p>وجود فروشگاه های مواد غذایی و بهداشتی و نانوایی و ... در مجاورت اقامتگاه خود را مشخص کنید .</p>
                                </>
                            }
                        />
                    </div>
                    <div className='w-50'>
                        <Input name='price' setValue={inputValueHandler} value={inputValues.title} label='قیمت اول هفته (به تومان)' />
                    </div>
                    <div className='w-50'>
                        <Input name='price' setValue={inputValueHandler} value={inputValues.title} label='قیمت هر نفر اضافه (به تومان)' />
                    </div>
                    <div className='w-50'>
                        <Input name='price' setValue={inputValueHandler} value={inputValues.title} label='متراژ زمین (به متر)' />
                    </div>
                    <div className='w-50'>
                        <Input name='price' setValue={inputValueHandler} value={inputValues.title} label='متراژ بنا (به متر)' />
                    </div>
                    <div className='w-50'>
                        <Input name='price' setValue={inputValueHandler} value={inputValues.title} label='تعداد طبقات' />
                    </div>
                    <div className='w-50'>
                        <Input name='price' setValue={inputValueHandler} value={inputValues.title} label='شماره سرایدار' />
                    </div>
                    <div className='w-100'>
                        <TextArea
                            name='description'
                            onChange={inputValueHandler}
                            value={inputValues.description}
                            label='آدرس دقیقه اقامتگاه'
                        />
                    </div>
                    <div className='alert_field'>
                        <h4>
                            <Image src={Alert} alt='' />
                            موقعیت مکانی (لوکیشن) را به دقت مشخص کنید
                        </h4>
                        <p>
                            لوکیشن ثبت شده برای مسیریابی به مهمانان ارسال می‌شود. طبق ضمانت تحویل جاجوره، هرگونه مغایرت می‌تواند باعث لغو
                            رزرو و عودت وجه به مهمان شود .
                        </p>
                    </div>
                </MainField>
                <ConfirmButton />
            </ProfileLayoutProvider>
        </LayoutProvider>
    );
};

export default ResidenceRegistrationStage2;

export async function getServerSideProps() {
    const [popularDestinations] = await Promise.all([Axios.get('residence/popularDestinations')]);

    return {
        props: {
            popularDestinations: popularDestinations.data
        }
    };
}
