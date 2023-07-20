import React from 'react';

// Assets
import { MainField } from './textarea.style';

// Types
interface TextAreaTypes {
    placeholder: string;
    name: string;
    value: string;
    onChange: any;
    label?: string;
}

const TextArea = ({ placeholder, name, label, value, onChange }: TextAreaTypes) => {
    return (
        <MainField>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea name={name} id={name} placeholder={placeholder} value={value} onChange={onChange}></textarea>
        </MainField>
    );
};

export default TextArea;
