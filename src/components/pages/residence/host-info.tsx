import React from 'react';

// Assets
import { MainField } from './host-info.style';
import Image from 'next/image';
import Button from '@/components/form-group/button';

// Tools
import Tools from '@/utils/tools';

const HostInfo = ({ data }: any) => {
    return (
        <MainField>
            <div className='header_field'>
                <div className='avatar'>
                    <Image
                        src={`${process.env.IMAGE_URL}${data.ownerProfileImg.url}`}
                        alt={data.ownerProfileImg.alt}
                        width={500}
                        height={300}
                    />
                    <div>
                        <p>{data.ownerName}</p>
                        <small>عضویت : از {Tools.changeTimeStampToHumanReadAble(parseInt(data.ownerCreatedate))}</small>
                    </div>
                </div>
                <div className='left_field'>
                    <p>
                        سرعت پاسخگویی : <span>{data.ownerResponsespeed}</span>
                    </p>
                    <p>
                        میزارن تایید رزرو : <span>{data.ownerRateReservationConfirmation} درصد</span>
                    </p>
                </div>
            </div>
            <Button type='outline'>مشاهده حساب کاربری مالک</Button>
        </MainField>
    );
};

export default HostInfo;
