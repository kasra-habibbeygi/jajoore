/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '@/state-manager/store';
import { FilterHandler, FilterValueProvider } from '@/utils/filter-handler';

// Component
import Checkbox from '@/components/form-group/checkbox';

const TypeFilter = ({ setNumberCounter, filterItem }: { setNumberCounter: (state: any) => void; filterItem: any }) => {
    const router = useRouter();
    const filterActionStatus = useSelector((state: RootState) => state.Utils.filterAction);
    const [filterItemState, setFilterItemState] = useState<any>({});
    var query: any = router.query.area;

    useEffect(() => {
        FilterHandler(filterActionStatus, 'area', router, filterItemState);
    }, [filterActionStatus]);

    useEffect(() => {
        FilterValueProvider(setFilterItemState, filterItem, query);
        setNumberCounter(query?.split('-').length ?? 0);
    }, [query]);

    const checkboxValueHandler = (e: any) => {
        setFilterItemState((prev: any) => ({
            ...prev,
            [e.target.name]: {
                ...prev[e.target.name],
                value: e.target.checked
            }
        }));

        if (e.target.checked) {
            setNumberCounter((prev: any) => prev + 1);
        } else {
            setNumberCounter((prev: any) => prev - 1);
        }
    };

    return (
        <div className='checkbox_field'>
            {Object.keys(filterItemState).map((item: any) => (
                <div className='row' key={`residenceArea_filter_item_${filterItemState[item].id}`}>
                    <Checkbox name={item} label={item} value={filterItemState[item].value} handler={(e: any) => checkboxValueHandler(e)} />
                </div>
            ))}
        </div>
    );
};

export default TypeFilter;
