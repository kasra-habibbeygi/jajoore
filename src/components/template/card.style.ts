import styled from '@emotion/styled';

export const MainCardField = styled.div(props => ({
    width: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    paddingBottom: '15px',
    borderRadius: '8px',
    position: 'relative',

    '& .pills_field': {
        position: 'absolute',
        top: '5px',
        right: '5px',
        zIndex: '5',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '2px',

        span: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'flex-start',
            width: '100px',
            overflow: 'hidden',
            borderRadius: '50px',
            padding: '2px 6.5px',
            height: '20px',
            transition: 'all linear 0.2s',

            p: {
                minWidth: 'max-content',
                fontSize: '0.8rem'
            },

            img: {
                minWidth: '17px',
                width: '17px',
                height: 'auto'
            },

            '&.yellow': {
                background: props.theme.palette.colors.yellow,
                color: 'white',

                img: {
                    minWidth: '23px !important',
                    width: '23px'
                }
            },
            '&.yellow_light': {
                background: props.theme.palette.colors.light.yellow
            },

            '&.red': {
                background: props.theme.palette.colors.primary,
                color: 'white'
            },

            '&.green': {
                background: '#5E986F',
                color: 'white',
                justifyContent: 'center'
            }
        }
    },

    '& .discount_field': {
        position: 'absolute',
        bottom: '15px',
        left: '-3px',
        zIndex: '5',
        display: 'flex',
        alignItems: 'center',
        direction: 'ltr',

        p: {
            background: '#0000009c',
            color: 'white',
            fontSize: '0.8rem',
            padding: '6px 30px 5px 9px',
            fontWeight: '200',
            width: '90px',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },

        span: {
            background: props.theme.palette.colors.primary,
            color: 'white',
            fontSize: '0.9rem',
            position: 'absolute',
            width: '35px',
            height: '35px',
            borderRadius: '50px',
            border: '2px solid white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            right: '-14px',
            paddingTop: '4px'
        }
    },

    '& .half_card_discount': {
        bottom: '45px'
    },

    '& .vip_field': {
        position: 'absolute',
        top: '5px',
        left: '5px',
        zIndex: '5',
        background: props.theme.palette.colors.primary,
        borderRadius: '50px',
        padding: '5px 2px 0 2px',
        color: 'white',
        width: '50px',
        textAlign: 'center',
        fontSize: '0.8rem',
        fontWeight: '200',
        boxShadow: 'rgb(0 0 0 / 22%) 0px 3px 8px'
    },

    '& .image_field': {
        height: '190px',
        position: 'relative'
    },

    '& .image_slider': {
        transform: 'scale(1.02)',
        borderRadius: '8px',
        height: '100%',

        '& .swiper-pagination-bullet': {
            background: 'white'
        },

        '& .swiper-button-next , & .swiper-button-prev': {
            background: '#4F4A75',
            color: 'white',
            borderRadius: '6px',
            width: '22px',
            height: '22px',
            transition: 'all linear 0.1s',
            top: '70%',

            '&::after': {
                fontSize: '0.7rem',
                fontWeight: 'bold'
            }
        },

        '& .swiper-button-next': {
            left: '-30px'
        },

        '& .swiper-button-prev': {
            right: '-30px'
        },

        '&:hover': {
            '& .swiper-button-next': {
                left: '10px'
            },

            '& .swiper-button-prev': {
                right: '10px'
            }
        }
    },

    '& .card_image': {
        width: '100%',
        objectFit: 'cover',
        height: '100%'
    },

    '& .title': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: '10px',
        padding: '0 10px',
        marginTop: '20px',
        marginBottom: '20px',

        img: {
            width: '17px',
            height: 'auto',
            cursor: 'pointer'
        },

        p: {
            marginLeft: '15px',
            fontWeight: '400',
            fontSize: '0.9rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '210px',
            color: 'black'
        },

        div: {
            minWidth: 'max-content',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }
    },

    '& .position_added': {
        position: 'absolute',
        top: '160px',
        width: '100%',
        transform: 'scale(1.02)',
        zIndex: '5',
        background: '#0000009e',
        margin: '0',
        padding: '5px 10px',
        color: 'white',
        borderRadius: '8px',

        p: {
            color: 'white'
        }
    },

    '& .avatar_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px',

        '& .avatar': {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',

            '& .avatar_img': {
                width: '50px',
                height: '50px',
                objectFit: 'cover',
                borderRadius: '50px'
            },

            span: {
                borderRadius: '30px',
                padding: '4px 10px 1px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                lineHeight: '0',
                fontSize: '0.7rem',
                fontWeight: '400',

                img: {
                    width: '15px',
                    height: 'auto'
                },

                '&.yellow': {
                    border: `1px solid ${props.theme.palette.colors.yellow}`,
                    color: props.theme.palette.colors.dark.yellow,
                    marginBottom: '5px'
                },

                '&.blue': {
                    border: `1px solid ${props.theme.palette.colors.blue}`,
                    color: props.theme.palette.colors.dark.blue
                }
            }
        },

        '& .location_field': {
            span: {
                borderRadius: '30px',
                padding: '4px 10px 2px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                minWidth: 'max-content',
                fontSize: '0.8rem',
                fontWeight: '300',
                border: `1px solid ${props.theme.palette.colors.primary}`,
                color: props.theme.palette.colors.primary,
                boxShadow: `${props.theme.palette.colors.primary} 0px 0px 10px -4px`,
                marginTop: '5px',
                justifyContent: 'center'
            }
        },

        '& .location': {
            borderRadius: '30px',
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            lineHeight: '0',
            fontSize: '0.7rem',
            fontWeight: '400',
            border: `1px solid ${props.theme.palette.colors.text.secondary}`,
            boxShadow: '#000000 0px 0px 10px -4px',
            color: props.theme.palette.colors.text.secondary,

            img: {
                width: '15px',
                height: 'auto'
            }
        }
    },

    '& .price': {
        color: props.theme.palette.colors.text.primary,
        fontWeight: '300',
        fontSize: '0.8rem',
        marginLeft: '20px',
        gap: '4px',
        padding: '10px 10px',

        b: {
            color: props.theme.palette.colors.alert,
            fontWeight: '500',
            textDecoration: 'line-through'
        }
    },

    '& .options': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        margin: '0 10px',
        marginTop: '10px',
        padding: '5px 20px',
        borderRadius: '7px',
        color: 'black',

        div: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            flexDirection: 'column',
            fontWeight: '300',

            p: {
                fontSize: '0.8rem'
            },

            img: {
                width: '20px',
                height: 'auto'
            }
        }
    }
}));

export const CardCover = styled.div({
    position: 'absolute',
    top: '-1%',
    left: '-1.5%',
    width: '103%',
    height: '102%',
    borderRadius: 'inherit',
    zIndex: '5',
    background: 'rgb(0 0 0 / 67%)',
    backdropFilter: 'blur( 8px )',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '10px',

    p: {
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: '400'
    }
});
