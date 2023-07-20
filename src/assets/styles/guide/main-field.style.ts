/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    display: 'flex',
    gap: '100px',
    marginBottom: '50px',

    '@media(max-width : 1100px)': {
        flexDirection: 'column',
        width: '100%',
        gap: '50px'
    }
}));
