import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '& >div': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        },

        '& .right_field': {
            span: {
                background: props.theme.palette.colors.primary,
                color: 'white',
                fontSize: '0.9rem',
                borderRadius: '50px',
                padding: '3px 15px'
            }
        }
    },

    '& .attr_rate_list': {
        flexWrap: 'wrap',
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
        gap: '2%',
        justifyContent: 'space-between',

        '& >div': {
            width: '48%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 0'
        }
    }
}));
