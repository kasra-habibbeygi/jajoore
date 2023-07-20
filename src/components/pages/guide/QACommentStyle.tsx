import styled from '@emotion/styled';

export const QACommentStyle = styled.div(() => ({
    marginBottom: '50px',

    h2: {
        fontWeight: '300'
    },

    '@media(max-width : 1100px)': {
        h2: {
            fontSize: '1.1rem'
        }
    }
}));
