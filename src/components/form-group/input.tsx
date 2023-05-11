/* eslint-disable no-unused-vars */
import React from 'react';

// Assets
import * as S from './input.style';

// Types
interface InputTypes {
    value: string | number;
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    mode?: 'numeric' | 'tel' | 'email' | 'text';
    label?: string;
    type?: 'text' | 'password';
    placeholder?: string;
    maxLength?: number;
}

const Input = ({ label, type = 'text', placeholder, name, value, setValue, maxLength, mode = 'text' }: InputTypes) => {
    return (
        <S.InputField>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                id={name}
                value={value}
                onChange={e => setValue(e)}
                maxLength={maxLength && maxLength}
                inputMode={mode}
                name={name}
            />
        </S.InputField>
    );
};

export default Input;
