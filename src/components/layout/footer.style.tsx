import styled from '@emotion/styled';

export const FooterMainField = styled.footer(props => ({
    '& .header': {
        backgroundColor: props.theme.palette.colors.primary,
        padding: '20px 0',
        borderRadius: '30px 30px 0 0',

        '& .container': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },

        ol: {
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',

            a: {
                color: 'white',
                fontWeight: '400'
            }
        },

        button: {
            a: {
                color: '#29A71A',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',

                img: {
                    width: '25px',
                    height: 'auto',
                    fontSize: '1rem'
                }
            }
        }
    },

    '& .copy_right': {
        textAlign: 'center',
        padding: '10px 0',
        marginTop: '20px',
        borderTop: `1px solid ${props.theme.palette.colors.lightGray}`
    },

    '& .main_content': {
        padding: '40px 0',
        display: 'flex',

        '& .w_max': {
            minWidth: 'max-content',

            img: {
                width: '110px',
                height: 'auto'
            }
        },

        '& .links_field': {
            width: '100%',

            h5: {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '1.3rem',
                color: props.theme.palette.colors.text.primary,

                span: {
                    display: 'block',
                    borderRadius: '50px',
                    width: '6px',
                    height: '6px',
                    border: '1px solid black'
                }
            },

            ul: {
                listStyle: 'none',
                paddingRight: '16px',
                marginTop: '15px',

                li: {
                    margin: '5px 0',

                    a: {
                        color: props.theme.palette.colors.text.secondary
                    }
                }
            }
        }
    },

    '& .social_media': {
        display: 'flex',
        gap: '20px',
        flexDirection: 'column',
        minWidth: '350px',
        marginLeft: '60px',

        '& .item_field': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            paddingRight: '100px',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            height: '58px',
            overflow: 'hidden',
            borderRadius: '8px',

            '& .path1': {
                position: 'absolute',
                right: '0'
            },

            '& .path2': {
                position: 'absolute',
                right: '12px',
                opacity: '0.5'
            },

            '& .path3': {
                position: 'absolute',
                right: '24px',
                opacity: '0.2'
            },

            '& .social_media_icon': {
                position: 'absolute',
                right: '15px',
                zIndex: '1',
                width: '30px',
                height: 'auto'
            },

            p: {
                color: props.theme.palette.colors.text.light,
                span: {
                    color: props.theme.palette.colors.primary,
                    fontWeight: '400'
                }
            },

            a: {
                position: 'absolute',
                left: '20px',
                display: 'flex',
                alignItems: 'center',

                img: {
                    width: '30px',
                    height: 'auto',
                    background: '#F4D1D1',
                    borderRadius: '520px',
                    padding: '4px'
                }
            }
        }
    }
}));
