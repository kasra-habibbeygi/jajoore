import styled from '@emotion/styled';

export const CommentStyle = styled.div({
    h2: {
        fontWeight: '300',
        marginBottom: '50px'
    },

    '& .user_pic': {
        display: 'flex',
        marginBottom: '50px',
        alignItems: 'center',
        gap: '20px',

        span: {
            fontSize: '1.1rem'
        },

        img: {
            width: '70px',
            height: '70px',
            border: '1px solid #BFBFBF',
            borderRadius: '50%'
        }
    },

    p: {
        textAlign: 'justify',
        marginBottom: '30px'
    },

    h3: {
        fontWeight: '300',
        marginBottom: '20px'
    },

    button: {
        marginTop: '30px',
        marginRight: 'auto'
    }
});
