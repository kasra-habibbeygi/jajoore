import React, { ReactNode } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

// Assets
import * as S from './button.style';

// Types
interface ButtonComponentType {
    children: ReactNode;
    shadow?: boolean;
    radius?: 'half-rounded' | 'rounded';
    type?: 'text' | 'outline' | 'filled' | 'outline-filled';
    color?: 'white' | 'primary' | 'yellow' | 'green';
    handler?: () => void;
    loader?: boolean;
    loaderColor?: string;
}

const Button = ({
    children,
    shadow = false,
    radius = 'half-rounded',
    type = 'filled',
    color = 'white',
    handler,
    loader = false,
    loaderColor = '#ffffff'
}: ButtonComponentType) => {
    return (
        <S.ButtonField onClick={() => handler && handler()} shadow={shadow} radius={radius} className={`${type} ${color}`}>
            <PulseLoader loading={loader} color={loaderColor} size={10} />
            {children}
        </S.ButtonField>
    );
};

export default Button;
