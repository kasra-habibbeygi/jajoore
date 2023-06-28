import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    '& .header': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

        '& .title_text': {
            background: props.theme.palette.colors.primary,
            color: 'white',
            padding: '1px 10px',
            borderRadius: '50px',
            fontSize: '0.9rem'
        }
    },

    '& .content': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginBottom: '40px',
        marginTop: '20px',

        div: {
            width: '150px',
            borderRadius: '5px',
            boxShadow: '0 0 4px 1px rgb(0 0 0 / 9%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '15px',

            p: {
                fontSize: '0.9rem'
            },

            img: {
                width: '30px',
                height: 'auto'
            }
        }
    }
}));
