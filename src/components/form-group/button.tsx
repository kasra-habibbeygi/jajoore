import React, { ReactNode } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

// Assets
import { ButtonField } from './button.style';

// Types
interface ButtonComponentType {
    children: ReactNode;
    shadow?: boolean;
    radius?: 'sharp-rounded' | 'half-rounded' | 'rounded';
    type?: 'text' | 'outline' | 'filled' | 'outline-filled';
    color?: 'white' | 'primary' | 'yellow' | 'green' | 'dark';
    handler?: () => void;
    loader?: boolean;
    loaderColor?: string;
    extraClass?: string;
    disabled?: boolean;
}

const Button = ({
    children,
    shadow = false,
    radius = 'sharp-rounded',
    type = 'filled',
    color = 'white',
    handler,
    loader = false,
    loaderColor = '#ffffff',
    extraClass = '',
    disabled = false
}: ButtonComponentType) => {
    return (
        <ButtonField
            onClick={() => handler && handler()}
            shadow={shadow}
            radius={radius}
            className={`${type} ${color} ${extraClass}`}
            disabled={disabled}
        >
            <PulseLoader loading={loader} color={loaderColor} size={10} />
            {children}
        </ButtonField>
    );
};

export default Button;
