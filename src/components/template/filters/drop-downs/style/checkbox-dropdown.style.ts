import styled from '@emotion/styled';

export const CheckboxStyle = styled.div(props => ({
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
        transition: 'all linear 0.1s',
        padding: '0 10px',

        '&:hover': {
            background: '#F5F7F9'
        },

        '&:last-child': {
            borderBottom: 'none'
        },

        '&:nth-last-child(2)': {
            borderBottom: 'none'
        },

        '& .MuiFormControlLabel-root': {
            justifyContent: 'space-between',
            margin: '0'
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
