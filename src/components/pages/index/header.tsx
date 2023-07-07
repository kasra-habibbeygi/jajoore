import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/state-manager/store';
import { mapModalStatusHandler } from '@/state-manager/reducer/utils';

// Assets
import { MainField } from './header.styles';
import ShareIcon from '@/assets/images/card/share.svg';
import MapImage from '@/assets/images/moc/map.png';

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
    const dispatch = useDispatch();
    const router = useRouter();
    const [shareModalStatus, setShareModalStatus] = useState(false);
    const mapModalStatus = useSelector((state: RootState) => state.Utils.mapModalStatus);

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

    const openMap = () => {
        dispatch(mapModalStatusHandler(!mapModalStatus));
    };

    return (
        <>
            <MainField>
                <Image src={MapImage} alt='' className='map_image' onClick={openMap} />
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
