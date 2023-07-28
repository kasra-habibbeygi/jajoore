import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './textarea.style';
import Alert from '@/assets/images/icons/simple-alert.svg';

// Component
import Tooltip from './tooltip';

// Types
interface TextAreaTypes {
    name: string;
    value: string;
    onChange: any;
    placeholder?: string;
    label?: string;
    tooltipContent?: any;
    tooltipBody?: any;
}

const TextArea = ({ placeholder, name, label, value, onChange, tooltipContent, tooltipBody = Alert }: TextAreaTypes) => {
    return (
        <MainField>
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
            <textarea name={name} id={name} placeholder={placeholder} value={value} onChange={onChange}></textarea>
        </MainField>
    );
};

export default TextArea;
