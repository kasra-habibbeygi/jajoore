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
    backgroundImage: 'radial-gradient(circle at 50% -2px,transparent 35px, #ffffff 34px)',
    filter: 'drop-shadow(0px -1px 6px  rgba(0, 0, 0, 0.08)) drop-shadow(0px -2px 12px  rgba(0, 0, 0, 0.12))',

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
