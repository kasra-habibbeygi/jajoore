import React from 'react';
import Image from 'next/image';

// Assets
import { ArticleCardField } from './article-card.styles';
import EmptyAvatar from '@/assets/images/card/empty-avatar.svg';

const ArticleCard = ({ data }: any) => {
    return (
        <ArticleCardField>
            <Image src={`${process.env.IMAGE_URL}${data.imageUrl}`} alt='' width={500} height={300} />
            <p className='info'>{data.title}</p>
            <div className='author_field'>
                <Image src={EmptyAvatar} alt='' />
                <p>{data.writer}</p>
            </div>
        </ArticleCardField>
    );
};

export default ArticleCard;
