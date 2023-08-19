import styled from '@emotion/styled';

export const MainField = styled.div({
    margin: '20px 0',
    borderRadius: '8px',
    border: '1px solid #BBBBBB',
    padding: '15px',

    h4: {
        fontWeight: '400',
        fontSize: '1.3rem'
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        div: {
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
        }
    },

    '& .progress_field': {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '30px',
        marginTop: '30px'
    }
});
