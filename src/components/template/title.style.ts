import styled from '@emotion/styled';

export const MainField = styled.div({
    position: 'relative',
    paddingRight: '10px',
    margin: '25px 0',

    span: {
        position: 'absolute',
        display: 'flex',
        right: '0',
        background: '#ff000026',
        width: '60px',
        top: '-7px',
        height: '40px',
        borderRadius: '40px 10px 10px 16px'
    },

    h4: {
        fontWeight: '400',
        position: 'relative',
        zIndex: '1'
    }
});