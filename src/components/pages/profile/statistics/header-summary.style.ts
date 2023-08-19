import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',

    '& .item': {
        flex: '1 0 30%',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #BBBBBB',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',

        h4: {
            fontWeight: '400',
            fontSize: '1.2rem'
        }
    }
});

export const PageHeader = styled.h3({
    fontSize: '1.5rem',
    fontWeight: '400',
    marginBottom: '20px'
});
