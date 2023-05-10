/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';

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
    width?: number;
}

const DropDownLayout = ({ children, title, status, setDropDownStatus, width = 300 }: DropDownTypes) => {
    return (
        <LayoutField status={status} width={width}>
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
