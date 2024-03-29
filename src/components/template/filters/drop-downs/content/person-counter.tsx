/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/state-manager/store';

// MUI
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const PersonFilter = ({ personCount, setpersonCount }: { setpersonCount: (state: any) => void; personCount: number }) => {
    const router = useRouter();
    const filterActionStatus = useSelector((state: RootState) => state.Utils.filterAction);
    const counterHandler = (type: 'add' | 'reduce') => {
        setpersonCount(type === 'add' ? personCount + 1 : personCount > 0 ? personCount - 1 : 0);
    };

    useEffect(() => {
        if (filterActionStatus.type === 'person') {
            if (filterActionStatus.action === 'remove') {
                delete router.query.person;
                router.push(router);
            } else {
                if (personCount !== 0) {
                    router.query.person = personCount.toString();
                }

                router.push(router);
            }
        }
    }, [filterActionStatus]);

    useEffect(() => {
        setpersonCount(router.query.person ?? 0);
    }, [router.query.person]);

    return (
        <>
            <div className='counter_row'>
                <p>
                    <span></span>
                    تعداد نفرات
                </p>
                <div className='counter'>
                    <AddCircleOutlineIcon className='green' onClick={() => counterHandler('add')} />
                    {personCount}
                    <RemoveCircleOutlineIcon className='red' onClick={() => counterHandler('reduce')} />
                </div>
            </div>
        </>
    );
};

export default PersonFilter;
