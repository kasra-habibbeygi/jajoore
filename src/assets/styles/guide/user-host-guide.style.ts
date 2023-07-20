/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const UserAccountGuideStyle = styled.div(props => ({
    padding: '50px 0px',

    '& .header': {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '40px',
        a: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },
        img: {
            width: '10px',
            transform: 'rotate(180deg)'
        },
        h2: {
            fontWeight: 300
        }
    },

    '& .content': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gridTemplateRows: 'minmax(100px , auto)',
        columnGap: '100px',

        h3: {
            fontWeight: '300',
            marginBottom: '20px'
        },

        section: {
            width: '100%',
            marginBottom: '30px'
        }
    },

    '@media(max-width : 1100px)': {
        '& .content': {
            gridTemplateColumns: 'repeat(1,1fr)'
        }
    },

    '@media(max-width : 650px)': {
        h2: {
            fontSize: '1.2rem'
        },

        '& .content': {
            h3: {
                fontSize: '1.1rem'
            }
        }
    }
}));
