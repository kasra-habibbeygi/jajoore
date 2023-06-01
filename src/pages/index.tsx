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
import Pagination from '@/components/template/pagination';
const Map = dynamic(() => import('@/components/pages/index/map'), { ssr: false });
const Index = () => {
    return (
        <LayoutProvider>
            <Filter />
            <main className='container'>
                <IndexHeader />
                <DoubleCol>
                    <aside className='aside'>
                        <Map />
                        <div className='symbol_field'>
                            <Image src={TrustSymbol} alt='' />
                            <Image src={TrustSymbol} alt='' />
                        </div>
                        <DestinationCard />
                        <SideBarCardList title='آگهی های رزرو آنی' />
                        <SideBarCardList title='آگهی های لحظه آخری' />
                    </aside>
                    <div className='content_field'>
                        <VipSlider />
                        <CardsList />
                        <Pagination count={11} current={1} />
                    </div>
                </DoubleCol>
                <ArticleSlider />
                <AboutUs />
            </main>
        </LayoutProvider>
    );
};

export default Index;
