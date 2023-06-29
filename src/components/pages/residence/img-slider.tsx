import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Assets
import { MainField } from './img-slider.style';
import MocImg from '@/assets/images/moc/bg.jpg';

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

const ImgSlider = ({ status, setStatus }: any) => {
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
            </Dialog>
        </MainField>
    );
};

export default ImgSlider;
