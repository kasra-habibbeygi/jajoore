import styled from '@emotion/styled';

export const MainCardField = styled.div(props => ({
    width: '350px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    paddingBottom: '15px',
    borderRadius: '8px',

    '& .pills_field': {
        position: 'absolute',
        top: '5px',
        right: '5px',
        zIndex: '5',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '5px',

        span: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'flex-start',
            width: '30px',
            overflow: 'hidden',
            borderRadius: '50px',
            padding: '2px 6px',
            position: 'absolute',
            top: '0',
            transition: 'all linear 0.2s',

            '&:hover': {
                width: '110px'
            },

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
                right: '0',
                zIndex: '4',

                img: {
                    minWidth: '23px !important',
                    width: '23px'
                }
            },
            '&.yellow_light': {
                background: props.theme.palette.colors.light.yellow,
                zIndex: '3',
                right: '40px'
            },
            '&.red': {
                background: props.theme.palette.colors.primary,
                color: 'white',
                zIndex: '2',
                right: '80px'
            },
            '&.green': {
                background: '#5E986F',
                color: 'white',
                zIndex: '1',
                right: '120px'
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

        p: {
            background: '#0000006b',
            color: 'white',
            fontSize: '0.9rem',
            padding: '2px 0 0 9px',
            fontWeight: '500',
            width: '100px',
            textAlign: 'left'
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
            right: '-22px',
            paddingTop: '4px'
        }
    },

    '& .vip_field': {
        position: 'absolute',
        top: '5px',
        left: '5px',
        zIndex: '5',
        background: props.theme.palette.colors.primary,
        borderRadius: '50px',
        padding: '7px 2px 2px 2px',
        color: 'white',
        width: '60px',
        textAlign: 'center',
        fontSize: '0.9rem',
        fontWeight: '300',
        boxShadow: 'rgb(0 0 0 / 22%) 0px 3px 8px'
    },

    '& .image_field': {
        height: '230px',
        position: 'relative'
    },

    '& .swiper-initialized': {
        transform: 'scale(1.02)',
        borderRadius: '8px',
        height: '100%',

        '& .swiper-pagination-bullet': {
            background: 'white'
        }
    },

    '& .swiper-button-next , & .swiper-button-prev': {
        background: '#4F4A75',
        color: 'white',
        borderRadius: '10px',
        width: '30px',
        height: '30px',

        '&::after': {
            fontSize: '1rem',
            fontWeight: 'bold'
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
        padding: '0 20px',
        marginTop: '20px',

        img: {
            width: '20px',
            height: 'auto',
            cursor: 'pointer'
        },

        p: {
            marginLeft: '15px',
            fontWeight: '400'
        },

        div: {
            minWidth: 'max-content',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }
    },

    '& .avatar_field': {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '10px 20px',

        '& .avatar': {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            '& .avatar_img': {
                width: '60px',
                height: '60px',
                objectFit: 'cover',
                borderRadius: '50px',
                border: `1px solid ${props.theme.palette.colors.dark.blue}`
            },

            span: {
                borderRadius: '30px',
                padding: '5px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                lineHeight: '0',
                fontSize: '0.8rem',
                fontWeight: '400',

                img: {
                    width: '15px',
                    height: 'auto'
                },

                '&.yellow': {
                    border: `1px solid ${props.theme.palette.colors.yellow}`,
                    color: props.theme.palette.colors.dark.yellow,
                    marginBottom: '10px'
                },

                '&.blue': {
                    border: `1px solid ${props.theme.palette.colors.blue}`,
                    color: props.theme.palette.colors.dark.blue
                }
            }
        },

        '& .location': {
            borderRadius: '30px',
            padding: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            lineHeight: '0',
            fontSize: '0.8rem',
            fontWeight: '400',
            border: `1px solid ${props.theme.palette.colors.text.secondary}`,
            color: props.theme.palette.colors.text.secondary,

            img: {
                width: '15px',
                height: 'auto'
            }
        }
    },

    '& .price': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',

        p: {
            color: props.theme.palette.colors.text.primary,
            fontWeight: '500',
            fontSize: '0.9rem',

            b: {
                color: props.theme.palette.colors.alert,
                fontWeight: '500',
                textDecoration: 'line-through'
            }
        },

        span: {
            borderRadius: '30px',
            padding: '5px 10px 3px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            minWidth: 'max-content',
            fontSize: '0.8rem',
            fontWeight: '400',
            border: `1px solid ${props.theme.palette.colors.primary}`,
            color: props.theme.palette.colors.primary,
            boxShadow: `${props.theme.palette.colors.primary} 0px 0px 10px -4px`
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

        div: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            flexDirection: 'column',
            fontWeight: '300',

            p: {
                fontSize: '0.9rem'
            },

            img: {
                width: '25px',
                height: 'auto'
            }
        }
    }
}));
