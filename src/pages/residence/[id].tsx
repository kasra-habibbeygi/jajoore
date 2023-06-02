import React from 'react';

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
import Images from '@/components/pages/residence/images';
import VipSlider from '@/components/pages/residence/vip-slider';
import Comments from '@/components/pages/residence/comments';
import HostInfo from '@/components/pages/residence/host-info';
import Rate from '@/components/pages/residence/rate';
import Attributes from '@/components/pages/residence/attributes';
import AboutResidence from '@/components/pages/residence/about-residence';
import Story from '@/components/pages/residence/story';
import Aside from '@/components/pages/residence/aside';
import ForbiddenTemp from '@/components/pages/residence/forbidden';

const Residence = () => {
    return (
        <LayoutProvider>
            <Filter />
            <main className='container'>
                <Header />
                <Images />
                <DoubleCol>
                    <Aside />
                    <div className='content_field'>
                        <Story />
                        <AboutResidence />
                        <Attributes title='امکانات' />
                        <Attributes title='منطقه اقامتگاه' />
                        <Attributes title='حریم خصوصی و امنیت' />
                        <ForbiddenTemp />
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
