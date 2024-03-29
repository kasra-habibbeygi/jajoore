import styled from '@emotion/styled';

export const DropdownField = styled.div(props => ({
    position: 'relative',

    '& .checkbox_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        overflow: 'auto',
        paddingLeft: '10px'
    },

    '&.rules_filter': {
        '& .row': {
            width: '100%'
        }
    },

    '&.all_filter_list': {
        '& .main_filter_field': {
            padding: '0',
            paddingTop: '10px'
        },

        '& .footer': {
            padding: '13px',
            paddingTop: '0'
        },

        '& .checkbox_field': {
            overflow: 'unset'
        }
    },

    '& .row': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '45%',
        borderBottom: '1px solid #e3e3e3',
        transition: 'all linear 0.1s',
        padding: '0 10px',

        '&:hover': {
            background: '#F5F7F9'
        },

        '& .MuiFormControlLabel-root': {
            justifyContent: 'space-between',
            margin: '0'
        }
    },

    '& .counter_row': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '10px'
    },

    '& .full_width': {
        width: '100%'
    },

    '& .counter': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        width: '90px',

        svg: {
            width: '20px'
        },

        '& .green': {
            color: props.theme.palette.colors.green,
            cursor: 'pointer'
        },

        '& .red': {
            color: props.theme.palette.colors.primary,
            cursor: 'pointer'
        }
    },

    p: {
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',

        span: {
            width: '5px',
            height: '5px',
            background: props.theme.palette.colors.primary,
            display: 'block',
            borderRadius: '5px',
            position: 'relative',
            top: '-1px'
        }
    },
    '& .slider_field': {
        padding: ' 0 20px',

        '& .MuiSlider-rail': {
            color: '#BAC7D5'
        },

        '& .MuiSlider-track': {
            color: props.theme.palette.colors.primary
        },

        '& .MuiSlider-thumb': {
            color: props.theme.palette.colors.primary,
            border: '11px solid white',
            boxShadow: 'rgba(37, 42, 49, 0.16) 0px 0px 2px 0px, rgba(37, 42, 49, 0.12) 0px 1px 4px 0px',
            width: '30px',
            height: '30px',

            '&:hover': {
                boxShadow: 'rgba(37, 42, 49, 0.16) 0px 1px 4px 0px, rgba(37, 42, 49, 0.12) 0px 4px 8px 0px'
            }
        },

        '& .MuiSlider-valueLabel': {
            background: '#ffffff',
            color: '#6a6a6a',
            fontWeight: '300',
            fontFamily: 'main',
            boxShadow: 'rgba(37, 42, 49, 0.16) 0px 0px 2px 0px, rgba(37, 42, 49, 0.12) 0px 1px 4px 0px'
        }
    },

    '& .form_group': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginTop: '10px',

        input: {
            textAlign: 'left',
            paddingLeft: '50px'
        },

        '& .form_field': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',

            p: {
                position: 'absolute',
                left: '8px',
                bottom: '5px',
                fontSize: '0.9rem',
                color: '#5F738C'
            }
        }
    },

    '& .margin_top': {
        marginTop: '40px',

        '&:first-child': {
            marginTop: '0'
        }
    },

    '& .body_scrolling': {
        maxHeight: '400px',
        overflowY: 'auto',
        padding: '0 13px',
        paddingTop: '13px'
    },

    '@media(max-width : 650px)': {
        width: '100%'
    }
}));

export const AllFiltersField = styled.div<{ status: boolean }>(props => ({
    '@media(max-width : 650px)': {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        height: '600px',
        left: '0',
        zIndex: '1020',
        pointerEvents: props.status ? 'initial' : 'none',

        '& .main_filter_field': {
            width: '100%',
            top: props.status ? '45px' : '600px',
            transition: 'all 0.6s cubic-bezier(0, 0, 0.2, 1.11) 0s',
            opacity: '1',

            '& .body_scrolling': {
                maxHeight: '483px'
            }
        }
    }
}));

export const BodyLayout = styled.div<{ status: boolean }>(props => ({
    position: 'fixed',
    top: '0',
    left: '0',
    background: '#0000008c',
    zIndex: '10',
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
