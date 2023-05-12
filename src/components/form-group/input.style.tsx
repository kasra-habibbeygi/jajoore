import styled from '@emotion/styled';

export const InputField = styled.div({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    direction: 'rtl',
    gap: '10px',

    label: {
        fontSize: '0.9rem',
        color: '#000000'
    },

    input: {
        width: '100%',
        padding: '5px 10px',
        borderRadius: '6px',
        border: '1px solid #CECECE',
        color: '#000000',
        direction: 'rtl',
        fontWeight: '200'
    }
});
