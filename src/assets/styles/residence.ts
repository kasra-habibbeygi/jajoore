import styled from '@emotion/styled';

export const DoubleCol = styled.div({
    width: '100%',
    display: 'flex',
    gap: '30px',
    margin: '30px 0',

    '& .content_field': {
        width: 'calc(100% - 400px)',
        borderRadius: '5px',
        paddingBottom: '20px',

        '& .pagination': {
            width: '100%',
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center'
        }
    },

    '@media(max-width : 800px)': {
        flexDirection: 'column-reverse',

        '& .content_field': {
            width: '100%'
        },

        '& .aside': {
            width: '100%'
        }
    }
});
