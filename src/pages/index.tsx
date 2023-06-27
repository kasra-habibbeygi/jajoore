import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Assets
import { DoubleCol } from '@/assets/styles/main';
import TrustSymbol from '@/assets/images/layout/trust-symbol.png';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import IndexHeader from '@/components/pages/index/header';
import VipSlider from '@/components/pages/index/vip-slider';
import CardsList from '@/components/pages/index/cards-list';
import ArticleSlider from '@/components/pages/index/article-slider';
import Filter from '@/components/template/filters/filter';
import DestinationCard from '@/components/pages/index/destination-card';
import AboutUs from '@/components/pages/index/about-us';
import SideBarCardList from '@/components/pages/index/sidebar-card-list';
const Map = dynamic(() => import('@/components/pages/index/map'), { ssr: false });

import Axios from '@/configs/axios';

const Index = ({ article, vipsResidence, Residence, popularDestinations, instants, filtersItem }: any) => {
    return (
        <LayoutProvider>
            <Filter filtersItem={filtersItem.result} />
            <main className='container'>
                <IndexHeader />
                <DoubleCol>
                    <aside className='aside'>
                        <Map />
                        <div className='symbol_field'>
                            <Image src={TrustSymbol} alt='' />
                            <Image src={TrustSymbol} alt='' />
                        </div>
                        <DestinationCard data={popularDestinations} />
                        <SideBarCardList title='آگهی های رزرو آنی' data={instants} />
                        {/* <SideBarCardList title='آگهی های لحظه آخری' /> */}
                    </aside>
                    <div className='content_field'>
                        <VipSlider data={vipsResidence} />
                        <CardsList data={Residence} />
                    </div>
                </DoubleCol>
                <ArticleSlider data={article} />
                <AboutUs />
            </main>
        </LayoutProvider>
    );
};

export default Index;

export async function getServerSideProps({ query }: any) {
    let residenceQuery = '?PageSize=12';

    if (query.page) {
        residenceQuery += `&PageIndex=${query.page}`;
    }

    const [article, vipsResidence, Residence, popularDestinations, instants, filtersItem] = await Promise.all([
        Axios.get('blog'),
        Axios.get('residence/vips'),
        Axios.get(`residence${residenceQuery}`),
        Axios.get('residence/popularDestinations'),
        Axios.get('residence/instants?pageSize=5'),
        Axios.get('/residence/preperForView')
    ]);

    return {
        props: {
            article: article.data,
            vipsResidence: vipsResidence.data,
            Residence: Residence.data,
            popularDestinations: popularDestinations.data,
            instants: instants.data,
            filtersItem: filtersItem.data
        }
    };
}
