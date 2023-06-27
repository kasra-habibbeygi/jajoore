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
    data: any;
}

const SideBarCardList = ({ title, data }: SideBarCardListTypes) => {
    return (
        <MainField>
            <TitleField title={title} />
            <ul className='aside_cards_field'>
                {data.result.map((item: any) => (
                    <li key={`instance_items_${item.id}`}>
                        <CardComponent type='half' extraClass='aside_cards' data={item} />
                    </li>
                ))}
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
                    {data.result.map((item: any) => (
                        <SwiperSlide key={`instance_items_${item.id}`}>
                            <CardComponent type='half' extraClass='aside_cards' data={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </MainField>
    );
};

export default SideBarCardList;
