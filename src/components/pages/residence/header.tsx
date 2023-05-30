import React from 'react';
import Image from 'next/image';

// Component
import Button from '@/components/form-group/button';

// Assets
import { MainField } from './header.style';
import PlayIcon from '@/assets/images/card/play.svg';
import CameraIcon from '@/assets/images/icons/camera.svg';
import Imageicon from '@/assets/images/icons/image.svg';

const ResidenceHeader = () => {
    return (
        <MainField>
            <Button shadow>
                <Image src={Imageicon} alt='' />
                تصاویر
            </Button>
            <Button shadow>
                <Image src={PlayIcon} alt='' />
                ویدئو
            </Button>
            <Button shadow>
                <Image src={CameraIcon} alt='' />
                تور مجازی
            </Button>
        </MainField>
    );
};

export default ResidenceHeader;
