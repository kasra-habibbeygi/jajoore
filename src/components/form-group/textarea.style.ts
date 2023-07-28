import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    direction: 'rtl',

    label: {
        fontSize: '1rem',
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },

    textarea: {
        borderRadius: '8px',
        color: '#666666',
        padding: '10px',
        height: '120px',
        display: 'flex',
        alignItems: 'center',

        '&::placeholder': {
            color: '#acacac'
        }
    }
});
