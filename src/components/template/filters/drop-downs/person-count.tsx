import React, { useRef, useState } from 'react';

// Assets
import { DropdownField } from './style/dropdown.style';
import UsersIcon from '@/assets/images/card/group-users.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import PersonFilter from './content/person-counter';

// Hooks
import useOutsideClick from '@/hooks/useOutsideClick';

const PersonCounter = () => {
    const uniqValue = 'room_counter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState<string>('');
    const [personCount, setPersonCount] = useState<number>(0);

    useOutsideClick(ref, () => {
        setDropDownStatus('');
    });

    const FilterDropDownStatusHandler = (name: any) => {
        setDropDownStatus(name);
        if (name === DropDownStatus) {
            setDropDownStatus('');
        }
    };

    const titleProvider = () => {
        if (personCount) {
            return `${personCount} نفر`;
        }

        return 'تعداد نفرات';
    };

    return (
        <DropdownField ref={ref} className='person_filter'>
            <FilterPill
                title={titleProvider()}
                img={UsersIcon}
                handler={() => FilterDropDownStatusHandler(uniqValue)}
                activeStatus={personCount !== 0}
            />
            <DropDownLayout title='تعداد نفرات' status={uniqValue === DropDownStatus} setDropDownStatus={setDropDownStatus} name='person'>
                <PersonFilter personCount={personCount} setpersonCount={setPersonCount} />
            </DropDownLayout>
        </DropdownField>
    );
};

export default PersonCounter;
