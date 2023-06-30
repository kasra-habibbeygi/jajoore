import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    color: props.theme.palette.colors.text.primary,
    marginTop: '30px',

    h1: {
        fontSize: '1.5rem',
        marginBottom: '15px',
        fontWeight: '400',
        margin: '0'
    },

    small: {
        fontSize: '1rem'
    },

    '& .top_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',

        '& .share': {
            cursor: 'pointer',
            width: '30px',
            height: 'auto'
        }
    },

    '& .bottom_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    '@media(max-width : 800px)': {
        '& .top_field': {
            background: '#F6F6F6',
            borderRadius: '15px 15px 0 0',
            padding: '10px 20px'
        },

        '& .container': {
            width: '100%'
        },

        '& .bottom_field': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px'
        }
    }
}));
