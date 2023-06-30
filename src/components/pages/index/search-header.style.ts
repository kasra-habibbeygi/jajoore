import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    alignItems: 'center',
    marginTop: '40px',
    position: 'relative',

    '& .image_field': {
        width: '50%',
        height: '160px',
        borderRadius: '15px',
        objectFit: 'cover'
    },

    '& .left_field': {
        width: '60%',
        boxShadow: '0 0 10px -1px #00000029',
        borderRadius: '15px',
        padding: '20px',
        height: '140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        left: '0',
        background: 'white'
    },

    h1: {
        fontSize: '1.4rem',
        fontWeight: '300',
        marginBottom: '15px'
    },

    p: {
        fontSize: '0.9rem'
    }
});
