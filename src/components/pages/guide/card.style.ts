import styled from '@emotion/styled';

export const CardStyle = styled.div(() => ({
    width: '100%',
    height: '260px',
    boxShadow: '0px 0px 6px #00000026',
    borderRadius: '20px',
    padding: '20px',
    textAlign: 'center',

    h2: {
        borderBottom: '1px solid #ababab',
        paddingBottom: '10px',
        margin: '20px auto',
        fontWeight: '300',
        width: 'max-content'
    },

    p: {
        textAlign: 'center'
    },

    '@media(max-width : 1100px)': {
        flex: '1 0 42%',
        gap: '20px'
    },

    '@media(max-width : 650px)': {
        flex: '1 100%',
        h2: {
            fontSize: '1.2rem'
        }
    }
}));
