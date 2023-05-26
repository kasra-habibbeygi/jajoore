import styled from '@emotion/styled';

export const DoubleCol = styled.div({
    width: '100%',
    display: 'flex',
    gap: '20px',
    margin: '30px 0',

    '& .content_field': {
        width: 'calc(100% - 320px)',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: '5px',

        '& .pagination': {
            width: '100%',
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center'
        }
    },

    '& .aside': {
        width: '300px',

        '& .symbol_field': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '20px',

            img: {
                width: '110px',
                height: 'auto'
            }
        }
    },

    '@media(max-width : 800px)': {
        flexDirection: 'column-reverse',

        '& .content_field': {
            width: '100%'
        },

        '& .aside': {
            width: '100%',

            '& .symbol_field': {
                display: 'none'
            }
        }
    }
});
