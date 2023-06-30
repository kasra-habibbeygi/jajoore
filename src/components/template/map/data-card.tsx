import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import { MainField } from './data-card.style';
import StarIcon from '@/assets/images/card/star.svg';

const MapDataCard = ({ data, mapScaleStatus }: any) => {
    const [domLoader, setDomLoader] = useState<boolean>(false);

    useEffect(() => {
        setDomLoader(true);
    }, []);

    console.log(data);

    return (
        <MainField stats={data !== ''} mapScaleStatus={mapScaleStatus}>
            {data && (
                <Image src={`${process.env.IMAGE_URL}${data?.imageGalleries[0]}`} width={500} height={500} alt='' className='main_img' />
            )}
            <div className='info'>
                <h5>
                    <Link href={`/residence/${data?.residenceNO}`}>
                        <p>{data.title}</p>
                    </Link>
                    {data.vip && <span>VIP</span>}
                </h5>
                <div className='details'>
                    <p>{data.numberOfRoom} خوابه</p>.<p>{data.areaOfFloor} متر</p>.<p>تا {data.maxCapacity} مهمان</p>
                    <p>
                        <Image src={StarIcon} alt='' />
                        {data.totalScores}
                    </p>
                </div>
                <div className='footer'>
                    <p className='price'>از شبی {domLoader && parseInt(data.price).toLocaleString()}تومان</p>
                    <span>لحظه آخری</span>
                </div>
            </div>
        </MainField>
    );
};

export default MapDataCard;
