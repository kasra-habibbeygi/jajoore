import React from 'react';
import Axios from '@/configs/axios';
import Image from 'next/image';

// Assets
import { MainField } from '@/assets/styles/profile/residence-registration/main.style';
import VIPIcon from '@/assets/images/icons/vip.svg';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import Filter from '@/components/template/filters/filter';
import ProfileLayoutProvider from '@/components/layout/profile-layout-provider';
import StagePill from '@/components/pages/profile/residence-registration/stage-pill';
import ConfirmButton from '@/components/pages/profile/residence-registration/confirm-buttom';

const ResidenceRegistrationStage4 = ({ popularDestinations }: any) => {
    return (
        <LayoutProvider>
            <Filter popularDestinations={popularDestinations.result} filterStatus={false} />
            <ProfileLayoutProvider>
                <h3 style={{ fontWeight: '400' }}>ثبت اقامتگاه جدید</h3>
                <StagePill />
                <MainField>
                    <h3>خرید پکیج</h3>
                    <div className='package_field active'>
                        <div className='package_header'>
                            <div className='right_field'>
                                <Image src={VIPIcon} alt='' />
                                <p>پکیج 3 ماهه ویژه</p>
                            </div>
                            <p>
                                2.400.000 تومان <span className='radio'></span>
                            </p>
                        </div>
                        <p className='package_content'>
                            آگهی شما در جاجوره در دسته ی ویژه به مدت 3 ماه نمایش داده میشود + تبلیغ اقامتگاه شما در اینستاگرام و تلگرام
                            جاجوره
                        </p>
                    </div>
                    <div className='package_field'>
                        <div className='package_header'>
                            <div className='right_field'>
                                <Image src={VIPIcon} alt='' />
                                <p>پکیج 3 ماهه ویژه</p>
                            </div>
                            <p>
                                2.400.000 تومان <span className='radio'></span>
                            </p>
                        </div>
                        <p className='package_content'>
                            آگهی شما در جاجوره در دسته ی ویژه به مدت 3 ماه نمایش داده میشود + تبلیغ اقامتگاه شما در اینستاگرام و تلگرام
                            جاجوره
                        </p>
                        <p className='package_content_danger'>
                            توجه: اگر میخواهید آگهی خود را در آینده به پلاس ارتقاع دهید باید از پکیج 6 ماه یا 12 ماهه خریداری کنید (درصورتی
                            که پکیج 3ماهه خریداری کرده باشید باید تا اتمام زمان پکیج منتظر بمانید)
                        </p>
                    </div>
                    <div className='package_field'>
                        <div className='package_header'>
                            <div className='right_field'>
                                <Image src={VIPIcon} alt='' />
                                <p>پکیج 3 ماهه ویژه</p>
                            </div>
                            <p>
                                2.400.000 تومان <span className='radio'></span>
                            </p>
                        </div>
                        <p className='package_content'>
                            آگهی شما در جاجوره در دسته ی ویژه به مدت 3 ماه نمایش داده میشود + تبلیغ اقامتگاه شما در اینستاگرام و تلگرام
                            جاجوره
                        </p>
                        <p className='package_content_danger'>
                            توجه: اگر میخواهید آگهی خود را در آینده به پلاس ارتقاع دهید باید از پکیج 6 ماه یا 12 ماهه خریداری کنید (درصورتی
                            که پکیج 3ماهه خریداری کرده باشید باید تا اتمام زمان پکیج منتظر بمانید)
                        </p>
                    </div>
                    <div className='invoice_field'>
                        <div className='invoice_header'>
                            <h4>نوع پکیج :</h4>
                            <div>
                                <p>پکیج 6 ماهه ویژه</p>
                                <p>6.600.000 تومان</p>
                            </div>
                        </div>
                        <div className='final_result special'>
                            <p>مبلغ صورتحساب</p>
                            <p>6.600.000 تومان</p>
                        </div>
                        <div className='final_result'>
                            <p>مبلغ قابل پرداخت</p>
                            <p>6.600.000 تومان</p>
                        </div>
                    </div>
                </MainField>
                <ConfirmButton />
            </ProfileLayoutProvider>
        </LayoutProvider>
    );
};

export default ResidenceRegistrationStage4;

export async function getServerSideProps() {
    const [popularDestinations] = await Promise.all([Axios.get('residence/popularDestinations')]);

    return {
        props: {
            popularDestinations: popularDestinations.data
        }
    };
}
