/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Component
import ProfileLayoutProvider from '@/components/layout/profile-layout-provider';
import Checkbox from '@/components/form-group/checkbox';
import SelectComponent from '@/components/form-group/select';
import Input from '@/components/form-group/input';

//Assets
import { TurnoverStyle } from './turnover.style';

const Turnover = () => {
    const [inputValues, setInputValues] = useState({
        name: ''
    });
    const orderItems = [
        { label: 'وضعیت', value: 'null' },
        { label: 'از برترین', value: 'top' },
        { label: 'از بیشترین امتیاز', value: 'score' },
        { label: 'از کمترین قیمت', value: 'low-price' },
        { label: 'از بیشترین قیمت', value: 'max-price' },
        { label: 'از بیشترین رزرو', value: 'max-reservation' },
        { label: 'از بیشترین تخفیف', value: 'sale' },
        { label: 'از جدید ترین', value: 'newest' }
    ];

    const inputValueHandler = () => {};
    const selectValueHandler = () => {};
    return (
        <ProfileLayoutProvider>
            <TurnoverStyle>
                <h2>گردش مالی</h2>
                <form className='filter'>
                    <div className='checkBoxBorder'>
                        <Checkbox name='all' label='همه' />
                    </div>
                    <div className='checkBoxBorder'>
                        <Checkbox name='all' label='دریافتی' />
                    </div>
                    <div className='checkBoxBorder'>
                        <Checkbox name='all' label='واریزی' />
                    </div>
                    <div className='checkBoxBorder'>
                        <Checkbox name='all' label='خرید' />
                    </div>

                    <div className='formBox'>
                        <SelectComponent
                            items={orderItems}
                            handler={selectValueHandler}
                            name='orderFilter'
                            valueKey='value'
                            state={orderItems[0].value}
                            itemKey='label'
                        />
                    </div>
                    <div className='formBox'>
                        <Input placeholder='شماره تراکنش' name='name' value={inputValues.name} setValue={inputValueHandler} />
                    </div>
                </form>
                <div className='explain'>
                    <p>توضیحات وضعیت گردش مالی</p>
                    <p className='success'>.موفق: تراکنش با موفقیت انجام شده است</p>
                    <p className='error'>.ناموفق: تراکنش با مشکل مواجه شده است و باید دوباره درخواست دهید</p>
                    <p className='warning'>
                        .معلق: پرداختی هایی که توسط مهمان برای اقامتگاه انجام شده است و در صورت تحویل و تایید توسط مهمان به وضعیت موفق تغییر
                        میکند
                    </p>
                </div>
                <div className='tableDetails'>
                    <p>دریافتی / واریزی</p>
                    <table>
                        <thead>
                            <tr>
                                <th>شماره تراکنش</th>
                                <th>مبلغ</th>
                                <th>درخواست</th>
                                <th>جزییات</th>
                                <th>وضعیت</th>
                                <th>نوع پرداختی</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>56698</td>
                                <td>200.000تومان</td>
                                <td className='success'>دریافتی</td>
                                <td>برداشت از کیف پول</td>
                                <td className='success'>موفق</td>
                                <td>درگاه پرداخت</td>
                            </tr>
                            <tr>
                                <td>78965</td>
                                <td>200.000تومان</td>
                                <td className='blue'>واریزی</td>
                                <td>برداشت از کیف پول</td>
                                <td className='success'>موفق</td>
                                <td>درگاه پرداخت</td>
                            </tr>{' '}
                            <tr>
                                <td>-</td>
                                <td>200.000تومان</td>
                                <td className='success'>دریافتی</td>
                                <td>بابت رزرو اقامتگاه کد 112</td>
                                <td className='error'>ناموفق</td>
                                <td>درگاه پرداخت</td>
                            </tr>{' '}
                            <tr>
                                <td>78965</td>
                                <td>200.000تومان</td>
                                <td className='success'>دریافتی</td>
                                <td>خرید پکیج پول</td>
                                <td className='warning'>معلق</td>
                                <td>درگاه پرداخت</td>
                            </tr>{' '}
                            <tr>
                                <td>-</td>
                                <td>200.000تومان</td>
                                <td className='success'>دریافتی</td>
                                <td>برداشت از کیف پول</td>
                                <td className='success'>موفق</td>
                                <td>درگاه پرداخت</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </TurnoverStyle>
        </ProfileLayoutProvider>
    );
};

export default Turnover;
