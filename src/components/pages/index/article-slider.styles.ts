import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    marginBottom: '70px',
    position: 'relative',

    '& .article_slider': {
        padding: '10px',
        position: 'unset',

        '& > .swiper-pagination': {
            bottom: '-40px!important',

            '& .swiper-pagination-bullet-active': {
                background: `${props.theme.palette.colors.primary} !important`,
                border: 'none !important'
            },

            '& .swiper-pagination-bullet': {
                width: '10px',
                height: '10px',
                background: 'white',
                border: '1px solid black'
            }
        }
    }
}));
