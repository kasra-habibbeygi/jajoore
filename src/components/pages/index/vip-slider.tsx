import React from 'react';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Assets
import { MainField } from './vip-slider.style';

// Component
import CardComponent from '@/components/template/card';
import Button from '@/components/form-group/button';

const VipSlider = ({ data }: any) => {
    return (
        <MainField>
            <header>
                <h3>آگهی های VIP</h3>
                <Button color='primary'>
                    <Link href='/'>مشاهده بیشتر</Link>
                </Button>
            </header>
            <Swiper
                dir='rtl'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={3.2}
                pagination={{ clickable: true }}
                // loop={true}
                // centeredSlides={true}
                breakpoints={{
                    1300: {
                        slidesPerView: 3.2
                    },
                    992: {
                        slidesPerView: 2.2
                    },
                    800: {
                        slidesPerView: 1.2
                    },
                    650: {
                        slidesPerView: 2.2
                    },
                    0: {
                        slidesPerView: 1.2
                    }
                }}
                className='card_slider'
            >
                {data.result.map((item: any) => (
                    <SwiperSlide key={`vips_residence_${item.id}`}>
                        <CardComponent data={item} />
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <CardComponent blur data={data?.result[0]} />
                </SwiperSlide>
            </Swiper>
        </MainField>
    );
};

export default VipSlider;
