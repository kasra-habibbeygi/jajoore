import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: props.theme.palette.colors.text.primary,
    marginTop: '30px',

    h1: {
        fontSize: '1.5rem',
        marginBottom: '15px',
        fontWeight: '400'
    },

    small: {
        fontSize: '1rem'
    },

    '& .left_field': {
        width: '150px',

        '& .share': {
            cursor: 'pointer',
            width: '30px',
            height: 'auto',
            marginBottom: '10px'
        }
    }
}));
