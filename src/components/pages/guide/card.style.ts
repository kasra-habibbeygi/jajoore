import styled from '@emotion/styled';

export const CardStyle = styled.div(() => ({
    width: '100%',
    boxShadow: '0px 0px 6px #00000026',
    borderRadius: '20px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    h2: {
        borderBottom: '1px solid #ababab',
        paddingBottom: '10px',
        margin: '20px 0px',
        fontWeight: '300'
    },
    p: {
        textAlign: 'center'
    }
}));
