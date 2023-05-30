import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import { HeaderField, MainField } from './images.style';
import ReturnArrowIcon from '@/assets/images/icons/back-arrow.svg';
import MocImage from '@/assets/images/moc/bg.jpg';
import Imageicon from '@/assets/images/icons/image.svg';

// Component
import Button from '@/components/form-group/button';

const ResidenceImages = () => {
    return (
        <>
            <HeaderField>
                <h3>تصاویر ویلا</h3>
                <Link href='/'>
                    <Button>
                        بازگشت
                        <Image src={ReturnArrowIcon} alt='' />
                    </Button>
                </Link>
            </HeaderField>
            <MainField>
                <li>
                    <Image src={MocImage} alt='' />
                </li>
                <li>
                    <Image src={MocImage} alt='' />
                </li>
                <li>
                    <Image src={MocImage} alt='' />
                    <span className='layout'>
                        <Button radius='half-rounded'>
                            <Image src={Imageicon} alt='' />
                            تصاوری بیشتر
                        </Button>
                    </span>
                </li>
            </MainField>
        </>
    );
};

export default ResidenceImages;
