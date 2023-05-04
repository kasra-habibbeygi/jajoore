import React from 'react';

// Assets
import { MainField } from './destination-card.style';
import DestinationImg from '@/assets/images/moc/destination.jpg';

// Component
import TitleField from '../../template/title';
import Image from 'next/image';

const DestinationCard = () => {
    return (
        <MainField>
            <TitleField title='مقاصد پر طرفدار' />
            <div className='card_field'>
                <Image src={DestinationImg} alt='' />
                <div>
                    <p>اجاره ویلا در</p>
                    <h6>رامسر</h6>
                    <small>اقامتگاه 609</small>
                </div>
            </div>
            <div className='card_field'>
                <Image src={DestinationImg} alt='' />
                <div>
                    <p>اجاره ویلا در</p>
                    <h6>رامسر</h6>
                    <small>اقامتگاه 609</small>
                </div>
            </div>
            <div className='card_field'>
                <Image src={DestinationImg} alt='' />
                <div>
                    <p>اجاره ویلا در</p>
                    <h6>رامسر</h6>
                    <small>اقامتگاه 609</small>
                </div>
            </div>
            <div className='card_field'>
                <Image src={DestinationImg} alt='' />
                <div>
                    <p>اجاره ویلا در</p>
                    <h6>رامسر</h6>
                    <small>اقامتگاه 609</small>
                </div>
            </div>
            <div className='card_field'>
                <Image src={DestinationImg} alt='' />
                <div>
                    <p>اجاره ویلا در</p>
                    <h6>رامسر</h6>
                    <small>اقامتگاه 609</small>
                </div>
            </div>
            <div className='card_field'>
                <Image src={DestinationImg} alt='' />
                <div>
                    <p>اجاره ویلا در</p>
                    <h6>رامسر</h6>
                    <small>اقامتگاه 609</small>
                </div>
            </div>
        </MainField>
    );
};

export default DestinationCard;
