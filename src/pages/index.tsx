import React from 'react';

// Assets
import { DoubleCol } from '@/assets/styles/main';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import IndexHeader from '@/components/pages/index/header';
import VipSlider from '@/components/pages/index/vip-slider';
import CardsList from '@/components/pages/index/cards-list';
import ArticleSlider from '@/components/pages/index/article-slider';
import Filter from '@/components/template/filters/filter';

const Index = () => {
    return (
        <LayoutProvider>
            <Filter />
            <main className='container'>
                <IndexHeader />
                <DoubleCol>
                    <aside className='aside'></aside>
                    <div className='content_field'>
                        <VipSlider />
                        <CardsList />
                    </div>
                </DoubleCol>
                <ArticleSlider />
            </main>
        </LayoutProvider>
    );
};

export default Index;
