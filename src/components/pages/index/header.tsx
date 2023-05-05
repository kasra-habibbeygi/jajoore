import React, { useState } from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './header.styles';
import ShareIcon from '@/assets/images/card/share.svg';

// Component
import ShareModal from '@/components/modals/share';

const IndexHeader = () => {
    const [shareModalStatus, setShareModalStatus] = useState(false);

    const modalStatusHandler = () => {
        setShareModalStatus(true);
    };

    return (
        <>
            <MainField>
                <div className='right_field'>
                    <h1>اجاره ویلا</h1>
                    <small>5200 اقامت گاه از 82.000 تومان</small>
                </div>
                <div className='left_field'>
                    <Image src={ShareIcon} alt='' className='share' onClick={modalStatusHandler} />
                </div>
            </MainField>
            <ShareModal status={shareModalStatus} setStatus={setShareModalStatus} />
        </>
    );
};

export default IndexHeader;
