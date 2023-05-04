import React, { useRef, useState } from 'react';

// Assets
import { FacilitiesField } from './facilities.style';
import SearchIcon from '@/assets/images/layout/search.svg';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import Checkbox from '@/components/form-group/checkbox';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

const Facilities = () => {
    const uniqValue = 'facilities';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');

    useOutsideClick(ref, () => {
        setDropDownStatus('');
    });

    const FilterDropDownStatusHandler = (name: any) => {
        setDropDownStatus(name);
        if (name === DropDownStatus) {
            setDropDownStatus('');
        }
    };

    return (
        <FacilitiesField ref={ref}>
            <FilterPill title='امکانات اقامتگاه' img={SearchIcon} handler={() => FilterDropDownStatusHandler(uniqValue)} />
            <DropDownLayout title='امکانات اقامتگاه' status={uniqValue === DropDownStatus}>
                <div className='checkbox_field'>
                    <div className='row'>
                        <p>
                            <span></span>
                            استخر
                        </p>
                        <Checkbox name='' />
                    </div>
                    <div className='row'>
                        <p>
                            <span></span>
                            استخر
                        </p>
                        <Checkbox name='' />
                    </div>
                    <div className='row'>
                        <p>
                            <span></span>
                            استخر
                        </p>
                        <Checkbox name='' />
                    </div>
                    <div className='row'>
                        <p>
                            <span></span>
                            استخر
                        </p>
                        <Checkbox name='' />
                    </div>
                </div>
            </DropDownLayout>
        </FacilitiesField>
    );
};

export default Facilities;
