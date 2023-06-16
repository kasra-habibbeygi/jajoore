import React, { useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import VIPIcon from '@/assets/images/filter/vip.svg';

// Component
import FilterPill from '@/components/template/filters/pill';

const VIPOnly = () => {
    const [filterStatus, setFilterStatus] = useState(false);

    return (
        <DropdownField onClick={() => setFilterStatus(!filterStatus)}>
            <FilterPill title='فقط VIP' img={VIPIcon} activeStatus={filterStatus} />
        </DropdownField>
    );
};

export default VIPOnly;
