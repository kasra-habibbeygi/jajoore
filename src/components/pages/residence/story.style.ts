import styled from '@emotion/styled';

export const MainField = styled.ul(props => ({
    h3: {
        marginBottom: '30px',
        fontWeight: '400'
    },

    ul: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '20px',
        overflow: 'auto',
        width: '100%',
        listStyle: 'none',
        paddingBottom: '20px',

        '&::-webkit-scrollbar': {
            height: '5px'
        },

        li: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '100px',
            minWidth: '100px',
            cursor: 'pointer',

            p: {
                fontSize: '0.9rem',
                textAlign: 'center'
            },

            img: {
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '50px',
                border: `2px solid ${props.theme.palette.colors.primary}`
            }
        }
    }
}));
