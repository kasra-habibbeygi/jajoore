import React, { useState } from 'react';
import { ReactNode } from 'react';
import Image from 'next/image';

// Component
import ProfileAside from './profile-aside';
import Button from '../form-group/button';

//Assets
import { MainField } from './profile-layout-provider.style';
import MenuIcon from '@/assets/images/layout/menus.svg';
import EmptyAvatar from '@/assets/images/card/empty-avatar.svg';

//Types
interface ComponentTypes {
    children: ReactNode;
}

const ProfileLayoutProvider = ({ children }: ComponentTypes) => {
    const [sideMenuStatus, setSideMenuStatus] = useState(false);
    return (
        <>
            <MainField className='container'>
                <Button color='white' extraClass='panel_btn' radius='half-rounded' type='outline' handler={() => setSideMenuStatus(true)}>
                    <Image src={MenuIcon} alt='' />
                    <Image src={EmptyAvatar} alt='' className='avatar' />
                </Button>
                <ProfileAside sideMenuStatus={sideMenuStatus} setSideMenuStatus={setSideMenuStatus} />
                <div className='content'>{children}</div>
            </MainField>
        </>
    );
};

export default ProfileLayoutProvider;
