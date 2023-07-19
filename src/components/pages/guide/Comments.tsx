import React from 'react';

//Assets
import { QACommentStyle } from './QACommentStyle';

//Components
import Collaps from '@/components/template/collaps';

const Comments = () => {
    return (
        <QACommentStyle className='container'>
            <h2>نظرات</h2>
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

export default Comments;
