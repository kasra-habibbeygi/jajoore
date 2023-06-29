import styled from '@emotion/styled';

interface SearchBoxFieldType {
    status: boolean;
    mobileMode: boolean;
    mode: string;
    inputValue: string;
}

export const SearchBoxField = styled.div<SearchBoxFieldType>(props => ({
    width: '100%',

    '& .content': {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        width: '600px'
    },

    '& .search_icon': {
        position: 'absolute',
        left: '1px',
        top: '1px',
        width: '40px',
        height: '38px',
        background: 'white',
        borderRadius: '10px',
        padding: '10px',
        cursor: 'pointer'
    },

    input: {
        width: '100%',
        height: '40px',
        padding: '14px',
        fontSize: '0.9rem',
        borderRadius: '10px !important',

        '&::placeholder': {
            color: '#adadad'
        }
    },

    '& .search_box_dropdown': {
        width: '100%',
        background: 'white',
        border: '1px solid #D5D5D5',
        borderRadius: '12px',
        padding: '20px',
        position: props.mode === 'mobile' ? 'unset' : 'absolute',
        right: '0',
        top: props.status ? '50px' : '40px',
        zIndex: '1100',
        opacity: props.status ? '1' : '0',
        pointerEvents: props.status ? 'initial' : 'none',
        transition: 'all linear 0.2s',

        '& .top_rate_field': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            transition: 'all linear 0.2s',
            maxHeight: props.inputValue !== '' ? '0' : '80px',
            overflow: props.inputValue !== '' ? 'hidden' : 'unset',

            span: {
                color: props.theme.palette.colors.primary,
                border: `1px solid ${props.theme.palette.colors.primary}`,
                fontSize: '0.9rem',
                padding: '2px 10px',
                borderRadius: '20px',
                boxShadow: '#C12026 0px 0px 10px -4px',
                cursor: 'pointer'
            },

            b: {
                fontWeight: '300',
                fontSize: '0.9rem'
            }
        },
        '& .button_field': {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '30px',

            '& .seprator': {
                width: '1px',
                height: '20px',
                backgroundColor: '#dfdfdf'
            }
        },

        '& .search_field': {
            width: '100%',
            overflow: 'auto',
            maxHeight: '200px',
            padding: '0 10px',
            marginTop: '10px',
            transition: 'all linear 0.2s',

            '&.hidden': {
                maxHeight: '0'
            },

            '& .row': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #ededed',
                padding: '10px',
                transition: 'all linear 0.2s',
                cursor: 'pointer',

                '&:last-of-type': {
                    borderBottom: 'none'
                },

                '&:hover': {
                    background: '#f1f1f1'
                }
            }
        }
    },

    '& .mobile_search': {
        display: 'none !important'
    },

    '@media(max-width : 900px)': {
        '& .content': {
            width: '100%'
        }
    },

    '@media(max-width : 700px)': {
        '&.mobile_search': {
            position: 'fixed',
            left: '0',
            padding: '20px',
            background: 'white',
            borderRadius: '0 0 20px 20px',
            zIndex: '1030',
            top: props.mobileMode ? '0' : '-250px',
            transition: 'all 0.8s cubic-bezier(0, 0, 0.2, 1.11) 0s',

            '& .content': {
                flexDirection: 'column',
                gap: '20px'
            }
        },

        '& .search_box_dropdown': {
            display: props.mode === 'mobile' ? 'block' : 'none',
            opacity: '1',
            pointerEvents: 'initial'
        }
    }
}));
