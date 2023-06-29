import styled from '@emotion/styled';

export const MainField = styled.div({
    width: '100%',
    padding: '20px',
    borderRadius: '8px',
    background: '#FFDEDF',
    marginBottom: '50px ',

    h3: {
        fontWeight: '300'
    },

    ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '20px 2%',
        flexWrap: 'wrap',
        marginTop: '20px',

        li: {
            width: '48%',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            p: {
                fontSize: '0.9rem'
            },

            img: {
                width: '25px',
                height: 'auto'
            }
        }
    },

    '@media(max-width : 600px)': {
        ul: {
            flexDirection: 'column',

            li: {
                width: '100%'
            }
        }
    }
});
