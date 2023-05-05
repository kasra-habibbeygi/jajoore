import React from 'react';

// Assets
import { MainField } from './select.style';

// MUI
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Select = () => {
    return (
        <MainField>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={params => <TextField {...params} disabled />}
            />
        </MainField>
    );
};

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 }
];

export default Select;
