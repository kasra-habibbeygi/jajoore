import styled from '@emotion/styled';

export const DoubleCol = styled.div({
    width: '100%',
    display: 'flex',
    gap: '20px',
    margin: '50px 0',

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

            img: {
                width: '110px',
                height: 'auto'
            }
        }
    },

    '& .aside_cards_field': {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        listStyle: 'none',

        li: {
            width: '100%',
            padding: '8px 0'
        }
    },

    '@media(max-width : 800px)': {
        flexDirection: 'column-reverse',

        '& .content_field': {
            width: '100%'
        },

        '& .aside': {
            width: '100%'
        },

        '& .aside_cards_field': {
            flexDirection: 'row',

            li: {
                width: '50%',
                padding: '15px'
            }
        }
    }
});
