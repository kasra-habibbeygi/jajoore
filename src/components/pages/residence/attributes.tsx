import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './attributes.style';
import MocIcon from '@/assets/images/icons/camera.svg';
import Angle from '@/assets/images/icons/angle.svg';

// Component
import TitleField from '@/components/template/title';

// Types
interface ComponentTypes {
    title: string;
    attribute: any;
    availableItems?: number[];
    name?: string;
}

const Attributes = ({ title, attribute, availableItems, name }: ComponentTypes) => {
    return (
        <MainField>
            <TitleField title={title} />
            <ul>
                {attribute.map((item: any) => (
                    <li key={`${name}_items_${item.id}`}>
                        <div className={availableItems?.includes(item.id) ? '' : 'removed'}>
                            <Image src={MocIcon} alt='' />
                            <p>{item.name}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </MainField>
    );
};

export default Attributes;
