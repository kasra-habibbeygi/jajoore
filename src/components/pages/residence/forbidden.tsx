/* eslint-disable consistent-return */
import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './forbidden.style';
import MocIcon from '@/assets/images/icons/camera.svg';

const ForbiddenTemp = ({ availableItems, attribute, name }: any) => {
    return (
        <MainField>
            <h3>موارد ممنوعه</h3>
            <ul>
                {attribute.map((item: any) => {
                    if (availableItems?.includes(item.id)) {
                        return (
                            <li key={`${name}_items_${item.id}`}>
                                <Image src={MocIcon} alt='' />
                                <p>{item.name}</p>
                            </li>
                        );
                    }
                })}
            </ul>
        </MainField>
    );
};

export default ForbiddenTemp;
