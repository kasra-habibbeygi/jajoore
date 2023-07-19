import React from 'react';

// Assets
import { MainField } from './confirm-buttom.style';
import Button from '@/components/form-group/button';

const ConfirmModal = () => {
    return (
        <MainField>
            <Button>لغو</Button>
            <Button color='yellow'>ثبت</Button>
        </MainField>
    );
};

export default ConfirmModal;
