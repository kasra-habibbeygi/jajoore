import styled from '@emotion/styled';
import { Dialog } from '@mui/material';

export const ModalField = styled(Dialog)({
    h3: {
        marginBottom: '20px'
    },

    '& .main_field': {
        padding: '20px',
        direction: 'rtl',
        textAlign: 'right'
    },

    '& .form_field': {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    '& .w-50': {
        width: '50%',
        paddingLeft: '20px',
        paddingBottom: '15px',

        '&:nth-of-type(2n)': {
            paddingLeft: '0'
        }
    },

    '& .otp_field': {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        gap: '10px'
    },

    '& .submit_button': {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end'
    }
});
