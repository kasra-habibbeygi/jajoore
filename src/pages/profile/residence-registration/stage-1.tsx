import React from 'react';
import Axios from '@/configs/axios';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import Filter from '@/components/template/filters/filter';
import ProfileLayoutProvider from '@/components/layout/profile-layout-provider';
import StagePill from '@/components/pages/profile/residence-registration/stage-pill';
import ConfirmModal from '@/components/pages/profile/residence-registration/confirm-buttom';

const ResidenceRegistrationStage1 = ({ popularDestinations }: any) => {
    return (
        <LayoutProvider>
            <Filter popularDestinations={popularDestinations.result} filterStatus={false} />
            <ProfileLayoutProvider>
                <h3 style={{ fontWeight: '400' }}>ثبت اقامتگاه جدید</h3>
                <StagePill />

                <ConfirmModal></ConfirmModal>
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
