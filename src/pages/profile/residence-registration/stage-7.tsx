import React from 'react';
import Axios from '@/configs/axios';

// Assets
import { MainField } from '@/assets/styles/profile/residence-registration/main.style';

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
