import React from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Assets
import { MainField } from './destination-card.style';
import DestinationImg from '@/assets/images/moc/destination.jpg';

// Component
import TitleField from '../../template/title';

const DestinationCard = ({ data }: any) => {
    console.log(data);

    return (
        <MainField>
            <TitleField title='مقاصد پر طرفدار' />
            <ul className='cards_container'>
                {data.data.map((item: any, index: number) => (
                    <li className='card_field' key={`popular_destinations_item_${index}`}>
                        <Link href='/'>
                            <Image src={DestinationImg} alt='' />
                            <div>
                                <p>اجاره ویلا در</p>
                                <h6>{item.title}</h6>
                                <small>{item.residenceCount} اقامتگاه</small>
                            </div>
                        </Link>
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
                    {data.data.map((item: any, index: number) => (
                        <SwiperSlide key={`mobile_popular_destinations_item_${index}`}>
                            <div className='card_field'>
                                <Link href='/'>
                                    <Image src={DestinationImg} alt='' />
                                    <div>
                                        <p>اجاره ویلا در</p>
                                        <h6>{item.title}</h6>
                                        <small>{item.residenceCount} اقامتگاه</small>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </MainField>
    );
};

export default DestinationCard;
