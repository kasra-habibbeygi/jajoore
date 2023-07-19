/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const UserAccountGuideStyle = styled.div(props => ({
    padding: '50px 0px',
    hr: {
        margin: '10px 0px'
    },
    '& .header': {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '40px',
        div: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },
        img: {
            width: '10px'
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
            fontWeight: '200',
            marginBottom: '20px'
        },
        section: {
            width: '100%',
            marginBottom: '30px'
        }
    }
}));
