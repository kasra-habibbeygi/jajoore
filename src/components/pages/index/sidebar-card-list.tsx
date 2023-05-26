import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Component
import CardComponent from '@/components/template/card';
import TitleField from '@/components/template/title';

// Assets
import { MainField } from './sidebar-card-list.style';

// Types
interface SideBarCardListTypes {
    title: string;
}

const SideBarCardList = ({ title }: SideBarCardListTypes) => {
    return (
        <MainField>
            <TitleField title={title} />
            <ul className='aside_cards_field'>
                <li>
                    <CardComponent type='half' extraClass='aside_cards' />
                </li>
                <li>
                    <CardComponent type='half' extraClass='aside_cards' />
                </li>
                <li>
                    <CardComponent type='half' extraClass='aside_cards' />
                </li>
            </ul>
            <div className='mobile_slider'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={15}
                    slidesPerView={2.2}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        650: {
                            slidesPerView: 2.2
                        },
                        0: {
                            slidesPerView: 1.2
                        }
                    }}
                    className='card_slider'
                >
                    <SwiperSlide>
                        <CardComponent type='half' extraClass='aside_cards' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardComponent type='half' extraClass='aside_cards' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardComponent type='half' extraClass='aside_cards' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardComponent type='half' extraClass='aside_cards' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </MainField>
    );
};

export default SideBarCardList;
