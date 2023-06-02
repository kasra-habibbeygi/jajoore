import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './attributes.style';
import MocIcon from '../../../assets/images/icons/camera.svg';

// Component
import TitleField from '@/components/template/title';

// Types
interface ComponentTypes {
    title: string;
}

const Attributes = ({ title }: ComponentTypes) => {
    return (
        <MainField>
            <TitleField title={title} />
            <ul>
                <li>
                    <div className='removed'>
                        <Image src={MocIcon} alt='' />
                        <p>ماشین ظرفشویی</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image src={MocIcon} alt='' />
                        <p>ماشین ظرفشویی</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image src={MocIcon} alt='' />
                        <p>ماشین ظرفشویی</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image src={MocIcon} alt='' />
                        <p>ماشین ظرفشویی</p>
                    </div>
                </li>
                <li>
                    <div className='removed'>
                        <Image src={MocIcon} alt='' />
                        <p>ماشین ظرفشویی</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image src={MocIcon} alt='' />
                        <p>ماشین ظرفشویی</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image src={MocIcon} alt='' />
                        <p>ماشین ظرفشویی</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image src={MocIcon} alt='' />
                        <p>ماشین ظرفشویی</p>
                    </div>
                </li>
                <li>
                    <div>
                        <Image src={MocIcon} alt='' />
                        <p>ماشین ظرفشویی</p>
                    </div>
                </li>
            </ul>
        </MainField>
    );
};

export default Attributes;
