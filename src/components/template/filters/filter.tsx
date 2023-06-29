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
import TypesIcon from '@/assets/images/filter/types.svg';
import CheckListIcon from '@/assets/images/filter/checklist.svg';
import HammerIcon from '@/assets/images/filter/hammer.svg';

// Component
import Button from '@/components/form-group/button';
import Aside from '../../layout/aside';
import CitiesModal from '@/components/modals/cities';
import ProvincesModal from '@/components/modals/provinces';
import SearchField from '../search/search';

// Filter Component
import RoomCounter from './drop-downs/room-counter';
import PersonCounter from './drop-downs/person-count';
import Property from './drop-downs/property';
import VIPOnly from './drop-downs/vip';
import Filters from './drop-downs/filters';
import CalenderFilter from './drop-downs/calender';
const PriceFilter = dynamic(() => import('./drop-downs/price'), { ssr: false });
import CheckBoxListFilter from './checkbox-list-filter';

const Filter = ({ filtersItem, filterStatus = true, popularDestinations }: any) => {
    const [sideMenuStatus, setSideMenuStatus] = useState(false);
    const [citiesModalStatus, setCitiesModalStatus] = useState(false);
    const [provincesModalStatus, setProvincesModalStatus] = useState(false);
    const [mobileSearchStatus, setMobileSearchStatus] = useState(false);

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
                                setProvincesModalStatus={setProvincesModalStatus}
                                setMobileSearchStatus={setMobileSearchStatus}
                                mobileSearchStatus={mobileSearchStatus}
                                popularDestinations={popularDestinations}
                            />
                            <SearchField
                                setProvincesModalStatus={setProvincesModalStatus}
                                mobileSearchStatus={mobileSearchStatus}
                                setMobileSearchStatus={setMobileSearchStatus}
                                popularDestinations={popularDestinations}
                                mode='mobile'
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
                    {filterStatus && (
                        <div className='filter_field'>
                            <CalenderFilter />
                            <PersonCounter />
                            <PriceFilter />
                            <RoomCounter />
                            <Property />
                            <CheckBoxListFilter
                                filterItem={filtersItem.residenceAreas}
                                title='منطقه اقامتگاه'
                                name='area'
                                className='area_filter'
                                Icon={CheckListIcon}
                            />
                            <CheckBoxListFilter
                                filterItem={filtersItem.rentTypes}
                                title='نوع اجاره'
                                name='lease'
                                className='lease_filter'
                                Icon={CheckListIcon}
                            />
                            <CheckBoxListFilter
                                filterItem={filtersItem.residenceTypes}
                                title='نوع اقامتگاه'
                                name='types'
                                className='type_filter'
                                Icon={TypesIcon}
                            />
                            <CheckBoxListFilter
                                filterItem={filtersItem.residenceFacilities}
                                title='امکانات اقامتگاه'
                                name='facilities'
                                className='facilities_filter'
                                Icon={CheckListIcon}
                            />
                            <CheckBoxListFilter
                                filterItem={filtersItem.forbiddenWorks}
                                title='قوانین اقامتگاه'
                                name='rules'
                                className='rules_filter'
                                Icon={HammerIcon}
                            />
                            <VIPOnly />
                            <Filters filtersItem={filtersItem} />
                        </div>
                    )}
                </div>
            </FilterField>
            <Aside status={sideMenuStatus} setStatus={setSideMenuStatus} />
            <CitiesModal status={citiesModalStatus} setStatus={setCitiesModalStatus} setProvincesModalStatus={setProvincesModalStatus} />
            <ProvincesModal status={provincesModalStatus} setStatus={setProvincesModalStatus} setCitiesModalStatus={setCitiesModalStatus} />
        </>
    );
};

export default Filter;
