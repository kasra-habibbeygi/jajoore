import React, { ReactNode } from 'react';

// Assets
import { LayoutField } from './layouyt.style';

// Component
import Button from '@/components/form-group/button';

// Types
interface DropDownTypes {
    children: ReactNode;
    title: string;
    status: boolean;
}

const DropDownLayout = ({ children, title, status }: DropDownTypes) => {
    return (
        <LayoutField status={status}>
            <div className='header'>
                <span></span>
                {title}
            </div>
            {children}
            <div className='footer'>
                <Button color='green'>اعمال</Button>
                <Button color='primary'>حذف فیلتر</Button>
            </div>
        </LayoutField>
    );
};

export default DropDownLayout;
