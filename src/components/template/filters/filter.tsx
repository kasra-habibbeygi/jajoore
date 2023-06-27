/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Assets
import { FilterField, Layout } from './filter.style';
import EmptyAvatar from '@/assets/images/card/empty-avatar.svg';
import MenuIcon from '@/assets/images/layout/menus.svg';
import CustomerService from '@/assets/images/layout/customer-service.svg';
import NotificationIcon from '@/assets/images/layout/notification.svg';

// Component
import Button from '@/components/form-group/button';
import Aside from '../../layout/aside';
import CitiesModal from '@/components/modals/cities';
import ProvincesModal from '@/components/modals/provinces';
import SearchField from '../search/search';

// Filter Component
import RoomCounter from './drop-downs/room-counter';
import Facilities from './drop-downs/facilities';
import PersonCounter from './drop-downs/person-count';
import Property from './drop-downs/property';
import TypeFilter from './drop-downs/type';
import AreaFilter from './drop-downs/area';
import LeaseType from './drop-downs/lease-type';
import RulesFilter from './drop-downs/rules';
import VIPOnly from './drop-downs/vip';
import Filters from './drop-downs/filters';
import CalenderFilter from './drop-downs/calender';
const PriceFilter = dynamic(() => import('./drop-downs/price'), { ssr: false });

const Filter = ({ filtersItem }: any) => {
    const [sideMenuStatus, setSideMenuStatus] = useState(false);
    const [citiesModalStatus, setCitiesModalStatus] = useState(false);
    const [provincesModalStatus, setProvincesModalStatus] = useState(false);
    const [mobileSearchStatus, setMobileSearchStatus] = useState(false);

    console.log(filtersItem);

    return (
        <>
            <FilterField>
                <div className='main_field'>
                    <div className='top_field'>
                        <div className='right_field'>
                            <Button color='white' extraClass='panel_btn' radius='half-rounded' handler={() => setSideMenuStatus(true)}>
                                <Image src={MenuIcon} alt='' />
                                <Image src={EmptyAvatar} alt='' className='avatar' />
                            </Button>
                            <Layout status={mobileSearchStatus} onClick={() => setMobileSearchStatus(false)}></Layout>
                            <SearchField
                                setCitiesModalStatus={setCitiesModalStatus}
                                setMobileSearchStatus={setMobileSearchStatus}
                                mobileSearchStatus={mobileSearchStatus}
                            />
                            <SearchField
                                setCitiesModalStatus={setCitiesModalStatus}
                                mode='mobile'
                                mobileSearchStatus={mobileSearchStatus}
                                setMobileSearchStatus={setMobileSearchStatus}
                            />
                        </div>
                        <div className='left_field'>
                            <Button color='white' extraClass='support_btn'>
                                <Image src={NotificationIcon} alt='' />
                                <span className='notif_count'>2</span>
                            </Button>
                            <Button color='white' extraClass='support_btn'>
                                <Image src={CustomerService} alt='' />
                            </Button>
                        </div>
                    </div>
                    <div className='filter_field'>
                        <CalenderFilter />
                        <PersonCounter />
                        <PriceFilter />
                        <RoomCounter />
                        <Property />
                        <AreaFilter filterItem={filtersItem.residenceAreas} />
                        <LeaseType filterItem={filtersItem.rentTypes} />
                        <TypeFilter />
                        <Facilities />
                        <RulesFilter />
                        <VIPOnly />
                        <Filters filtersItem={filtersItem} />
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
