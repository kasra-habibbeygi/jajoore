import styled from '@emotion/styled';

export const MainField = styled.div({
    '& .main_img': {
        width: '100%',
        objectFit: 'cover',
        height: '600px',
        borderRadius: '10px'
    },

    '& .MuiPaper-elevation ': {
        background: 'transparent !important',
        boxShadow: 'none !important'
    },

    '@media(max-width : 800px)': {
        '& .main_img': {
            height: '400px'
        }
    }
});
