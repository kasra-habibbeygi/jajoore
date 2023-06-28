import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Assets
import { MainField } from './vip-slider.style';

// Component
import CardComponent from '@/components/template/card';
import TitleField from '@/components/template/title';

const SimilarSlider = ({ data }: any) => {
    return (
        <MainField>
            <TitleField title='آگهی های مشابه' />
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={3.2}
                pagination={{ clickable: true }}
                breakpoints={{
                    1300: {
                        slidesPerView: 4.2
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
            </Swiper>
        </MainField>
    );
};

export default SimilarSlider;
