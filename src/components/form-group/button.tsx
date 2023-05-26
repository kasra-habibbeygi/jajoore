import React, { ReactNode } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

// Assets
import { ButtonField } from './button.style';

// Types
interface ButtonComponentType {
    children: ReactNode;
    shadow?: boolean;
    radius?: 'half-rounded' | 'rounded';
    type?: 'text' | 'outline' | 'filled' | 'outline-filled';
    color?: 'white' | 'primary' | 'yellow' | 'green' | 'dark';
    handler?: () => void;
    loader?: boolean;
    loaderColor?: string;
    extraClass?: string;
}

const Button = ({
    children,
    shadow = false,
    radius = 'half-rounded',
    type = 'filled',
    color = 'white',
    handler,
    loader = false,
    loaderColor = '#ffffff',
    extraClass = ''
}: ButtonComponentType) => {
    return (
        <ButtonField
            onClick={() => handler && handler()}
            shadow={shadow.toString()}
            radius={radius}
            className={`${type} ${color} ${extraClass}`}
        >
            <PulseLoader loading={loader} color={loaderColor} size={10} />
            {children}
        </ButtonField>
    );
};

export default Button;
