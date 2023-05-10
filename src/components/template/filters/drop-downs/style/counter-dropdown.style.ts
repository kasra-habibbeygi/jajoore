import styled from '@emotion/styled';

export const CheckboxStyle = styled.div(props => ({
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
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        width: '90px',

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
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',

        span: {
            width: '5px',
            height: '5px',
            background: props.theme.palette.colors.primary,
            display: 'block',
            borderRadius: '5px',
            position: 'relative',
            top: '-1px'
        }
    }
}));
