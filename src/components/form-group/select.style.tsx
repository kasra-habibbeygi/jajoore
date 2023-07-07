import styled from '@emotion/styled';

export const MainField = styled.div({
    textAlign: 'right',

    '& .MuiInputBase-root': {
        width: '100%'
    },

    '& .MuiSelect-select': {
        padding: '6px 10px',
        fontFamily: 'main !important',
        fontWeight: '300',
        fontSize: '0.9rem'
    }
});
