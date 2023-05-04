import React from 'react';
import Image from 'next/image';

// Assets
import { FilterField } from './filter.style';
import EmptyAvatar from '@/assets/images/card/empty-avatar.svg';
import MenuIcon from '@/assets/images/layout/menus.svg';
import CustomerService from '@/assets/images/layout/customer-service.svg';
import SearchIcon from '@/assets/images/layout/search.svg';

// Component
import Button from '@/components/form-group/button';
import RoomCounter from './drop-downs/room-counter';
import Facilities from './drop-downs/facilities';

const Filter = () => {
    return (
        <FilterField>
            <div className='container'>
                <div className='right_field'>
                    <div className='top_field'>
                        <Button color='white' extraClass='panel_btn'>
                            <Image src={MenuIcon} alt='' />
                            <Image src={EmptyAvatar} alt='' className='avatar' />
                        </Button>
                        <div className='form_group'>
                            <input type='text' placeholder='کجامیخوای بری ؟ | کد ویلا ... ؟' name='search' />
                            <Image src={SearchIcon} alt='' className='search_icon' />
                        </div>
                    </div>
                    <div className='filter_field'>
                        <RoomCounter />
                        <Facilities />
                        <RoomCounter />
                        <Facilities />
                        <RoomCounter />
                        <Facilities />
                        <RoomCounter />
                        <RoomCounter />
                    </div>
                </div>
                <div className='left_field'>
                    <Button color='white'>
                        <Image src={CustomerService} alt='' />
                    </Button>
                </div>
            </div>
        </FilterField>
    );
};

export default Filter;
