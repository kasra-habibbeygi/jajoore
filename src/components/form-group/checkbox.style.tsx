import styled from '@emotion/styled';

export const CheckboxField = styled.div(props => ({
    '& .MuiButtonBase-root': {
        color: `${props.theme.palette.colors.primary} !important`
    },

    '& .MuiTypography-root': {
        fontSize: '0.9rem'
    }
}));
