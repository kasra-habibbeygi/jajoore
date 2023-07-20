import React from 'react';
import Image from 'next/image';

//Assets
import { CardStyle } from './card.style';

//Types
interface CardTypes {
    src: any;
    title: string;
    text: string;
}

const Card = ({ src, title, text }: CardTypes) => {
    return (
        <CardStyle>
            <Image src={src} alt='' />
            <h2>{title}</h2>
            <span></span>
            <p>{text}</p>
        </CardStyle>
    );
};

export default Card;
