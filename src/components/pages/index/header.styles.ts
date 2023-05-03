import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: props.theme.palette.colors.text.primary,

    h1: {
        fontSize: '1.5rem',
        marginBottom: '15px'
    },

    small: {
        fontSize: '1rem'
    }
}));