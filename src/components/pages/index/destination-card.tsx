import React from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Assets
import { MainField } from './destination-card.style';
import DestinationImg from '@/assets/images/moc/destination.jpg';

// Component
import TitleField from '../../template/title';

const DestinationCard = () => {
    return (
        <MainField>
            <TitleField title='مقاصد پر طرفدار' />
            <ul className='cards_container'>
                <li className='card_field'>
                    <Image src={DestinationImg} alt='' />
                    <div>
                        <p>اجاره ویلا در</p>
                        <h6>رامسر</h6>
                        <small>اقامتگاه 609</small>
                    </div>
                </li>
                <li className='card_field'>
                    <Image src={DestinationImg} alt='' />
                    <div>
                        <p>اجاره ویلا در</p>
                        <h6>رامسر</h6>
                        <small>اقامتگاه 609</small>
                    </div>
                </li>
                <li className='card_field'>
                    <Image src={DestinationImg} alt='' />
                    <div>
                        <p>اجاره ویلا در</p>
                        <h6>رامسر</h6>
                        <small>اقامتگاه 609</small>
                    </div>
                </li>
                <li className='card_field'>
                    <Image src={DestinationImg} alt='' />
                    <div>
                        <p>اجاره ویلا در</p>
                        <h6>رامسر</h6>
                        <small>اقامتگاه 609</small>
                    </div>
                </li>
                <li className='card_field'>
                    <Image src={DestinationImg} alt='' />
                    <div>
                        <p>اجاره ویلا در</p>
                        <h6>رامسر</h6>
                        <small>اقامتگاه 609</small>
                    </div>
                </li>
                <li className='card_field'>
                    <Image src={DestinationImg} alt='' />
                    <div>
                        <p>اجاره ویلا در</p>
                        <h6>رامسر</h6>
                        <small>اقامتگاه 609</small>
                    </div>
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
                        <div className='card_field'>
                            <Image src={DestinationImg} alt='' />
                            <div>
                                <p>اجاره ویلا در</p>
                                <h6>رامسر</h6>
                                <small>اقامتگاه 609</small>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card_field'>
                            <Image src={DestinationImg} alt='' />
                            <div>
                                <p>اجاره ویلا در</p>
                                <h6>رامسر</h6>
                                <small>اقامتگاه 609</small>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card_field'>
                            <Image src={DestinationImg} alt='' />
                            <div>
                                <p>اجاره ویلا در</p>
                                <h6>رامسر</h6>
                                <small>اقامتگاه 609</small>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='card_field'>
                            <Image src={DestinationImg} alt='' />
                            <div>
                                <p>اجاره ویلا در</p>
                                <h6>رامسر</h6>
                                <small>اقامتگاه 609</small>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </MainField>
    );
};

export default DestinationCard;
