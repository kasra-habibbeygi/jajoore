import styled from '@emotion/styled';

export const MobileNavbarField = styled.nav(props => ({
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '60px',
    zIndex: '1010',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& .layout': {
        position: 'absolute',
        width: '100%',
        height: '60px',
        margin: '0 auto',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '&:before': {
            content: '""',
            position: 'absolute',
            top: '-45px',
            borderRadius: '100%',
            width: '80px',
            height: '80px',
            boxShadow: '0px 0px 0px 2000px #fff'
        }
    },

    ol: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        position: 'relative',
        zIndex: '10',
        listStyle: 'none',

        li: {
            width: '100%'
        },

        a: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '5px',
            fontSize: '0.9rem',
            color: 'black',
            fontWeight: '300',

            img: {
                width: '22px',
                height: 'auto'
            }
        },

        '& .middle_one': {
            position: 'relative',
            top: '-8px',

            img: {
                width: '100%',
                height: 'auto'
            },

            span: {
                background: props.theme.palette.colors.primary,
                display: 'block',
                width: '53px',
                height: '53px',
                borderRadius: '60px',
                padding: '11px',
                position: 'relative',
                top: '-8px'
            }
        }
    },

    '@media(max-width : 900px)': {
        display: 'flex'
    },

    '@media(max-width : 450px)': {
        ol: {
            a: {
                fontSize: '0.7rem'
            }
        }
    }
}));
