/* eslint-disable no-unused-vars */
import React from 'react';

// Assets
import { MainField } from './pagination.style';

// MUI
import { Pagination as PaginationMUI } from '@mui/material';

interface PaginationTypes {
    count: number;
    current: number;
    handler: (e: any, number: number) => void;
}

const Pagination = ({ count = 1, current = 6, handler }: PaginationTypes) => {
    return (
        <MainField>
            <PaginationMUI count={count} page={current} size='small' onChange={handler} />
        </MainField>
    );
};

export default Pagination;
