import styled from '@emotion/styled';

export const MainField = styled.div({
    '& .card_content': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '20px',
        marginTop: '20px',

        div: {
            width: 'max-content',
            borderRadius: '5px',
            boxShadow: '0 0 4px 1px rgb(0 0 0 / 9%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '20px',

            p: {
                fontSize: '0.9rem'
            },

            img: {
                width: '25px',
                height: 'auto'
            }
        }
    },

    '& .info': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '40px'
    }
});
