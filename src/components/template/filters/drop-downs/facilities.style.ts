import styled from '@emotion/styled';

export const FacilitiesField = styled.div(props => ({
    position: 'relative',

    '& .checkbox_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    '& .row': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '45%',
        borderBottom: '1px solid #e3e3e3',

        '&:last-child': {
            borderBottom: 'none'
        },

        '&:nth-last-child(2)': {
            borderBottom: 'none'
        }
    },

    p: {
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',

        span: {
            width: '5px',
            height: '5px',
            background: props.theme.palette.colors.primary,
            display: 'block',
            borderRadius: '5px',
            position: 'relative',
            top: '-1px'
        }
    }
}));
