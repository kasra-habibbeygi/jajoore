import React, { useState } from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Component
import Button from '@/components/form-group/button';
import Link from 'next/link';
import MocImg from '@/assets/images/moc/bg.jpg';

// Assets
import { MainField, VideoField, TitleHeaderField, ImageListField, MobileSliderField } from './header.style';
import PlayIcon from '@/assets/images/card/play.svg';
import CameraIcon from '@/assets/images/icons/camera.svg';
import Imageicon from '@/assets/images/icons/image.svg';
import ReturnArrowIcon from '@/assets/images/icons/back-arrow.svg';
import MocImage from '@/assets/images/moc/bg.jpg';
import ImgSlider from './img-slider';

const ResidenceHeader = () => {
    const [tabsStatus, setTabsStatus] = useState<number>(0);
    const [imgModalStatus, setImgModalStatus] = useState<boolean>(false);

    return (
        <>
            <MainField>
                <Button shadow handler={() => setTabsStatus(0)}>
                    <Image src={Imageicon} alt='' />
                    تصاویر
                </Button>
                <Button shadow handler={() => setTabsStatus(1)}>
                    <Image src={PlayIcon} alt='' />
                    ویدئو
                </Button>
                <Button shadow handler={() => setTabsStatus(2)}>
                    <Image src={CameraIcon} alt='' />
                    تور مجازی
                </Button>
            </MainField>
            <TitleHeaderField>
                <h3>تصاویر ویلا</h3>
                <Link href='/'>
                    <Button>
                        بازگشت
                        <Image src={ReturnArrowIcon} alt='' />
                    </Button>
                </Link>
            </TitleHeaderField>
            {tabsStatus === 0 && (
                <>
                    <ImageListField>
                        <li>
                            <Image src={MocImage} alt='' />
                        </li>
                        <li>
                            <Image src={MocImage} alt='' />
                        </li>
                        <li>
                            <Image src={MocImage} alt='' />
                            <span className='layout'>
                                <Button radius='half-rounded' handler={() => setImgModalStatus(true)}>
                                    <Image src={Imageicon} alt='' />
                                    تصاوری بیشتر
                                </Button>
                            </span>
                        </li>
                    </ImageListField>
                    <MobileSliderField>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <Image className='main_img' src={MocImg} alt='' width={800} height={600} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image className='main_img' src={MocImg} alt='' width={800} height={600} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image className='main_img' src={MocImg} alt='' width={800} height={600} />
                            </SwiperSlide>
                        </Swiper>
                    </MobileSliderField>
                </>
            )}
            {tabsStatus === 1 && (
                <VideoField>
                    <iframe src='https://www.aparat.com/video/video/embed/videohash/WajNv/vt/frame'></iframe>
                </VideoField>
            )}
            <ImgSlider status={imgModalStatus} setStatus={setImgModalStatus} />
        </>
    );
};

export default ResidenceHeader;
