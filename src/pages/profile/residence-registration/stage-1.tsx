import React from 'react';
import Axios from '@/configs/axios';
import Image from 'next/image';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import Filter from '@/components/template/filters/filter';
import ProfileLayoutProvider from '@/components/layout/profile-layout-provider';
import StagePill from '@/components/pages/profile/residence-registration/stage-pill';
import ConfirmButton from '@/components/pages/profile/residence-registration/confirm-buttom';
import ImageList from '@/components/pages/profile/residence-registration/img-list';

// Assets
import { HeaderInfo } from '@/assets/styles/profile/residence-registration/stage.style';
import AlertIcon from '@/assets/images/icons/alert.svg';

const ResidenceRegistrationStage1 = ({ popularDestinations }: any) => {
    return (
        <LayoutProvider>
            <Filter popularDestinations={popularDestinations.result} filterStatus={false} />
            <ProfileLayoutProvider>
                <h3 style={{ fontWeight: '400' }}>ثبت اقامتگاه جدید</h3>
                <StagePill />
                <HeaderInfo>
                    <h3>تصاویر اقامتگاه</h3>
                    <div className='alert_field'>
                        <div>
                            <Image src={AlertIcon} alt='' />
                            <h4>ارائه تصاویر زیبا و واقعی از اقامتگاه شما می تواند نقش بسیار مهمی در جلب نظر میهمانان ایفا نماید.</h4>
                        </div>
                        <ul>
                            <li>
                                <span></span>
                                .حداقل 10 عکسِ باکیفیت، از پذیرایی، اتاق خواب ها، آشپزخانه، سرویس بهداشتی، حیاط و نمای ساختمان آپلود کنید
                            </li>
                            <li>
                                <span></span>ترجیحا از تصاویر (Landscape) استفاده کنید.
                            </li>
                        </ul>
                    </div>
                </HeaderInfo>
                <ImageList />
                <ConfirmButton />
            </ProfileLayoutProvider>
        </LayoutProvider>
    );
};

export default ResidenceRegistrationStage1;

export async function getServerSideProps() {
    const [popularDestinations] = await Promise.all([Axios.get('residence/popularDestinations')]);

    return {
        props: {
            popularDestinations: popularDestinations.data
        }
    };
}
