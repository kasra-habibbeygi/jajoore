import React from 'react';
import Image from 'next/image';

// Assets
import { ArticleCardField } from './article-card.styles';
import EmptyAvatar from '@/assets/images/card/empty-avatar.svg';
import MocImg from '@/assets/images/moc/bg.jpg';

const ArticleCard = () => {
    return (
        <ArticleCardField>
            <Image src={MocImg} alt='' />
            <p className='info'>
                جاجوره سایت آگهی اجاره ویلا و سوئیت جهت اقامت روزانه مسافران با هدف ارتباط بیواسطه مسافر با میزبان و بدون{' '}
            </p>
            <div className='author_field'>
                <Image src={EmptyAvatar} alt='' />
                <p>کسری حبیب بیگی</p>
            </div>
        </ArticleCardField>
    );
};

export default ArticleCard;
