import styled from '@emotion/styled';

export const MainField = styled.div({
    marginBottom: '50px',

    '& .content': {
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #E8E8E8',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px'
    },

    h6: {
        fontSize: '1rem',
        fontWeight: '300'
    },

    p: {
        fontSize: '0.9rem'
    },

    img: {
        width: '35px',
        height: 'auto'
    }
});
