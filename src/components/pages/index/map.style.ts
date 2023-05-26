import styled from '@emotion/styled';

export const MainField = styled.div({
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    padding: '10px',
    borderRadius: '8px',

    '& .leaflet-container': {
        height: '300px'
    },

    '& .eaflet-control-attribution': {
        display: 'none !important'
    },

    h3: {
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        padding: '6px 15px',
        borderRadius: '8px',
        marginBottom: '20px'
    },

    '@media(max-width:800px)': {
        display: 'none'
    }
});
