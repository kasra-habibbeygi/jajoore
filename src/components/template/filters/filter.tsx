import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Assets
import { FilterField } from './filter.style';
import EmptyAvatar from '@/assets/images/card/empty-avatar.svg';
import MenuIcon from '@/assets/images/layout/menus.svg';
import CustomerService from '@/assets/images/layout/customer-service.svg';
import SearchIcon from '@/assets/images/layout/search.svg';

// Component
import Button from '@/components/form-group/button';
import Aside from '../../layout/aside';
import CitiesModal from '@/components/modals/cities';
import ProvincesModal from '@/components/modals/provinces';

// Filter Component
import RoomCounter from './drop-downs/room-counter';
import Facilities from './drop-downs/facilities';
import PersonCounter from './drop-downs/person-count';
import Property from './drop-downs/property';
import TypeFilter from './drop-downs/type';
import AreaFilter from './drop-downs/area';
import LeaseType from './drop-downs/lease-type';
import RulesFilter from './drop-downs/rules';
const PriceFilter = dynamic(() => import('./drop-downs/price'), { ssr: false });

const Filter = () => {
    const [sideMenuStatus, setSideMenuStatus] = useState(false);
    const [citiesModalStatus, setCitiesModalStatus] = useState(false);
    const [provincesModalStatus, setProvincesModalStatus] = useState(false);

    return (
        <>
            <FilterField>
                <div className='main_field'>
                    <div className='top_field'>
                        <div className='right_field'>
                            <Button color='white' extraClass='panel_btn' handler={() => setSideMenuStatus(true)}>
                                <Image src={MenuIcon} alt='' />
                                <Image src={EmptyAvatar} alt='' className='avatar' />
                            </Button>
                            <div className='form_group'>
                                <input type='text' placeholder='کجامیخوای بری ؟ | کد ویلا ... ؟' name='search' />
                                <Image src={SearchIcon} alt='' className='search_icon' />
                            </div>
                        </div>
                        <Button color='white' extraClass='support_btn'>
                            <Image src={CustomerService} alt='' />
                        </Button>
                    </div>
                    <div className='filter_field'>
                        <PersonCounter />
                        <PriceFilter />
                        <RoomCounter />
                        <Property />
                        <Facilities />
                        <AreaFilter />
                        <LeaseType />
                        <TypeFilter />
                        <RulesFilter />
                    </div>
                </div>
            </FilterField>
            <Aside status={sideMenuStatus} setStatus={setSideMenuStatus} />
            <CitiesModal status={citiesModalStatus} setStatus={setCitiesModalStatus} />
            <ProvincesModal status={provincesModalStatus} setStatus={setProvincesModalStatus} />
        </>
    );
};

export default Filter;
