import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    width: '100%',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #E2E2E2',
    margin: '40px 0',

    '& .header_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '& .avatar': {
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
        }
    },

    '& .left_field': {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',

        p: {
            fontSize: '0.9rem',
            fontWeight: '300',

            span: {
                fontWeight: '200',
                color: props.theme.palette.colors.text.light
            }
        }
    },

    button: {
        margin: '20px auto',
        marginBottom: '0',
        borderColor: '#e1e1e1 !important'
    }
}));
