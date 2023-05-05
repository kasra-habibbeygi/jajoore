/* eslint-disable no-unused-vars */
import React from 'react';
import Image from 'next/image';

// MUI
import { Dialog } from '@mui/material';

// Assets
import { ModalField } from './share.style';
import ShareIcon from '@/assets/images/card/share.svg';
import ChatIcon from '../../assets/images/share-modal/chat.svg';
import CopyIcon from '../../assets/images/share-modal/copy.svg';
import TelegramIcon from '../../assets/images/share-modal/telegram.svg';
import WhatsAppIcon from '../../assets/images/share-modal/whatsapp.svg';

// Component
import Button from '../form-group/button';

// Types
interface ShareModalTypes {
    status: boolean;
    setStatus: (status: boolean) => void;
}

const shareModal = ({ status, setStatus }: ShareModalTypes) => {
    return (
        <ModalField>
            <Dialog onClose={() => setStatus(false)} open={status} disablePortal keepMounted fullWidth={true} scroll='body' maxWidth='xs'>
                <div className='header'>
                    <h3>اشتراک گذاری</h3>
                    <Image src={ShareIcon} alt='' className='share' />
                </div>
                <div className='body'>
                    <Button color='primary'>
                        <Image src={CopyIcon} alt='' />
                        <p>کپی لینک</p>
                    </Button>
                    <Button color='green'>
                        <Image src={WhatsAppIcon} alt='' />
                        <p>واتساپ</p>
                    </Button>
                    <Button extraClass='yellow_one'>
                        <Image src={ChatIcon} alt='' />
                        <p>پیامک</p>
                    </Button>
                    <Button extraClass='blue_one'>
                        <Image src={TelegramIcon} alt='' />
                        <p>تلگرام</p>
                    </Button>
                </div>
            </Dialog>
        </ModalField>
    );
};

export default shareModal;
