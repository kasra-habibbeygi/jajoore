import React from 'react';
import { ReactNode } from 'react';

// Component
import ProfileAside from './profile-aside';

//Assets
import { MainField } from './profile-layout-provider.style';

//Types
interface ComponentTypes {
    children: ReactNode;
}

const ProfileLayoutProvider = ({ children }: ComponentTypes) => {
    return (
        <>
            <MainField className='container'>
                <ProfileAside />
                <div className='content'>{children}</div>
            </MainField>
        </>
    );
};

export default ProfileLayoutProvider;
