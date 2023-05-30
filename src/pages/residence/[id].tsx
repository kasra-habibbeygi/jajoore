import React from 'react';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import Filter from '@/components/template/filters/filter';
import Header from '@/components/pages/residence/header';
import Images from '@/components/pages/residence/images';

const Residence = () => {
    return (
        <LayoutProvider>
            <Filter />
            <main className='container'>
                <Header />
                <Images />
            </main>
        </LayoutProvider>
    );
};

export default Residence;
