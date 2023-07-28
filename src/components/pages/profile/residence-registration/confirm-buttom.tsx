import React from 'react';

// Assets
import { MainField } from './confirm-buttom.style';
import Button from '@/components/form-group/button';

const ConfirmButton = () => {
    return (
        <MainField>
            <Button>لغو</Button>
            <Button color='yellow'>مرحله بعد</Button>
        </MainField>
    );
};

export default ConfirmButton;
