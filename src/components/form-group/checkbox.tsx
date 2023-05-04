import React from 'react';

// Assets
import { CheckboxField } from './checkbox.style';

// MUI
import { FormControlLabel } from '@mui/material';
import CheckboxMui from '@mui/material/Checkbox';

// Types
interface ComponentTypes {
    value?: boolean;
    label?: string;
    handler?: Function;
    name: string;
}

const Checkbox = ({ value, label, handler, name }: ComponentTypes) => {
    return (
        <CheckboxField>
            <FormControlLabel control={<CheckboxMui checked={value} name={name} onChange={e => handler && handler(e)} />} label={label} />
        </CheckboxField>
    );
};

export default Checkbox;
