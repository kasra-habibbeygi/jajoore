import React from 'react';
import Axios from '@/configs/axios';
import dynamic from 'next/dynamic';

// Assets
import { DoubleCol } from '@/assets/styles/residence';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import Filter from '@/components/template/filters/filter';
import Header from '@/components/pages/residence/header';
import SimilarSlider from '@/components/pages/residence/vip-slider';
import Comments from '@/components/pages/residence/comments';
import HostInfo from '@/components/pages/residence/host-info';
import Rate from '@/components/pages/residence/rate';
import Attributes from '@/components/pages/residence/attributes';
import AboutResidence from '@/components/pages/residence/about-residence';
import Story from '@/components/pages/residence/story';
import Aside from '@/components/pages/residence/aside';
import ForbiddenTemp from '@/components/pages/residence/forbidden';
import Info from '@/components/pages/residence/info';
import SleepingArea from '@/components/pages/residence/sleeping-area';
import RatePerPerson from '@/components/pages/residence/rate-per-person';
import Rules from '@/components/pages/residence/rules';
import CancelRules from '@/components/pages/residence/cancel-rules';
const SpecificResidenceMap = dynamic(() => import('@/components/pages/residence/map'), { ssr: false });

const Residence = ({ filtersItem, vipsResidence }: any) => {
    return (
        <LayoutProvider>
            <Filter filtersItem={filtersItem.result} filterStatus={false} />
            <main className='container'>
                <Header />
                <DoubleCol>
                    <Aside />
                    <div className='content_field'>
                        <Info />
                        <Story />
                        <AboutResidence />
                        <Attributes title='فضای اقامتگاه' />
                        <SleepingArea />
                        <Attributes title='امکانات' />
                        <Attributes title='منطقه اقامتگاه' />
                        <Attributes title='حریم خصوصی و امنیت' />
                        <RatePerPerson />
                        <Rules />
                        <Attributes title='مدارک تحویل اقامتگاه' />
                        <ForbiddenTemp />
                        <CancelRules />
                        <SpecificResidenceMap />
                        <Rate />
                        <HostInfo />
                        <Comments />
                    </div>
                </DoubleCol>
                <SimilarSlider data={vipsResidence} />
            </main>
        </LayoutProvider>
    );
};

export default Residence;

export async function getServerSideProps({ params }: any) {
    const [filtersItem, residenceData, vipsResidence] = await Promise.all([
        Axios.get('/residence/preperForFilter'),
        Axios.get(`residence/${params.id}`),
        Axios.get('residence/vips')
    ]);

    return {
        props: {
            filtersItem: filtersItem.data,
            residenceData: residenceData.data.result,
            vipsResidence: vipsResidence.data
        }
    };
}
