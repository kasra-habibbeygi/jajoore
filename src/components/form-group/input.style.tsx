import styled from '@emotion/styled';

export const InputField = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    direction: 'rtl',
    gap: '10px',

    label: {
        fontSize: '1rem',
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },

    input: {
        width: '100%',
        padding: '5px 10px',
        borderRadius: '6px',
        border: '1px solid #CECECE',
        color: '#000000',
        direction: 'rtl',
        fontWeight: '200',
        height: '44px',

        '&::placeholder': {
            color: '#acacac'
        }
    }
});
