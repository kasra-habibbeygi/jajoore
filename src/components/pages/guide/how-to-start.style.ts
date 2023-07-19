import styled from '@emotion/styled';

export const HowToStartStyle = styled.div(() => ({
    width: '100%',
    boxShadow: '0px 0px 6px #00000026',
    borderRadius: '20px',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '50px auto !important',

    '& .text': {
        h2: {
            fontWeight: '300',
            fontSize: '2rem',
            marginBottom: '30px'
        },
        h3: {
            fontWeight: '200',
            fontSize: '1.5rem'
        }
    },

    '@media(max-width : 750px)': {
        justifyContent: 'flex-end',
        position: 'relative',

        '& .text': {
            position: 'absolute',
            right: '20px',

            h2: {
                fontSize: '1.5rem',
                marginBottom: '20px'
            },

            h3: {
                fontSize: '1.3rem'
            }
        }
    },

    '@media(max-width:450px)': {
        img: {
            width: '100%'
        }
    }
}));
