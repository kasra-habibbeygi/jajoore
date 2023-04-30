import styled from '@emotion/styled';

export const NavbarField = styled.nav(props => ({
    padding: '0 20px',
    height: '60px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& .main_logo': {
        width: '120px',
        height: 'auto'
    },

    '& .right_right': {
        display: 'flex',
        alignItems: 'center',
        gap: '30px',

        ol: {
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '30px',

            a: {
                color: props.theme.palette.colors.text.primary
            },

            '& .active': {
                borderBottom: `2px solid ${props.theme.palette.colors.primary}`
            }
        }
    }
}));
