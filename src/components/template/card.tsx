/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch } from 'react-redux';
import { selectedLocationHandler } from '@/state-manager/reducer/map';
import Image from 'next/image';
import Link from 'next/link';

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

// Hook
import useTimer from '@/hooks/useTimer';
import Button from '../form-group/button';

// MUI
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

// Types
interface CardComponentTypes {
    type?: 'full' | 'half';
    blur?: boolean;
    extraClass?: string;
    data?: any;
}

const CardComponent = ({ type = 'full', blur, extraClass, data }: CardComponentTypes) => {
    const dispatch = useDispatch();
    const [days, hours, minutes, seconds] = useTimer(data.discountTime);
    const [domLoader, setDomLoader] = useState<boolean>(false);

    useEffect(() => {
        setDomLoader(true);
    }, []);

    const cardHoverHandler = (action: 'add' | 'remove') => {
        if (action === 'add') {
            dispatch(
                selectedLocationHandler({
                    lat: data.lat,
                    lng: data.lng
                })
            );
        } else {
            dispatch(
                selectedLocationHandler({
                    lat: '',
                    lng: ''
                })
            );
        }
    };

    return (
        <MainCardField className={extraClass} onMouseEnter={() => cardHoverHandler('add')} onMouseLeave={() => cardHoverHandler('remove')}>
            <div className='image_field'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className='image_slider'
                >
                    {data.imageGalleries.map((item: any, index: number) => (
                        <SwiperSlide key={`residence_image_card_${index}`}>
                            <Image
                                src={`${process.env.IMAGE_URL}${item.url}`}
                                alt={item.alt}
                                width={500}
                                height={300}
                                className='card_image'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='pills_field'>
                    {data.instant && (
                        <span className='yellow'>
                            <Image src={FastChargeIcon} alt='' />
                            <p>رزرو آنی</p>
                        </span>
                    )}
                    {data.plus && (
                        <span className='yellow_light'>
                            <Image src={PlusIcon} alt='' />
                            <p>پلاس</p>
                        </span>
                    )}
                    {data.hasVideo && (
                        <span className='red'>
                            <Image src={PlayIcon} alt='' />
                            <p>ویدیو</p>
                        </span>
                    )}
                    {data.priceGuarantee && (
                        <span className='green'>
                            <p> تضمین قیمت</p>
                        </span>
                    )}
                </div>
                {data.vip && <div className='vip_field'>VIP</div>}
                <div className={`discount_field ${type === 'half' ? 'half_card_discount' : ''}`}>
                    <span>{data.discountPercent}%</span>
                    <p>
                        {hours} :{minutes} :{seconds}
                    </p>
                </div>
            </div>
            <div className={`title ${type === 'half' ? 'position_added' : ''}`}>
                <Link href={`/residence/${data.id}`}>
                    <p>{data.title}</p>
                </Link>
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
                        <Image
                            src={`${process.env.IMAGE_URL}${data?.ownerProfileImg.url}`}
                            alt={data?.ownerProfileImg.alt}
                            width={1000}
                            height={700}
                            className='avatar_img'
                        />
                        <div>
                            <span className='yellow'>
                                <Image src={StarIcon} alt='' />
                                {data.totalScores}
                            </span>
                            <span className='blue'>
                                <Image src={CommentIcon} alt='' />
                                {data.numberOfComments}
                            </span>
                        </div>
                    </div>
                    <div className='location_field'>
                        <div className='location'>
                            <Image src={LocationIcon} alt='' />
                            {data.province} , {data.city}
                        </div>
                        {data.lastMinute && <span>لحظه آخری</span>}
                    </div>
                </div>
            )}
            <p className='price'>
                از شبی{' '}
                {data.discountedPrice !== 0 ? (
                    <>
                        <b>{domLoader && parseInt(data.price).toLocaleString()}</b>{' '}
                        {domLoader && parseInt(data.discountedPrice).toLocaleString()}
                    </>
                ) : (
                    domLoader && parseInt(data.price).toLocaleString()
                )}{' '}
                تومان
            </p>
            <div className='options'>
                <div>
                    <Image src={GroupUsersIcon} alt='' width={100} />
                    <p>
                        {data.maxCapacity} ~ {data.capacity}
                    </p>
                    <p>نفر</p>
                </div>
                <div>
                    <Image src={DoubleBedIcon} alt='' width={100} />
                    <p>{data.bedCount}</p>
                    <p>خواب</p>
                </div>
                <div>
                    <Image src={StairsIcon} alt='' width={100} />
                    <p>{data.numberOfFloor}</p>
                    <p>طبقه</p>
                </div>
                <div>
                    <Image src={MeterIcon} alt='' width={100} />
                    <p>{data.areaOfFloor}</p>
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
