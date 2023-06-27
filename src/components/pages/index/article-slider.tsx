import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Assets
import { MainField } from './article-slider.styles';

// Component
import ArticleCard from '@/components/template/article-card';
const ArticleSlider = ({ data }: any) => {
    return (
        <MainField>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={4}
                pagination={{ clickable: true }}
                className='article_slider'
                breakpoints={{
                    1200: {
                        slidesPerView: 4
                    },
                    900: {
                        slidesPerView: 3
                    },
                    600: {
                        slidesPerView: 2
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
            >
                {data.data.map((item: any) => (
                    <SwiperSlide key={`article_${item.blogId}`}>
                        <ArticleCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </MainField>
    );
};

export default ArticleSlider;
