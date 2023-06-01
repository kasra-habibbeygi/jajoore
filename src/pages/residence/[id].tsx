import React from 'react';

// Assets
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { DoubleCol } from '@/assets/styles/residence';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import Filter from '@/components/template/filters/filter';
import Header from '@/components/pages/residence/header';
import Images from '@/components/pages/residence/images';
import VipSlider from '@/components/pages/residence/vip-slider';
import Comments from '@/components/pages/residence/comments';
import HostInfo from '@/components/pages/residence/host-info';
import Rate from '@/components/pages/residence/rate';

const Residence = () => {
    return (
        <LayoutProvider>
            <Filter />
            <main className='container'>
                <Header />
                <Images />
                <DoubleCol>
                    <aside className='aside'></aside>
                    <div className='content_field'>
                        <Rate />
                        <HostInfo />
                        <Comments />
                    </div>
                </DoubleCol>
                <VipSlider />
            </main>
        </LayoutProvider>
    );
};

export default Residence;
