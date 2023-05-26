import React, { useState } from 'react';

// Assets
import { CheckboxStyle } from './style/checkbox-dropdown.style';
import VIPIcon from '@/assets/images/filter/vip.svg';

// Component
import FilterPill from '@/components/template/filters/pill';

const VIPOnly = () => {
    const [filterStatus, setFilterStatus] = useState(false);

    return (
        <CheckboxStyle onClick={() => setFilterStatus(!filterStatus)}>
            <FilterPill title='فقط VIP' img={VIPIcon} activeStatus={filterStatus} />
        </CheckboxStyle>
    );
};

export default VIPOnly;
