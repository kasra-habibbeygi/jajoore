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

const Residence = ({ filtersItem, vipsResidence, attribute, residenceData, popularDestinations }: any) => {
    return (
        <LayoutProvider>
            <Filter filtersItem={filtersItem.result} popularDestinations={popularDestinations.result} />
            <main className='container'>
                <Header />
                <DoubleCol>
                    <Aside />
                    <div className='content_field'>
                        <Info data={residenceData} />
                        <Story />
                        <AboutResidence data={residenceData} />
                        {/* <Attributes title='فضای اقامتگاه' attribute={attribute} /> */}
                        <SleepingArea data={residenceData} />
                        <Attributes
                            title='منطقه اقامتگاه'
                            attribute={attribute.residenceAreas}
                            // availableItems={residenceData.residenceTypeId}
                            name='privacyAndSecurities'
                        />
                        <Attributes
                            title='حریم خصوصی و امنیت'
                            attribute={attribute.privacyAndSecurities}
                            // availableItems={residenceData.residenceFacilitieIds}
                            name='privacyAndSecurities'
                        />
                        <Attributes
                            title='امکانات'
                            attribute={attribute.residenceFacilities}
                            availableItems={residenceData.residenceFacilitieIds}
                            name='residenceFacilities'
                        />
                        <Attributes
                            title='لوازم بازی'
                            attribute={attribute.gameAccessories}
                            availableItems={residenceData.gameAccessorieIds}
                            name='gameAccessories'
                        />
                        <Attributes title='سرویس بهداشتی' attribute={attribute.wCs} availableItems={residenceData.wcIds} name='wCs' />
                        <Attributes
                            title='چشم انداز'
                            attribute={attribute.visions}
                            availableItems={residenceData.visionIds}
                            name='visions'
                        />
                        <Attributes title='ایمنی' attribute={attribute.safeties} availableItems={residenceData.safetyIds} name='safeties' />
                        <Attributes
                            title='انشعابات'
                            attribute={attribute.residenceBranches}
                            availableItems={residenceData.residenceBrancheIds}
                            name='residenceBranches'
                        />
                        <RatePerPerson data={residenceData} />
                        <Rules data={residenceData} />
                        <Attributes
                            title='مدارک تحویل اقامتگاه'
                            attribute={attribute.residenceDeliveryDocuments}
                            availableItems={residenceData.residenceDeliveryDocumentIds}
                            name='residenceBranches'
                        />
                        <ForbiddenTemp attribute={attribute.forbiddenWorks} availableItems={residenceData.forbiddenWorkIds} />
                        <CancelRules />
                        <SpecificResidenceMap data={[residenceData.lat, residenceData.lng]} />
                        <Rate score={residenceData.scores} attribute={attribute.scores} />
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
    const [filtersItem, residenceData, vipsResidence, attribute, popularDestinations] = await Promise.all([
        Axios.get('residence/preperForFilter'),
        Axios.get(`residence/${params.id}`),
        Axios.get('residence/vips'),
        Axios.get('residence/preperForView'),
        Axios.get('residence/popularDestinations')
    ]);

    return {
        props: {
            filtersItem: filtersItem.data,
            residenceData: residenceData.data.result,
            vipsResidence: vipsResidence.data,
            attribute: attribute.data.result,
            popularDestinations: popularDestinations.data
        }
    };
}
