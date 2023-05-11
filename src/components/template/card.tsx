/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Assets
import { MainCardField, CardCover } from './card.style';
import CommentIcon from '@/assets/images/card/comment.svg';
import DoubleBedIcon from '@/assets/images/card/double-bed.svg';
import GroupUsersIcon from '@/assets/images/card/group-users.svg';
import HeartIcon from '@/assets/images/card/heart.svg';
import LocationIcon from '@/assets/images/card/location.svg';
import MeterIcon from '@/assets/images/card/meter.svg';
import ShareIcon from '@/assets/images/card/share.svg';
import StairsIcon from '@/assets/images/card/stairs.svg';
import StarIcon from '@/assets/images/card/star.svg';
import FastChargeIcon from '@/assets/images/card/fast-charge.svg';
import PlayIcon from '@/assets/images/card/play.svg';
import PlusIcon from '@/assets/images/card/plus.svg';
import EmptyAvatar from '@/assets/images/card/empty-avatar.svg';
import MocImg from '@/assets/images/moc/bg.jpg';

// Hook
import useTimer from '@/hooks/use-timer';
import Button from '../form-group/button';

// MUI
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import Link from 'next/link';

// Types
interface CardComponentTypes {
    type?: 'full' | 'half';
    blur?: boolean;
}

const CardComponent = ({ type = 'full', blur }: CardComponentTypes) => {
    const [days, hours, minutes, seconds] = useTimer(20000000000);

    return (
        <MainCardField>
            <div className='image_field'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className='image_slider'
                >
                    <SwiperSlide>
                        <Image src={MocImg} alt='' className='card_image' />
                    </SwiperSlide>
                    {type === 'full' && (
                        <>
                            <SwiperSlide>
                                <Image src={MocImg} alt='' className='card_image' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={MocImg} alt='' className='card_image' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={MocImg} alt='' className='card_image' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={MocImg} alt='' className='card_image' />
                            </SwiperSlide>
                        </>
                    )}
                </Swiper>
                <div className='pills_field'>
                    <span className='yellow'>
                        <Image src={FastChargeIcon} alt='' />
                        <p>رزرو آنی</p>
                    </span>
                    <span className='yellow_light'>
                        <Image src={PlusIcon} alt='' />
                        <p>پلاس</p>
                    </span>
                    <span className='red'>
                        <Image src={PlayIcon} alt='' />
                        <p>ویدیو</p>
                    </span>
                    <span className='green'>
                        <p> تضمین قیمت</p>
                    </span>
                </div>
                <div className='vip_field'>VIP</div>
                <div className={`discount_field ${type === 'half' ? 'half_card_discount' : ''}`}>
                    <span>20%</span>
                    <p>
                        {hours} :{minutes} :{seconds}
                    </p>
                </div>
            </div>
            <div className={`title ${type === 'half' ? 'position_added' : ''}`}>
                <p>اجاره ویلا کردان ۳ خواب با استخر آبگر </p>
                {type === 'full' && (
                    <div>
                        <Image src={HeartIcon} alt='' />
                        <Image src={ShareIcon} alt='' />
                    </div>
                )}
            </div>
            {type === 'full' && (
                <div className='avatar_field'>
                    <div className='avatar'>
                        <Image src={EmptyAvatar} alt='' className='avatar_img' />
                        <div>
                            <span className='yellow'>
                                <Image src={StarIcon} alt='' />
                                4.5
                            </span>
                            <span className='blue'>
                                <Image src={CommentIcon} alt='' />
                                56
                            </span>
                        </div>
                    </div>
                    <div className='location_field'>
                        <div className='location'>
                            <Image src={LocationIcon} alt='' />
                            البرز، کردان
                        </div>
                        <span>لحظه آخری</span>
                    </div>
                </div>
            )}
            <p className='price'>
                از شبی <b>2.600.000</b> 1.600.000 تومان
            </p>
            <div className='options'>
                <div>
                    <Image src={GroupUsersIcon} alt='' width={100} />
                    <p>7 ~ 3</p>
                    <p>نفر</p>
                </div>
                <div>
                    <Image src={DoubleBedIcon} alt='' width={100} />
                    <p>3</p>
                    <p>خواب</p>
                </div>
                <div>
                    <Image src={StairsIcon} alt='' width={100} />
                    <p>3</p>
                    <p>طبقه</p>
                </div>
                <div>
                    <Image src={MeterIcon} alt='' width={100} />
                    <p>270</p>
                    <p>متراژ</p>
                </div>
            </div>
            {blur && (
                <CardCover>
                    <p>اقامتگاه های ممتاز</p>
                    <Button color='primary'>
                        <Link href='/'>
                            1856 اقامتگاه ممتاز <ChevronLeftRoundedIcon />
                        </Link>
                    </Button>
                </CardCover>
            )}
        </MainCardField>
    );
};

export default CardComponent;
