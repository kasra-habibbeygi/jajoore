import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Assets
import { MainField } from './header.styles';
import ShareIcon from '@/assets/images/card/share.svg';

// Component
import ShareModal from '@/components/modals/share';
import SelectComponent from '@/components/form-group/select';

// MUI
import { SelectChangeEvent } from '@mui/material/Select';

const orderItems = [
    { label: 'بدون فیلتر', value: 'null' },
    { label: 'از برترین', value: 'top' },
    { label: 'از بیشترین امتیاز', value: 'score' },
    { label: 'از کمترین قیمت', value: 'low-price' },
    { label: 'از بیشترین قیمت', value: 'max-price' },
    { label: 'از بیشترین رزرو', value: 'max-reservation' },
    { label: 'از بیشترین تخفیف', value: 'sale' },
    { label: 'از جدید ترین', value: 'newest' }
];

const IndexHeader = ({ pageName = 'index' }: any) => {
    const router = useRouter();
    const [shareModalStatus, setShareModalStatus] = useState(false);

    const modalStatusHandler = () => {
        setShareModalStatus(true);
    };

    const selectValueHandler = (e: SelectChangeEvent) => {
        router.query.order = e.target.value;

        if (e.target.value === 'null') {
            delete router.query.order;
        }

        router.push(router);
    };

    return (
        <>
            <MainField>
                <div className='container'>
                    <div className='top_field'>
                        {pageName === 'index' && <h1>اجاره ویلا</h1>}
                        {pageName === 'index' && <Image src={ShareIcon} alt='' className='share' onClick={modalStatusHandler} />}
                    </div>
                    <div className='bottom_field'>
                        <small>5200 اقامت گاه از 82.000 تومان</small>
                        <SelectComponent
                            items={orderItems}
                            handler={selectValueHandler}
                            name='orderFilter'
                            valueKey='value'
                            state={router.query.order ?? orderItems[0].value}
                            itemKey='label'
                        />
                    </div>
                </div>
            </MainField>
            <ShareModal status={shareModalStatus} setStatus={setShareModalStatus} />
        </>
    );
};

export default IndexHeader;
