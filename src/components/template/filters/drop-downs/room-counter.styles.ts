import styled from '@emotion/styled';

export const DropDownMainField = styled.div(props => ({
    position: 'relative',

    '& .row': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10px'
    },

    '& .counter': {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        fontSize: '0.9rem',

        svg: {
            width: '20px'
        },

        '& .green': {
            color: props.theme.palette.colors.green,
            cursor: 'pointer'
        },

        '& .red': {
            color: props.theme.palette.colors.primary,
            cursor: 'pointer'
        }
    },

    p: {
        fontSize: '0.9rem'
    }
}));
