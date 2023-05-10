import styled from '@emotion/styled';

export const CheckboxField = styled.div(props => ({
    width: '100%',

    '& .MuiButtonBase-root': {
        color: `${props.theme.palette.colors.text.light} !important`
    },

    '& .Mui-checked': {
        color: `${props.theme.palette.colors.blue} !important`
    },

    '& .MuiSvgIcon-root': {
        width: '0.8em'
    },

    '& .MuiTypography-root': {
        fontSize: '0.9rem'
    },

    span: {
        fontFamily: 'main',
        fontWeight: '200'
    },

    '& .MuiFormControlLabel-root': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row-reverse'
    }
}));
