import React from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './sleeping-area.style';
import SingleBedIcon from '@/assets/images/card/single-bed.svg';
import SofaBed from '@/assets/images/card/sofa-bed.svg';
import BedSheets from '@/assets/images/card/bed-sheets.svg';
import DoubleBedIcon from '@/assets/images/card/double-bed.svg';

// Component
import TitleField from '@/components/template/title';

const SleepingArea = () => {
    return (
        <MainField>
            <div className='header'>
                <TitleField title='فضای خواب' />
                <span className='title_text'>5 اتاق خواب</span>
            </div>
            <div className='content'>
                <div>
                    <Image src={SingleBedIcon} alt='' />
                    <p>تخت خواب 2 نفره</p>
                    <p>تعداد: 2</p>
                </div>
                <div>
                    <Image src={DoubleBedIcon} alt='' />
                    <p>تخت خواب 1 نفره</p>
                    <p>تعداد: 2</p>
                </div>
                <div>
                    <Image src={BedSheets} alt='' />
                    <p>رخت خواب سنتی</p>
                    <p>تعداد: 2</p>
                </div>
                <div>
                    <Image src={SofaBed} alt='' />
                    <p>مبل تخت شو</p>
                    <p>تعداد: 2</p>
                </div>
            </div>
        </MainField>
    );
};

export default SleepingArea;
