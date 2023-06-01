import styled from '@emotion/styled';

export const CommentMainField = styled.div(props => ({
    h3: {
        fontWeight: '300',
        marginBottom: '30px'
    },

    '& .comment_list': {
        listStyle: 'none',

        li: {
            marginBottom: '40px',
            paddingBottom: '40px',
            borderBottom: '1px solid #f1f1f1'
        }
    },

    '& .header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    '& .avatar_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

        p: {
            fontWeight: '300'
        },

        small: {
            color: props.theme.palette.colors.text.light
        },

        img: {
            width: '80px',
            height: '80px',
            borderRadius: '100px',
            objectFit: 'cover'
        }
    },

    '& .comment': {
        marginTop: '20px',
        lineHeight: '27px',
        fontSize: '0.9rem'
    },

    '& .answer': {
        background: '#f1f1f1',
        borderRadius: '8px',
        padding: '15px',
        marginRight: '20px',
        marginTop: '20px'
    },

    '& .form_group': {
        width: '100%',
        marginTop: '20px',

        button: {
            marginRight: 'auto',
            marginTop: '20px'
        }
    }
}));
