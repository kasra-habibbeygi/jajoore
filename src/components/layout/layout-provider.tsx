import React from 'react';
import { ReactNode } from 'react';

// Component
import Navbar from './navbar';
import Footer from './footer';

//Types
interface ComponentTypes {
    children: ReactNode;
}

const LayoutProvider = ({ children }: ComponentTypes) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default LayoutProvider;
