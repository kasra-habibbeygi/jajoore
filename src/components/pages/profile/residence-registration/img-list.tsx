import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './img-list.style';
import MocImg from '@/assets/images/moc/bg.jpg';
import BinIcon from '@/assets/images/icons/bin.svg';
import MoveIcon from '@/assets/images/icons/move.svg';

// Component
import TextArea from '@/components/form-group/textarea';
import Button from '@/components/form-group/button';

const ImageList = () => {
    return (
        <MainField>
            <div className='main_card_field'>
                <div className='body'>
                    <div className='img_field'>
                        <Image className='main_img' src={MocImg} alt='' />
                        <Button extraClass='delete_icon' color='primary'>
                            <Image src={BinIcon} alt='' />
                        </Button>
                        <Button extraClass='move_icon'>
                            <Image src={MoveIcon} alt='' />
                        </Button>
                        <div className='number_field'>
                            <span className='number'>1</span>
                            <span className='title'>تصویر اصلی</span>
                        </div>
                    </div>
                    <div className='input_field'>
                        <TextArea value='تهران شهر من نیست' name='' onChange={() => {}} placeholder='عنوان مناسبی برای این تصویر بنویسید' />
                    </div>
                </div>
            </div>
            <div className='main_card_field'>
                <div className='body'>
                    <div className='img_field'>
                        <Image className='main_img' src={MocImg} alt='' />
                        <Button extraClass='delete_icon' color='primary'>
                            <Image src={BinIcon} alt='' />
                        </Button>
                        <Button extraClass='move_icon'>
                            <Image src={MoveIcon} alt='' />
                        </Button>
                        <div className='number_field'>
                            <span className='number'>2</span>
                        </div>
                    </div>
                    <div className='input_field'>
                        <TextArea value='تهران شهر من نیست' name='' onChange={() => {}} placeholder='عنوان مناسبی برای این تصویر بنویسید' />
                    </div>
                </div>
            </div>
            <div className='main_card_field'>
                <div className='body'>
                    <div className='img_field'>
                        <Image className='main_img' src={MocImg} alt='' />
                        <Button extraClass='delete_icon' color='primary'>
                            <Image src={BinIcon} alt='' />
                        </Button>
                        <Button extraClass='move_icon'>
                            <Image src={MoveIcon} alt='' />
                        </Button>
                        <div className='number_field'>
                            <span className='number'>3</span>
                        </div>
                    </div>
                    <div className='input_field'>
                        <TextArea value='تهران شهر من نیست' name='' onChange={() => {}} placeholder='عنوان مناسبی برای این تصویر بنویسید' />
                    </div>
                </div>
            </div>
            <div className='main_card_field'>
                <div className='body'>
                    <div className='img_field'>
                        <Image className='main_img' src={MocImg} alt='' />
                        <Button extraClass='delete_icon' color='primary'>
                            <Image src={BinIcon} alt='' />
                        </Button>
                        <Button extraClass='move_icon'>
                            <Image src={MoveIcon} alt='' />
                        </Button>
                        <div className='number_field'>
                            <span className='number'>4</span>
                        </div>
                    </div>
                    <div className='input_field'>
                        <TextArea value='تهران شهر من نیست' name='' onChange={() => {}} placeholder='عنوان مناسبی برای این تصویر بنویسید' />
                    </div>
                </div>
            </div>
        </MainField>
    );
};

export default ImageList;
