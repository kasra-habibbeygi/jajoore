import React from 'react';
import Image from 'next/image';

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
import TitleField from '@/components/template/title';
import CardComponent from '@/components/template/card';
import AboutUs from '@/components/pages/index/about-us';

// MUI
import Pagination from '@mui/material/Pagination';

const Index = () => {
    return (
        <LayoutProvider>
            <Filter />
            <main className='container'>
                <IndexHeader />
                <DoubleCol>
                    <aside className='aside'>
                        <div className='symbol_field'>
                            <Image src={TrustSymbol} alt='' />
                            <Image src={TrustSymbol} alt='' />
                        </div>
                        <DestinationCard />
                        <TitleField title='مقاصد پر طرفدار' />
                        <div className='instant_booking_field'>
                            <CardComponent type='half' />
                            <CardComponent type='half' />
                            <CardComponent type='half' />
                        </div>
                        <TitleField title='آگهی های رزرو آنی' />
                        <div className='instant_booking_field'>
                            <CardComponent type='half' />
                            <CardComponent type='half' />
                            <CardComponent type='half' />
                        </div>
                    </aside>
                    <div className='content_field'>
                        <VipSlider />
                        <CardsList />
                        <Pagination count={11} defaultPage={6} siblingCount={0} className='pagination' />
                    </div>
                </DoubleCol>
                <ArticleSlider />
                <AboutUs />
            </main>
        </LayoutProvider>
    );
};

export default Index;
