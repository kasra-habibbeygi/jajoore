import React from 'react';

//Component
import HowToStart from '@/components/pages/guide/how-to-start';
import LayoutProvider from '@/components/layout/layout-provider';
import CardBox from '@/components/pages/guide/card-box';
import QA from '@/components/pages/guide/Q-A';
import Comments from '@/components/pages/guide/Comments';

//Assets
import { MainField } from '@/assets/styles/guide/main-field.style';

const Index = () => {
    return (
        <LayoutProvider>
            <HowToStart />
            <CardBox />
            <div className='container'>
                <MainField>
                    <QA />
                    <Comments />
                </MainField>
            </div>
        </LayoutProvider>
    );
};

export default Index;
