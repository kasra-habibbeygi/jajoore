import React from 'react';

// Assets
import { MainField } from './title.style';

// Types
interface ComponentTypes {
    title: string;
}
const TitleField = ({ title }: ComponentTypes) => {
    return (
        <MainField>
            <span></span>
            <h4>{title}</h4>
        </MainField>
    );
};

export default TitleField;
