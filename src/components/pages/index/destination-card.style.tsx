import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    marginTop: '30px',
    marginBottom: '40px',

    '& .card_field': {
        width: '100%',
        borderRadius: '8px',
        background: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        marginTop: '8px',
        display: 'flex',

        a: {
            display: 'flex',
            gap: '10px',
            padding: '8px',
            width: '100%',
            alignItems: 'center'
        },

        img: {
            width: '100px',
            height: '100px',
            borderRadius: '8px',
            objectFit: 'cover'
        },

        p: {
            fontSize: '0.9rem',
            fontWeight: '400',
            color: 'black'
        },

        h6: {
            color: '#540202',
            fontSize: '1.1rem',
            fontWeight: '400'
        },

        small: {
            color: props.theme.palette.colors.text.secondary
        }
    },

    '& .mobile_slider': {
        display: 'none'
    },

    '& .cards_container': {
        listStyle: 'none'
    },

    '@media(max-width : 800px)': {
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
        },

        '& .cards_container': {
            display: 'none'
        }
    }
}));
