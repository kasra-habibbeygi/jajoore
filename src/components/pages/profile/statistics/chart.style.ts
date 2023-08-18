import styled from '@emotion/styled';

export const MainField = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '20px',

    '& .chart_field': {
        flex: '1 0 45%',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #BFBFBF',
        width: '100%'
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '30px'
    },

    '& .recharts-responsive-container': {
        height: '300px !important',

        tspan: {
            direction: 'ltr'
        }
    }
});
