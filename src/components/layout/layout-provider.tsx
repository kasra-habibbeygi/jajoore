import React from 'react';
import { ReactNode } from 'react';

// Component
import Navbar from './navbar';
import Footer from './footer';
import MobileNavbar from './mobile-navbar';

//Types
interface ComponentTypes {
    children: ReactNode;
}

const LayoutProvider = ({ children }: ComponentTypes) => {
    return (
        <>
            <Navbar />
            {children}
            <MobileNavbar />
            <Footer />
        </>
    );
};

export default LayoutProvider;
