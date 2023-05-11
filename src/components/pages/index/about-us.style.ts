import styled from '@emotion/styled';

export const MainField = styled.div<{ heightStatus: boolean }>(props => ({
    article: {
        width: '100%',
        height: props.heightStatus ? '320px' : '87px',
        overflow: 'hidden',
        transition: 'all 0.8s cubic-bezier(0, 0, 0.2, 1.11) 0s',

        p: {
            color: props.theme.palette.colors.text.primary,
            lineHeight: '30px'
        }
    },

    Button: {
        margin: '40px auto',

        svg: {
            transition: 'all 0.8s cubic-bezier(0, 0, 0.2, 1.11) 0s',
            transform: props.heightStatus ? 'rotate(180deg)' : 'rotate(0)'
        }
    }
}));
