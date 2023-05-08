import React from 'react';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Assets
import { MainField } from './vip-slider.style';

// Component
import CardComponent from '@/components/template/card';
import Button from '@/components/form-group/button';

const VipSlider = () => {
    return (
        <MainField>
            <header>
                <h3>آگهی های VIP</h3>
                <Button color='primary' radius='half-rounded'>
                    <Link href='/'>مشاهده بیشتر</Link>
                </Button>
            </header>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={3.2}
                pagination={{ clickable: true }}
                className='card_slider'
            >
                <SwiperSlide>
                    <CardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <CardComponent blur />
                </SwiperSlide>
            </Swiper>
        </MainField>
    );
};

export default VipSlider;
