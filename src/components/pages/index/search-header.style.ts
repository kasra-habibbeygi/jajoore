import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    alignItems: 'center',

    '& .image_field': {
        width: '100%',
        height: '160px',
        borderRadius: '15px',
        objectFit: 'cover'
    },

    '& .left_field': {
        width: '100%',
        boxShadow: '0 0 10px -1px #00000029',
        borderRadius: '15px',
        padding: '20px',
        height: '140px'
    }
});
