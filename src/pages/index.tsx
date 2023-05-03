import React from 'react';

// Assets
import { DoubleCol } from '@/assets/styles/main';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import IndexHeader from '@/components/pages/index/header';
import VipSlider from '@/components/pages/index/vip-slider';

const Index = () => {
    return (
        <LayoutProvider>
            <main className='container'>
                <IndexHeader />
                <DoubleCol>
                    <aside className='aside'></aside>
                    <div className='content_field'>
                        <VipSlider />
                    </div>
                </DoubleCol>
            </main>
        </LayoutProvider>
    );
};

export default Index;
