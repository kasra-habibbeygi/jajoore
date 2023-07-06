/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';

// Assets
import { ModalField } from './provinces.style';
import MocImage from '@/assets/images/moc/bg.jpg';

// MUI
import { Dialog } from '@mui/material';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

// Component
import Button from '../form-group/button';

// Types
interface ProvincesModalTypes {
    status: boolean;
    setStatus: (status: boolean) => void;
    setCitiesModalStatus: (status: boolean) => void;
    data: any;
}

const ProvincesModal = ({ status, setStatus, setCitiesModalStatus, data }: ProvincesModalTypes) => {
    const choseProvienceHandler = () => {
        setStatus(false);
        setTimeout(() => {
            setCitiesModalStatus(true);
        }, 300);
    };

    return (
        <ModalField>
            <Dialog onClose={() => setStatus(false)} open={status} disablePortal keepMounted fullWidth={true} scroll='body' maxWidth='xs'>
                <h3>استان مورد نظر را انتخاب بکنید</h3>
                <ul>
                    <li onClick={choseProvienceHandler}>
                        <div className='right_field'>
                            <Image src={MocImage} alt='' />
                            <div className='content'>
                                <h3>
                                    تهران
                                    <span>4238 اقامتگاه</span>
                                </h3>
                                <small>کوهسار ، طالقان ، کردان ، آسارا</small>
                            </div>
                        </div>
                        <ChevronLeftRoundedIcon />
                    </li>
                </ul>
                <div className='button_group'>
                    <Button color='dark' handler={() => setStatus(false)}>
                        بازگشت
                    </Button>
                    <Button color='green'>جستجو</Button>
                </div>
            </Dialog>
        </ModalField>
    );
};

export default ProvincesModal;
