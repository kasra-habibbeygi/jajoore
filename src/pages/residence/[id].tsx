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
import SubmitModal from '@/components/pages/residence/submit-modal';
const SpecificResidenceMap = dynamic(() => import('@/components/pages/residence/map'), { ssr: false });

const Residence = ({ attribute, residenceData, popularDestinations, similarResidences, comment }: any) => {
    return (
        <LayoutProvider>
            <Filter popularDestinations={popularDestinations.result} filterStatus={false} />
            <main className='container'>
                <Header data={residenceData} />
                <DoubleCol>
                    <Aside data={residenceData} />
                    <div className='content_field'>
                        <Info data={residenceData} />
                        <Story />
                        <AboutResidence data={residenceData} />
                        <SleepingArea data={residenceData} />
                        <Attributes
                            title='منطقه اقامتگاه'
                            attribute={attribute.residenceAreas}
                            availableItems={residenceData.residenceAreaIds}
                            name='privacyAndSecurities'
                        />
                        <Attributes
                            title='حریم خصوصی و امنیت'
                            attribute={attribute.privacyAndSecurities}
                            availableItems={residenceData.privacyAndSecurityIds}
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
                        <Rate data={residenceData} attribute={attribute.scores} />
                        <HostInfo data={residenceData} />
                        <Comments data={comment} />
                    </div>
                </DoubleCol>
                <SimilarSlider data={similarResidences} />
            </main>
            <SubmitModal status={false} setStatus={() => {}} data={residenceData} />
        </LayoutProvider>
    );
};

export default Residence;

export async function getServerSideProps({ params, query }: any) {
    let commentQuery = `?PageSize=10&ResidenceId=${params.id}`;

    if (query.page) {
        commentQuery += `&PageIndex=${query.page}`;
    }

    const [residenceData, attribute, popularDestinations, similarResidences, comment] = await Promise.all([
        Axios.get(`residence/${params.id}`),
        Axios.get('residence/preperForView'),
        Axios.get('residence/popularDestinations'),
        Axios.get('residence/similarResidences'),
        Axios.get(`comment${commentQuery}`)
    ]);

    return {
        props: {
            residenceData: residenceData.data.result,
            attribute: attribute.data.result,
            popularDestinations: popularDestinations.data,
            similarResidences: similarResidences.data,
            comment: comment.data
        }
    };
}
