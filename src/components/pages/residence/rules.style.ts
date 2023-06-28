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
            border: '1px solid #E8E8E8',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '20px',

            span: {
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            },

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
