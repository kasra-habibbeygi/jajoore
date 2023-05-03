import React from 'react';

// Assets
import { MainField } from './header.styles';

const IndexHeader = () => {
    return (
        <MainField>
            <div className='right_field'>
                <h1>اجاره ویلا</h1>
                <small>5200 اقامت گاه از 82.000 تومان</small>
            </div>
            <div className='left_field'></div>
        </MainField>
    );
};

export default IndexHeader;
