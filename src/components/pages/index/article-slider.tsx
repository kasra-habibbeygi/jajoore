import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Assets
import { MainField } from './article-slider.styles';

// Component
import ArticleCard from '@/components/template/article-card';

const ArticleSlider = () => {
    return (
        <MainField>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={4}
                pagination={{ clickable: true }}
                className='article_slider'
            >
                <SwiperSlide>
                    <ArticleCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ArticleCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ArticleCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ArticleCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ArticleCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ArticleCard />
                </SwiperSlide>
            </Swiper>
        </MainField>
    );
};

export default ArticleSlider;
