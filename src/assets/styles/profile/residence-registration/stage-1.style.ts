import styled from '@emotion/styled';

export const HeaderInfo = styled.div({
    marginTop: '40px',

    h3: {
        fontWeight: '400'
    },

    '& .alert_field': {
        backgroundColor: '#EAFAEF',
        borderRadius: '5px',
        color: '#0F7B07',
        padding: '20px',
        marginTop: '10px',

        div: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            img: {
                width: '20px',
                height: 'auto'
            }
        },

        ul: {
            marginRight: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '20px',
            position: 'relative',
            listStyle: 'none',

            li: {
                display: 'flex',
                gap: '10px',

                span: {
                    width: '7px',
                    height: '7px',
                    backgroundColor: '#0F7B07',
                    display: 'block',
                    borderRadius: '10px',
                    position: 'relative',
                    top: '8px'
                }
            }
        }
    },

    h4: {
        fontWeight: '400',
        fontSize: '1rem'
    }
});
