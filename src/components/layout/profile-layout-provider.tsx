import React from 'react';
import { ReactNode } from 'react';

// Component
import Navbar from './navbar';
import Footer from './footer';
import MobileNavbar from './mobile-navbar';
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
            <Navbar />
            <MainField>
                <ProfileAside />
                <div className='content'>{children}</div>
            </MainField>
            <MobileNavbar />
            <Footer />
        </>
    );
};

export default ProfileLayoutProvider;
