import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    marginTop: '30px',
    marginBottom: '40px',

    '& .card_field': {
        width: '100%',
        padding: '8px',
        borderRadius: '8px',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        marginTop: '8px',

        img: {
            width: '100px',
            height: '100px',
            borderRadius: '8px',
            objectFit: 'cover'
        },

        p: {
            fontSize: '0.9rem',
            fontWeight: '400'
        },
        h6: {
            color: '#540202',
            fontSize: '1.1rem'
        },
        small: {
            color: props.theme.palette.colors.text.secondary
        }
    }
}));
