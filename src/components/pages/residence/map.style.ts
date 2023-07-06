import styled from '@emotion/styled';

export const MainField = styled.div<{ mapScaleStatus: boolean }>({
    marginBottom: '40px',

    '& .leaflet-container': {
        height: '300px',
        borderRadius: '20px'
    },

    '& .eaflet-control-attribution': {
        display: 'none !important'
    },

    '& .leaflet-control-attribution.leaflet-control': {
        display: 'none'
    }
});
