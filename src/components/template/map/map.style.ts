import styled from '@emotion/styled';

export const MainField = styled.div<{ mapScaleStatus: boolean }>(props => ({
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    padding: '10px',
    borderRadius: '8px',
    position: props.mapScaleStatus ? 'fixed' : 'sticky',
    top: '0',
    left: props.mapScaleStatus ? '0' : 'unset',
    zIndex: props.mapScaleStatus ? '1100' : '10',
    background: 'white',
    width: '100%',
    overflow: 'hidden',
    transform: 'scale(1.02)',

    '& .leaflet-container': {
        height: props.mapScaleStatus ? '100vh' : '200px'
    },

    '& .eaflet-control-attribution': {
        display: 'none !important'
    },

    '& .leaflet-control-attribution.leaflet-control': {
        display: 'none'
    },

    '& .activeLocation': {
        zIndex: '200 !important'
    },

    h3: {
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        padding: '6px 15px',
        borderRadius: '8px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        img: {
            cursor: 'pointer'
        }
    },

    '@media(max-width : 800px)': {
        opacity: props.mapScaleStatus ? '1' : '0',
        pointerEvents: props.mapScaleStatus ? 'initial' : 'none',
        position: 'fixed'
    }
}));
