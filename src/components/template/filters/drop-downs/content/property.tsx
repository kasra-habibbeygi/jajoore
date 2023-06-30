/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/state-manager/store';

// Component
import Checkbox from '@/components/form-group/checkbox';

const PropertyFilter = ({ setNumberCounter }: { setNumberCounter: (state: any) => void }) => {
    const router = useRouter();
    var query: any = router.query.property;
    const filterActionStatus = useSelector((state: RootState) => state.Utils.filterAction);
    const [checkedValue, setCheckedValue] = useState<any>({
        plus: false,
        sale: false,
        instant: false
    });

    useEffect(() => {
        if (filterActionStatus.type === 'property') {
            if (filterActionStatus.action === 'remove') {
                delete router.query.property;
                router.push(router);
            } else {
                let newQuery: number[] = [];

                Object.keys(checkedValue).forEach((item: any) => {
                    if (checkedValue[item]) {
                        newQuery.push(item);
                    }
                });

                if (newQuery.length) {
                    router.query.property = newQuery.join('-');
                    router.push(router);
                }
            }
        }
    }, [filterActionStatus]);

    useEffect(() => {
        setCheckedValue({
            plus: query?.split('-').includes('plus') ?? false,
            sale: query?.split('-').includes('sale') ?? false,
            instant: query?.split('-').includes('instant') ?? false
        });
        setNumberCounter(query?.split('-').length ?? 0);
    }, [query]);

    const checkboxValueHandler = (e: any) => {
        setCheckedValue((prev: any) => ({
            ...prev,
            [e.target.name]: e.target.checked
        }));

        if (e.target.checked) {
            setNumberCounter((prev: any) => prev + 1);
        } else {
            setNumberCounter((prev: any) => prev - 1);
        }
    };

    return (
        <div className='checkbox_field'>
            <div className='row'>
                <Checkbox name='plus' label='پلاس' value={checkedValue.plus} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
            <div className='row'>
                <Checkbox name='sale' label='تخفیف دار' value={checkedValue.sale} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
            <div className='row'>
                <Checkbox name='instant' label='رزرو فوری' value={checkedValue.instant} handler={(e: any) => checkboxValueHandler(e)} />
            </div>
        </div>
    );
};

export default PropertyFilter;
