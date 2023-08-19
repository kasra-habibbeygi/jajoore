import React from 'react';
import Axios from '@/configs/axios';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import Filter from '@/components/template/filters/filter';
import ProfileLayoutProvider from '@/components/layout/profile-layout-provider';
import StatisticHeaderSummary from '@/components/pages/profile/statistics/header-summary';
import StatisticRate from '@/components/pages/profile/statistics/rate';
import StatisticSummary from '@/components/pages/profile/statistics/statistic-summary';

// Assets
import StatisticCharts from '@/components/pages/profile/statistics/chart';

const Statistics = ({ popularDestinations }: any) => {
    return (
        <LayoutProvider>
            <Filter popularDestinations={popularDestinations.result} filterStatus={false} />
            <ProfileLayoutProvider>
                <StatisticHeaderSummary />
                <StatisticRate />
                <StatisticSummary />
                <StatisticCharts />
            </ProfileLayoutProvider>
        </LayoutProvider>
    );
};

export default Statistics;

export async function getServerSideProps() {
    const [popularDestinations] = await Promise.all([Axios.get('residence/popularDestinations')]);

    return {
        props: {
            popularDestinations: popularDestinations.data
        }
    };
}
