import styled from '@emotion/styled';

export const ModalField = styled.aside({
    '& .MuiPaper-elevation': {
        background: 'transparent'
    },

    '& .main_field': {
        boxShadow: '0 0 6px rgb(0, 0 , 0 , 0.10)',
        borderRadius: '8px',
        overflow: 'hidden',
        top: '20px',
        backgroundColor: 'white',
        direction: 'rtl'
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#555555',
        color: 'white',
        padding: '10px',
        fontSize: '0.9rem',

        '& .discount': {
            textDecoration: 'line-through',
            fontSize: '0.8rem'
        },

        '& .money_unit': {
            fontSize: '0.75rem'
        },

        div: {
            display: 'flex',
            gap: '5px',
            alignItems: 'center'
        }
    },

    '& .content': {
        padding: '15px'
    },

    '& .avatar_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',

        div: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.9rem',

            img: {
                width: '60px',
                height: '60px',
                borderRadius: '50px'
            }
        },

        button: {
            padding: '0px 5px',
            fontSize: '0.8rem',
            borderColor: '#707070 !important',
            minHeight: '30px'
        }
    },

    '& .tip': {
        fontSize: '0.9rem',
        marginBottom: '20px',
        marginTop: '10px'
    },

    '& .answer_field': {
        fontWeight: '300',
        textAlign: 'right'
    },

    '& .button_group': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginTop: '15px',

        button: {
            width: '100%',
            padding: '5px',
            fontSize: '0.9rem',

            img: {
                width: '25px',
                height: 'auto'
            }
        },

        '& .blue_one': {
            borderColor: '#2686CC !important',
            color: '#41A5EE !important'
        }
    }
});

export const DetailsField = styled.div(props => ({
    margin: '0 10px',
    marginTop: '10px',
    paddingBottom: '20px',
    borderBottom: '1px solid #E9E9E9',

    '& .title': {
        fontSize: '0.9rem',
        marginBottom: '5px'
    },

    '& .discount_link': {
        color: '#0066BF',
        cursor: 'pointer',
        marginTop: '15px',
        textAlign: 'right'
    },

    '& .rules': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',

        div: {
            width: 'max-content !important',

            label: {
                marginRight: '0'
            }
        },

        p: {
            marginRight: '15px',
            fontSize: '0.9rem',
            marginLeft: '10px'
        },

        a: {
            color: props.theme.palette.colors.primary,
            fontSize: '0.9rem'
        }
    },

    '& .submit_btn': {
        width: '100%'
    }
}));

export const InvoiceField = styled.div({
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius: '8px',
    padding: '10px',
    marginTop: '20px',

    '& .header_box': {
        border: '1px dashed #A7A5A5',
        background: '#FFF5F5',
        borderRadius: '8px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',

        '& .row': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            p: {
                fontSize: '0.8rem'
            }
        }
    },

    '& .invoice_main_field': {
        marginTop: '20px',

        '& .row': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px dashed #787878',
            paddingBottom: '10px',
            marginBottom: '10px',

            '&:last-of-type': {
                borderBottom: 'none',
                paddingBottom: '0',
                marginBottom: '0'
            },

            p: {
                fontSize: '0.8rem'
            }
        }
    }
});
