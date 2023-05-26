import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    padding: '20px',
    position: 'relative',

    '& .card_slider': {
        padding: '10px',
        position: 'unset',

        '& > .swiper-pagination': {
            bottom: '-10px !important',

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
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        padding: '6px 15px',
        borderRadius: '8px',

        h3: {
            fontWeight: '400'
        },

        button: {
            minHeight: '30px'
        }
    }
}));
