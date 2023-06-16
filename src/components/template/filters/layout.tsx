/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { ReactNode, useEffect, useState } from 'react';

// Assets
import { LayoutField } from './layouyt.style';
import TrashIcon from '../../../assets/images/layout/trash.svg';

// Component
import Button from '@/components/form-group/button';
import Image from 'next/image';

// Types
interface DropDownTypes {
    children: ReactNode;
    title: string;
    status: boolean;
    setDropDownStatus: (status: string) => void;
    boxWidth?: number;
    name: string;
}

const DropDownLayout = ({ children, title, status, setDropDownStatus, boxWidth = 300, name }: DropDownTypes) => {
    const [position, setPosition] = useState<'right' | 'left'>('right');
    var el = typeof window !== 'undefined' && document.getElementById(name);

    useEffect(() => {
        if (el) {
            if (el!.getBoundingClientRect().left <= 200) {
                setPosition('left');
            } else {
                setPosition('right');
            }
        }
    }, []);

    return (
        <LayoutField status={status} boxWidth={boxWidth} id={name} position={position}>
            <div className='header'>
                <span></span>
                {title}
            </div>
            {children}
            <div className='footer'>
                <Button color='white' type='text' extraClass='close_btn' handler={() => setDropDownStatus('')}>
                    <Image src={TrashIcon} alt='' />
                    بستن فیلتر
                </Button>
                <div className='action_group'>
                    <Button color='primary'>حذف فیلتر</Button>
                    <Button color='green'>اعمال</Button>
                </div>
            </div>
        </LayoutField>
    );
};

export default DropDownLayout;
