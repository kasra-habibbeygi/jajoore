import styled from '@emotion/styled';

export const MainField = styled.div({
    '& .MuiInputBase-root': {
        '&:before': {
            border: 'none'
        },
        '&:hover': {
            '&:before': {
                border: 'none'
            }
        }
    },

    '& .MuiNativeSelect-select': {
        border: '1px solid #CFCFCF',
        borderRadius: '5px',
        padding: '5px 10px'
    },

    option: {
        color: 'red'
    }
});
