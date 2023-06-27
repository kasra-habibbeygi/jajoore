/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { filterActionHandler } from '@/state-manager/reducer/utils';

// Assets
import { LayoutField } from './layouyt.style';
import TrashIcon from '../../../assets/images/layout/trash.svg';

// Component
import Button from '@/components/form-group/button';

// Types
interface DropDownTypes {
    children: ReactNode;
    title?: string;
    status: boolean;
    setDropDownStatus: (status: string) => void;
    boxWidth?: number;
    name: string;
    className?: string;
}

const DropDownLayout = ({ children, title, status, setDropDownStatus, boxWidth = 300, name, className = '' }: DropDownTypes) => {
    const dispatch = useDispatch();
    const [position, setPosition] = useState<'right' | 'left'>('right');

    useEffect(() => {
        var el = document.getElementById(name);
        if (el) {
            if (el!.getBoundingClientRect().left <= 200) {
                setPosition('left');
            } else {
                setPosition('right');
            }
        }
    }, []);

    const ActionHandler = (actionType: 'remove' | 'apply') => {
        if (actionType === 'apply') {
            dispatch(
                filterActionHandler({
                    action: 'apply',
                    type: name
                })
            );
        } else {
            dispatch(
                filterActionHandler({
                    action: 'remove',
                    type: name
                })
            );
        }
    };

    return (
        <LayoutField status={status} boxWidth={boxWidth} id={name} position={position} className={`main_filter_field ${className}`}>
            {title && (
                <div className='header'>
                    <span></span>
                    {title}
                </div>
            )}
            {children}
            <div className='footer'>
                <Button color='white' type='text' extraClass='close_btn' handler={() => setDropDownStatus('')}>
                    <Image src={TrashIcon} alt='' />
                    بستن فیلتر
                </Button>
                <div className='action_group'>
                    <Button color='primary' handler={() => ActionHandler('remove')}>
                        حذف فیلتر
                    </Button>
                    <Button color='green' handler={() => ActionHandler('apply')}>
                        اعمال
                    </Button>
                </div>
            </div>
        </LayoutField>
    );
};

export default DropDownLayout;
