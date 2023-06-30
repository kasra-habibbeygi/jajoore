/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Assets
import { DropdownField, AllFiltersField, BodyLayout } from './style/dropdown.style';
import FiltersIcon from '@/assets/images/icons/setting.svg';

// Hooks
import useOutsideClick from '@/hooks/use-outside-click';

// Component
import DropDownLayout from '../layout';
import FilterPill from '@/components/template/filters/pill';
import RulesFilter from './content/rules';
import FacilitiesFilter from './content/facilities';
import TypeFilter from './content/type';
import LeaseFilters from './content/lease';
import AreaFilters from './content/area';
import PropertyFilter from './content/property';
import RoomCounterFilter from './content/room-counter';
import PersonFilter from './content/person-counter';
const PriceFilters = dynamic(() => import('./content/price'), { ssr: false });

// Types
interface InputValueType {
    beds: number;
    rooms: number;
}

const Filters = ({ filtersItem }: any) => {
    const uniqValue = 'room_counter';
    const ref = useRef(null);
    const [DropDownStatus, setDropDownStatus] = useState('');
    const [numberCounter, setNumberCounter] = useState(0);
    const [priceValue, setPriceValue] = useState([100_000, 25_000_000]);
    const [personCount, setPersonCount] = useState<number>(0);
    const [roomValues, setRoomValues] = useState<InputValueType>({
        beds: 0,
        rooms: 0
    });

    // useEffect(() => {
    //     if (roomValues.beds !== 0 || roomValues.rooms !== 0) {
    //         setNumberCounter(numberCounter + 1);
    //     }
    // }, [roomValues]);

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
        if (numberCounter !== 0) {
            return `${numberCounter} فیلتر`;
        }
        return 'سایر فیلتر ها ';
    };

    return (
        <DropdownField ref={ref} className='all_filter_list'>
            <BodyLayout status={uniqValue === DropDownStatus} onClick={() => FilterDropDownStatusHandler(uniqValue)} />
            <FilterPill
                title={titleProvider()}
                img={FiltersIcon}
                handler={() => FilterDropDownStatusHandler(uniqValue)}
                activeStatus={numberCounter !== 0}
            />
            <AllFiltersField status={uniqValue === DropDownStatus}>
                <DropDownLayout status={uniqValue === DropDownStatus} setDropDownStatus={setDropDownStatus} name='filters' boxWidth={500}>
                    <div className='body_scrolling'>
                        <div className='header margin_top'>
                            <span></span>
                            محدوده اجاره بها
                        </div>
                        <PriceFilters setPriceValue={setPriceValue} priceValue={priceValue} />
                        <div className='header margin_top'>
                            <span></span>
                            تعداد تخت و اتاق
                        </div>
                        <RoomCounterFilter setRoomValues={setRoomValues} roomValues={roomValues} />
                        <div className='header margin_top'>
                            <span></span>
                            تعداد نفرات
                        </div>
                        <PersonFilter setpersonCount={setPersonCount} personCount={personCount} />
                        <div className='header margin_top'>
                            <span></span>
                            قوانین اقامتگاه
                        </div>
                        <RulesFilter setNumberCounter={setNumberCounter} filterItem={filtersItem.forbiddenWorks} />
                        <div className='header margin_top'>
                            <span></span>
                            امکانات اقامتگاه
                        </div>
                        <FacilitiesFilter setNumberCounter={setNumberCounter} filterItem={filtersItem.residenceFacilities} />
                        <div className='header margin_top'>
                            <span></span>
                            نوع اقامتگاه
                        </div>
                        <TypeFilter setNumberCounter={setNumberCounter} filterItem={filtersItem.residenceTypes} />
                        <div className='header margin_top'>
                            <span></span>
                            نوع اجاره
                        </div>
                        <LeaseFilters setNumberCounter={setNumberCounter} filterItem={filtersItem.rentTypes} />
                        <div className='header margin_top'>
                            <span></span>
                            منطقه اقامتگاه
                        </div>
                        <AreaFilters setNumberCounter={setNumberCounter} filterItem={filtersItem.residenceAreas} />
                        <div className='header margin_top'>
                            <span></span>
                            ویژگی اقامتگاه
                        </div>
                        <PropertyFilter setNumberCounter={setNumberCounter} />
                    </div>
                </DropDownLayout>
            </AllFiltersField>
        </DropdownField>
    );
};

export default Filters;
