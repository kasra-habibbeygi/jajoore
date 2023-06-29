import styled from '@emotion/styled';

export const MainField = styled.div({
    '& .main_img': {
        width: '100%',
        objectFit: 'cover',
        height: '700px',
        borderRadius: '10px'
    },

    '& .MuiPaper-elevation ': {
        background: 'transparent !important',
        boxShadow: 'none !important'
    }
});
