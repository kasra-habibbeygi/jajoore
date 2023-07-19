import styled from '@emotion/styled';

export const CollapsStyle = styled.div(() => ({
    width: '100%',

    p: {
        fontFamily: 'main !important',
        fontWeight: '300',
        textAlign: 'justify',
        width: '100%',
        padding: '5px 20px'
    },

    '& .MuiAccordionDetails-root': {
        p: {
            fontWeight: '200',
            lineHeight: '30px'
        }
    },

    '& .MuiPaper-root': {
        boxShadow: 'unset'
    },

    '& .MuiTypography-root': {
        display: 'flex',
        gap: '20px'
    }
}));
