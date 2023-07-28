import styled from '@emotion/styled';

export const MainField = styled.div({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',

    '& .MuiInputBase-root': {
        padding: '0 10px !important',
        borderRadius: '6px',
        height: '44px'
    },

    '& .MuiAutocomplete-popper': {
        li: {
            fontFamily: 'main',
            fontWeight: '300',
            fontSize: '0.9rem'
        }
    },

    label: {
        fontSize: '1rem',
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },

    input: {
        fontSize: '0.8rem',
        color: '#262626',
        textFillColor: 'unset !important',
        fontWeight: '300',

        '&::placeholder': {
            color: '#7f7f7f !important',
            opacity: '1',
            fontWeight: '300'
        }
    },

    fieldset: {
        borderColor: '#CECECE !important'
    }
});
