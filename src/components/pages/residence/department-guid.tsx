import React from 'react';

// Assets
import { MainField } from './department-guid.style';

const DepartmentGuid = ({ titleOffset }: any) => {
    return (
        <MainField status={titleOffset.top < 0}>
            <ol>
                <li>
                    <a href='#info' className='active'>
                        مشخصات
                    </a>
                </li>
                <li>
                    <a href='#about'>درباره اقامتگاه</a>
                </li>
                <li>
                    <a href='#map'>نقشه</a>
                </li>
                <li>
                    <a href='#comment'>نظرات</a>
                </li>
                <li>
                    <a href='#info'>میزبان</a>
                </li>
            </ol>
        </MainField>
    );
};

export default DepartmentGuid;
