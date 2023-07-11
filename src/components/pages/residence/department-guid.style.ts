import styled from '@emotion/styled';

export const MainField = styled.div<{ status: boolean }>(props => ({
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: '100%',
    position: 'fixed',
    top: props.status ? '0' : '-50px',
    borderRadius: '0 0 10px 10px',
    padding: '10px 25px',
    zIndex: '15',
    opacity: props.status ? '1' : '0',
    pointerEvents: props.status ? 'initial' : 'none',
    transition: 'all 0.8s cubic-bezier(0, 0, 0.2, 1.11) 0s',

    ol: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '30px',

        a: {
            color: 'white',

            '&.active': {
                backgroundColor: props.theme.palette.colors.primary,
                padding: '1px 10px',
                borderRadius: '70px'
            }
        }
    }
}));
