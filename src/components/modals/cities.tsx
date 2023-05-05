/* eslint-disable no-unused-vars */
import React from 'react';

// Assets
import { ModalField } from './cities.style';

// MUI
import { Dialog } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

// Component
import Button from '../form-group/button';

// Types
interface CitiesModalTypes {
    status: boolean;
    setStatus: (status: boolean) => void;
}

const CitiesModal = ({ status, setStatus }: CitiesModalTypes) => {
    return (
        <ModalField>
            <Dialog onClose={() => setStatus(false)} open={status} disablePortal keepMounted fullWidth={true} scroll='body' maxWidth='xs'>
                <h3>شهر های استان البرز</h3>
                <div className='checked_all'>
                    <FormControlLabel control={<Checkbox />} label='انتخاب همه' />
                </div>
                <ul>
                    <li>
                        <div className='right_field'>
                            <p>کردان</p>
                            <small>365 اقامتگاه</small>
                        </div>
                        <Checkbox />
                    </li>
                    <li>
                        <div className='right_field'>
                            <p>کردان</p>
                            <small>365 اقامتگاه</small>
                        </div>
                        <Checkbox />
                    </li>
                    <li>
                        <div className='right_field'>
                            <p>کردان</p>
                            <small>365 اقامتگاه</small>
                        </div>
                        <Checkbox />
                    </li>
                    <li>
                        <div className='right_field'>
                            <p>کردان</p>
                            <small>365 اقامتگاه</small>
                        </div>
                        <Checkbox />
                    </li>
                    <li>
                        <div className='right_field'>
                            <p>کردان</p>
                            <small>365 اقامتگاه</small>
                        </div>
                        <Checkbox />
                    </li>
                    <li>
                        <div className='right_field'>
                            <p>کردان</p>
                            <small>365 اقامتگاه</small>
                        </div>
                        <Checkbox />
                    </li>
                    <li>
                        <div className='right_field'>
                            <p>کردان</p>
                            <small>365 اقامتگاه</small>
                        </div>
                        <Checkbox />
                    </li>
                    <li>
                        <div className='right_field'>
                            <p>کردان</p>
                            <small>365 اقامتگاه</small>
                        </div>
                        <Checkbox />
                    </li>
                    <li>
                        <div className='right_field'>
                            <p>کردان</p>
                            <small>365 اقامتگاه</small>
                        </div>
                        <Checkbox />
                    </li>
                </ul>
                <div className='button_group'>
                    <Button color='dark'>بازگشت</Button>
                    <Button color='primary'>جستجو</Button>
                </div>
            </Dialog>
        </ModalField>
    );
};

export default CitiesModal;
