import React from 'react';

// Component
import CardComponent from '@/components/template/card';
import TitleField from '@/components/template/title';

// Types
interface SideBarCardListTypes {
    title: string;
}

const SideBarCardList = ({ title }: SideBarCardListTypes) => {
    return (
        <>
            <TitleField title={title} />
            <ul className='aside_cards_field'>
                <li>
                    <CardComponent type='half' extraClass='aside_cards' />
                </li>
                <li>
                    <CardComponent type='half' extraClass='aside_cards' />
                </li>
                <li>
                    <CardComponent type='half' extraClass='aside_cards' />
                </li>
            </ul>
        </>
    );
};

export default SideBarCardList;
