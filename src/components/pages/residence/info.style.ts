import styled from '@emotion/styled';

export const MainField = styled.div<any>(props => ({
    '& .pills_field': {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        gap: '5px',
        width: 'max-content !important',

        span: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'flex-start',
            width: '100px',
            overflow: 'hidden',
            borderRadius: '50px',
            padding: '2px 6.5px',
            height: '23px',
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

    '& .header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '15px',

        '& .right_field': {
            h1: {
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                color: 'black',
                fontSize: '1.4rem',
                fontWeight: '400',

                span: {
                    backgroundColor: props.theme.palette.colors.primary,
                    color: 'white',
                    borderRadius: '50px',
                    padding: '1px 20px',
                    paddingTop: '5px',
                    fontSize: '1rem',
                    fontWeight: '300'
                }
            },

            '& .location': {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'black',

                img: {
                    width: '15px',
                    height: 'auto'
                }
            }
        },

        '& .left_field': {
            display: 'flex',
            alignItems: 'center',
            gap: '20px',

            img: {
                width: '20px',
                height: 'auto',
                cursor: 'pointer'
            }
        }
    },

    '& .midle_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20px',

        div: {
            width: '300px'
        },

        '& .code': {
            border: `1px solid ${props.theme.palette.colors.primary}`,
            padding: '7px 15px',
            borderRadius: '15px',
            color: props.theme.palette.colors.primary,
            minWidth: 'max-content',
            width: 'max-content',
            fontSize: '1.2rem'
        }
    },

    '& .details': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginBottom: '40px',
        marginTop: '20px',

        div: {
            width: '100px',
            borderRadius: '5px',
            boxShadow: '0 0 4px 1px rgb(0 0 0 / 9%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '5px',
            fontSize: '0.9rem',

            img: {
                width: '25px',
                height: 'auto'
            }
        }
    },

    '@media(max-width : 650px)': {
        '& .select_field': {
            display: 'none'
        },

        '& .header': {
            flexDirection: 'column-reverse',
            alignItems: 'flex-end',

            '& .right_field': {
                width: '100%',

                h1: {
                    justifyContent: 'space-between'
                }
            }
        },

        '& .details': {
            gap: '0',
            flexWrap: 'nowrap',
            boxShadow: '0 0 4px 1px rgb(0 0 0 / 9%)',
            borderRadius: '5px',
            marginTop: '40px',
            justifyContent: 'space-between',
            padding: '0 10px',

            div: {
                boxShadow: 'none',
                width: 'max-content'
            }
        }
    },

    '@media(max-width : 500px)': {
        '& .header': {
            '& .right_field': {
                h1: {
                    fontSize: '1.1rem'
                }
            }
        },

        '& .midle_field .code': {
            fontSize: '1rem'
        },

        '& .details': {
            flexWrap: 'wrap',

            div: {
                boxShadow: 'none',
                width: '33.3%'
            }
        }
    }
}));
