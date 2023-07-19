import React from 'react';

//Component
import HowToStart from '@/components/pages/guide/how-to-start';
import LayoutProvider from '@/components/layout/layout-provider';
import CardBox from '@/components/pages/guide/card-box';
import QA from '@/components/pages/guide/Q-A';
import Comments from '@/components/pages/guide/Comments';

const Index = () => {
    return (
        <LayoutProvider>
            <HowToStart />
            <CardBox />
            <div style={{ display: 'flex', gap: '100px' }} className='container'>
                <QA />
                <Comments />
            </div>
        </LayoutProvider>
    );
};

export default Index;
