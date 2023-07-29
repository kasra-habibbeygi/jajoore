import styled from '@emotion/styled';

export const MainField = styled.div<{ rate: number; maxRate: number }>(props => ({
    flex: '1 0 45%',

    h5: {
        fontWeight: '300',
        fontSize: '1.2rem'
    },

    small: {
        fontSize: '0.9rem',
        fontWeight: '300',
        color: '#5a5a5a',
        marginTop: '4px',
        display: 'block'
    },

    '& .progress': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginTop: '10px',

        '& .pill': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            borderRadius: '50px',
            backgroundColor: '#F2F2F2',
            height: '20px',

            span: {
                position: 'absolute',
                right: '0',
                borderRadius: '50px',
                width: `calc(${props.rate / props.maxRate}% * 100)`,
                height: '100%',
                backgroundColor: '#58c9ca'
            }
        },

        '& .title': {
            minWidth: 'max-content'
        }
    }
}));
