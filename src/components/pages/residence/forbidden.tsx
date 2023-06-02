import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './forbidden.style';
import MocIcon from '@/assets/images/icons/camera.svg';

const ForbiddenTemp = () => {
    return (
        <MainField>
            <h3>موارد ممنوعه</h3>
            <ul>
                <li>
                    <Image src={MocIcon} alt='' />
                    <p>برگذاری جشن مهمانی های کوچک ممنوع است</p>
                </li>
                <li>
                    <Image src={MocIcon} alt='' />
                    <p>برگذاری جشن مهمانی های کوچک ممنوع است</p>
                </li>
                <li>
                    <Image src={MocIcon} alt='' />
                    <p>برگذاری جشن مهمانی های کوچک ممنوع است</p>
                </li>
                <li>
                    <Image src={MocIcon} alt='' />
                    <p>برگذاری جشن مهمانی های کوچک ممنوع است</p>
                </li>
            </ul>
        </MainField>
    );
};

export default ForbiddenTemp;
