import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    '& .about_text': {
        color: props.theme.palette.colors.text.primary,
        lineHeight: '30px',
        marginBottom: '20px'
    },

    ul: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',

        li: {
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '15px',
            boxShadow: '0 0 3px rgb(0 0 0 / 16%)',

            p: {
                fontWeight: '400'
            },

            small: {
                fontSize: '0.9rem'
            }
        }
    }
}));
