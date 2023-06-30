import React, { useState } from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Component
import Button from '@/components/form-group/button';
import Link from 'next/link';

// Assets
import { MainField, VideoField, TitleHeaderField, ImageListField, MobileSliderField } from './header.style';
import PlayIcon from '@/assets/images/card/play.svg';
import CameraIcon from '@/assets/images/icons/camera.svg';
import Imageicon from '@/assets/images/icons/image.svg';
import ReturnArrowIcon from '@/assets/images/icons/back-arrow.svg';
import ImgSlider from './img-slider';

const ResidenceHeader = ({ data }: any) => {
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
                            <Image src={`${process.env.IMAGE_URL}${data?.imageGalleries[0]}`} alt='' width={1000} height={700} />
                        </li>
                        <li>
                            <Image src={`${process.env.IMAGE_URL}${data?.imageGalleries[1]}`} alt='' width={1000} height={700} />
                        </li>
                        <li>
                            <Image src={`${process.env.IMAGE_URL}${data?.imageGalleries[2]}`} alt='' width={1000} height={700} />
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
                            {data?.imageGalleries.map((item: any, index: number) => (
                                <SwiperSlide key={`mobile_image_list_${index}`}>
                                    <Image className='main_img' src={`${process.env.IMAGE_URL}${item}`} alt='' width={2000} height={1500} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </MobileSliderField>
                </>
            )}
            {tabsStatus === 1 && (
                <VideoField>
                    {/* <iframe src={`${process.env.IMAGE_URL}${data.mainVideoUrl}`}></iframe> */}
                    {/* <video width='320' height='240' controls>
                        <source src={`${process.env.IMAGE_URL}${data.mainVideoUrl}`} type='video/mp4' />
                    </video> */}
                </VideoField>
            )}
            <ImgSlider status={imgModalStatus} setStatus={setImgModalStatus} imgList={data?.imageGalleries} />
        </>
    );
};

export default ResidenceHeader;
