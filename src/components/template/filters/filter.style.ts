import styled from '@emotion/styled';

export const FilterField = styled.div(props => ({
    padding: '20px 0',
    background: '#F3F3F3',

    '& .main_field': {
        padding: '0 20px'
    },

    '& .panel_btn': {
        gap: '3px',
        background: 'white',
        padding: '5px 13px',
        border: '1px solid #BBBBBB',
        color: 'black',

        img: {
            width: '24px',
            height: 'auto'
        },

        '& .avatar': {
            background: '#6c6c6c',
            borderRadius: '50px',
            width: '30px',
            height: '30px'
        }
    },

    '& .top_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },

    '& .right_field': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '10px'
    },

    '& .left_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

        '& .support_btn': {
            background: 'white',
            padding: '5px 0',
            border: '1px solid #BBBBBB',
            borderRadius: '8px',
            color: 'black',
            minWidth: '45px',
            minHeight: '45px',
            position: 'relative',

            img: {
                width: '26px',
                height: 'auto'
            }
        },

        '& .notif_count': {
            position: 'absolute',
            right: '-6px',
            bottom: '-6px',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.6rem',
            background: props.theme.palette.colors.primary,
            width: '17px',
            height: '17px',
            color: 'white'
        }
    },

    '& .filter_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        marginTop: '20px'
    },

    '& .all_filter_list': {
        display: 'none'
    },

    '& .mobile_search': {
        display: 'none'
    },

    '@media(max-width : 1600px)': {
        '& .rules_filter': {
            display: 'none'
        },

        '& .facilities_filter': {
            display: 'none'
        },
        '& .all_filter_list': {
            display: 'block'
        }
    },

    '@media(max-width : 1420px)': {
        '& .type_filter': {
            display: 'none'
        },

        '& .lease_filter': {
            display: 'none'
        }
    },

    '@media(max-width : 1200px)': {
        '& .area_filter': {
            display: 'none'
        },

        '& .property_filter': {
            display: 'none'
        }
    },

    '@media(max-width : 900px)': {
        '& .right_field': {
            gap: '10px'
        },

        '& .top_field': {
            gap: '10px'
        },

        '& .room_filter': {
            display: 'none'
        },

        '& .price_filter': {
            display: 'none'
        }
    },

    '@media(max-width : 700px)': {
        '& .mobile_search': {
            display: 'block'
        }
    },

    '@media(max-width : 500px)': {
        '& .person_filter': {
            display: 'none'
        },

        '& .left_field': {
            gap: '5px',

            '& .support_btn': {
                color: 'black',
                minWidth: '40px',
                minHeight: '40px',

                img: {
                    width: '20px'
                }
            }
        },

        '& .panel_btn': {
            padding: '5px 7px',
            minHeight: '40px',

            img: {
                width: '20px',
                height: 'auto'
            },

            '& .avatar': {
                width: '24px',
                height: '24px'
            }
        }
    }
}));

export const Layout = styled.div<{ status: boolean }>(props => ({
    position: 'fixed',
    top: '0',
    left: '0',
    background: '#0000008c',
    zIndex: '1020',
    cursor: 'pointer',
    width: '100%',
    height: '100vh',
    opacity: props.status ? '1' : '0',
    pointerEvents: props.status ? 'initial' : 'none',
    transition: 'all linear 0.2s',
    display: 'none',

    '@media(max-width : 650px)': {
        display: 'block'
    }
}));
