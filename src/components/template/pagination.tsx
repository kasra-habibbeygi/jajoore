import React from 'react';

// Assets
import { MainField } from './pagination.style';

// MUI
import { Pagination as PaginationMUI } from '@mui/material';

interface PaginationTypes {
    count: number;
    current: number;
}

const Pagination = ({ count = 1, current = 6 }: PaginationTypes) => {
    return (
        <MainField>
            <PaginationMUI count={count} page={current} size='small' />
        </MainField>
    );
};

export default Pagination;
