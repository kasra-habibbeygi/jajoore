/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/state-manager/store';

// Assets
import { DropdownField } from './style/dropdown.style';
import VIPIcon from '@/assets/images/filter/vip.svg';

// Component
import FilterPill from '@/components/template/filters/pill';
import { useRouter } from 'next/router';

const VIPOnly = () => {
    const router = useRouter();
    const filterActionStatus = useSelector((state: RootState) => state.Utils.filterAction);
    const [filterStatus, setFilterStatus] = useState<boolean>(false);

    useEffect(() => {
        if (!filterStatus) {
            delete router.query.vipStatus;
            router.push(router);
        } else {
            if (filterStatus) {
                router.query.vipStatus = 'true';
            }

            router.push(router);
        }
    }, [filterActionStatus, filterStatus]);

    useEffect(() => {
        setFilterStatus((router.query.vipStatus as any) ?? false);
    }, [router.query.vipStatus]);

    return (
        <DropdownField onClick={() => setFilterStatus(!filterStatus)}>
            <FilterPill title='فقط VIP' img={VIPIcon} activeStatus={filterStatus} />
        </DropdownField>
    );
};

export default VIPOnly;
