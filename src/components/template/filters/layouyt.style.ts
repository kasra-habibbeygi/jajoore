import styled from '@emotion/styled';

export const LayoutField = styled.div(props => ({
    width: '300px',
    padding: '13px',
    background: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius: '8px',
    position: 'absolute',
    zIndex: '5',
    top: '45px',
    right: '0',

    '& .header': {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
        fontWeight: '300',
        marginBottom: '20px',

        span: {
            position: 'absolute',
            right: '-13px',
            height: '30px',
            width: '6px',
            background: props.theme.palette.colors.primary,
            borderRadius: '5px 0 0 5px'
        }
    },

    '& .footer': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'flex-end',
        marginTop: '20px',

        button: {
            fontSize: '0.8rem',
            padding: '0px 10px',
            minHeight: '28px',
            fontWeight: '200'
        }
    }
}));
