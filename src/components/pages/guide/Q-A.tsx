import React from 'react';

//Components
import Collaps from '@/components/template/collaps';

//Assets
import { QACommentStyle } from './QACommentStyle';

const QA = () => {
    return (
        <QACommentStyle className='container'>
            <h2>سوالات متداول</h2>
            <Collaps
                question='سیستم ثبت نظرات چگونه کار می‌کند؟'
                answer='سیستم ثبت نظرات چگونه کار می‌کند؟سیستم ثبت نظرات چگونه کار می‌کند؟سیستم ثبت نظرات چگونه کار می‌کند؟'
            />
            <Collaps
                question='سیستم ثبت نظرات چگونه کار می‌کند؟'
                answer='سیستم ثبت نظرات چگونه کار می‌کند؟سیستم ثبت نظرات چگونه کار می‌کند؟سیستم ثبت نظرات چگونه کار می‌کند؟'
            />
            <Collaps
                question='سیستم ثبت نظرات چگونه کار می‌کند؟'
                answer='سیستم ثبت نظرات چگونه کار می‌کند؟سیستم ثبت نظرات چگونه کار می‌کند؟سیستم ثبت نظرات چگونه کار می‌کند؟'
            />
            <Collaps
                question='سیستم ثبت نظرات چگونه کار می‌کند؟'
                answer='سیستم ثبت نظرات چگونه کار می‌کند؟سیستم ثبت نظرات چگونه کار می‌کند؟سیستم ثبت نظرات چگونه کار می‌کند؟'
                divider={false}
            />
        </QACommentStyle>
    );
};

export default QA;
