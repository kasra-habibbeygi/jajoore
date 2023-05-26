import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    position: 'relative',

    '& .aside_cards_field': {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        listStyle: 'none',

        li: {
            width: '100%',
            padding: '8px 0'
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
    },

    '& .mobile_slider': {
        display: 'none'
    },

    '@media(max-width : 800px)': {
        '& .aside_cards_field': {
            display: 'none'
        },

        '& .mobile_slider': {
            display: 'block',
            position: 'relative',
            marginBottom: '50px',

            '& .card_slider': {
                padding: '10px',
                position: 'unset',

                '& > .swiper-pagination': {
                    bottom: '-30px !important',

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
        }
    }
}));
