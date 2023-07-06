import styled from '@emotion/styled';

export const MainField = styled.div<{ stats: boolean }>(props => ({
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '8px',
    overflow: 'hidden',
    background: 'white',
    position: 'fixed',
    width: '400px',
    zIndex: '1100',
    bottom: props.stats ? '10px' : '-100px',
    right: '10px',
    transition: 'all 0.6s cubic-bezier(0, 0, 0.2, 1.11) 0s',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',

    '& .main_img': {
        width: '90px',
        height: '90px',
        objectFit: 'cover',
        borderRadius: '8px'
    },

    '& .info': {
        padding: '10px 0 10px 5px',
        width: '100%'
    },

    h5: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        p: {
            fontWeight: '400',
            fontSize: '0.8rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '150px',
            color: 'black'
        },

        span: {
            background: props.theme.palette.colors.primary,
            borderRadius: '50px',
            color: 'white',
            padding: '0px 10px',
            fontWeight: '200',
            paddingTop: '5px',
            fontSize: '0.7rem'
        }
    },

    '& .price': {
        color: props.theme.palette.colors.text.primary,
        fontSize: '0.8rem',
        display: 'flex',
        alignItems: 'center',

        b: {
            color: props.theme.palette.colors.alert,
            fontWeight: '500',
            textDecoration: 'line-through'
        }
    },

    '& .footer': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        span: {
            fontSize: '0.7rem',
            borderRadius: '50px',
            border: `1px solid ${props.theme.palette.colors.primary}`,
            padding: '1px 5px',
            color: props.theme.palette.colors.primary
        }
    },

    '& .details': {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',

        p: {
            fontSize: '0.7rem'
        }
    },

    '@media(max-width : 800px)': {
        width: '300px'
    }
}));
