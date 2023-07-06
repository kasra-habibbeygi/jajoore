import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Assets
import { MainField } from './img-slider.style';

// MUI
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const ImgSlider = ({ status, setStatus, imgList }: any) => {
    return (
        <MainField>
            <Dialog
                open={status}
                TransitionComponent={Transition}
                keepMounted
                disablePortal
                onClose={() => setStatus(false)}
                fullWidth={true}
                scroll='body'
                maxWidth='lg'
            >
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {imgList.map((item: any, index: number) => (
                        <SwiperSlide key={`image_list_${index}`}>
                            <Image
                                className='main_img'
                                src={`${process.env.IMAGE_URL}${item.url}`}
                                alt={item.alt}
                                width={2000}
                                height={1500}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Dialog>
        </MainField>
    );
};

export default ImgSlider;
