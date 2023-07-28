/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';

// Assets
import * as S from './input.style';
import Alert from '@/assets/images/icons/simple-alert.svg';

// Component
import Tooltip from './tooltip';

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
    tooltipContent?: any;
    tooltipBody?: any;
}

const Input = ({
    label,
    type = 'text',
    placeholder,
    name,
    value,
    setValue,
    maxLength,
    mode = 'text',
    tooltipContent,
    tooltipBody = Alert
}: InputTypes) => {
    return (
        <S.InputField>
            {label && (
                <label htmlFor={name}>
                    {label}
                    {tooltipContent && (
                        <Tooltip title={tooltipContent}>
                            <Image className='tooltip_helper_img' src={tooltipBody} alt='' />
                        </Tooltip>
                    )}
                </label>
            )}
            <input
                autoComplete='off'
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
