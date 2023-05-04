/* eslint-disable no-unused-vars */
import Image from 'next/image';
import React from 'react';

// Assets
import { PillField } from './pill.style';

// Component
import Button from '@/components/form-group/button';

// Types
interface ComponentTypes {
    title: string;
    img?: any;
    handler: Function;
}

const FilterPill = ({ title, img, handler }: ComponentTypes) => {
    return (
        <PillField onClick={() => handler()}>
            <Button color='white'>
                <Image src={img} alt='' />
                <p>{title}</p>
            </Button>
        </PillField>
    );
};

export default FilterPill;
