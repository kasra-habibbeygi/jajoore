import React from 'react';

// Assets
import { MainField } from './stage-pill.style';

// Component
import Button from '@/components/form-group/button';

const StagePill = () => {
    return (
        <MainField>
            <Button extraClass='prev' disabled={true}>
                <span>1</span> تصاویر
            </Button>
            <Button extraClass='prev' disabled={true}>
                <span>2</span> اطلاعات پایه
            </Button>
            <Button extraClass='prev' disabled={true}>
                <span>3</span> امکانات
            </Button>
            <Button extraClass='active' disabled={true}>
                <span>4</span> مقررات
            </Button>
            <Button disabled={true}>
                <span>5</span> ایمنی
            </Button>
            <Button disabled={true}>
                <span>6</span> ظرفیت
            </Button>
            <Button disabled={true}>
                <span>7</span> خرید پکیج
            </Button>
        </MainField>
    );
};

export default StagePill;
