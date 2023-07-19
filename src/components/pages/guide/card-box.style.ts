import styled from '@emotion/styled';

export const CardBoxStyle = styled.div(() => ({
    width: '100%',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '50px',
    gap: '20px',

    '@media(max-width : 1100px)': {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
}));
