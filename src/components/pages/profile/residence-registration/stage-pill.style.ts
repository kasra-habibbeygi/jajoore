import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginTop: '20px',
    flexWrap: 'wrap',

    button: {
        fontSize: '0.8rem',
        padding: '10px 15px',
        minHeight: '32px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',

        '&.prev': {
            border: `1px solid ${props.theme.palette.colors.blue}`,
            color: `${props.theme.palette.colors.blue} !important`
        },

        '&.active': {
            border: `1px solid ${props.theme.palette.colors.yellow}`,
            color: `${props.theme.palette.colors.yellow} !important`
        }
    }
}));
