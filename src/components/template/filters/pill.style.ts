import styled from '@emotion/styled';

interface PillFieldType {
    activeStatus: boolean;
}

export const PillField = styled.div<PillFieldType>(props => ({
    button: {
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        padding: '4px 9px',
        border: props.activeStatus ? `1px solid ${props.theme.palette.colors.primary}` : '1px solid transparent',

        img: {
            width: '20px'
        },

        p: {
            fontSize: '0.8rem',
            fontWeight: '200'
        }
    },

    '@media(max-width : 650px)': {
        button: {
            width: '100%'
        }
    }
}));
