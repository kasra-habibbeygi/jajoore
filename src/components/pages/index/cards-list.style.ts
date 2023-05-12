import styled from '@emotion/styled';

export const MainField = styled.div({
    padding: '20px',

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        padding: '6px 15px',
        borderRadius: '8px',

        h3: {
            fontWeight: '400'
        }
    },

    ol: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',

        li: {
            width: '33.33%',
            padding: '10px'
        }
    },

    '@media(max-width : 1300px)': {
        ol: {
            li: {
                width: '50%'
            }
        }
    },

    '@media(max-width : 992px)': {
        ol: {
            li: {
                width: '100%'
            }
        }
    },

    '@media(max-width : 800px)': {
        ol: {
            li: {
                width: '50%'
            }
        }
    },

    '@media(max-width : 600px)': {
        ol: {
            li: {
                width: '100%'
            }
        }
    }
});
