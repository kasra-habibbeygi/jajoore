import styled from '@emotion/styled';

export const MainField = styled.div({
    marginTop: '50px',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',

    h3: {
        fontWeight: '300',
        width: '100%'
    },

    '& .w-25': {
        width: '25%'
    },

    '& .w-50': {
        width: '50%',
        padding: '15px 10px'
    },

    '& .w-100': {
        width: '100%',
        padding: '15px 10px'
    },

    '& .p-0': {
        padding: '0'
    },

    '& .alert_field': {
        width: '100%',
        padding: '20px',
        backgroundColor: '#FAEAEA',
        color: '#970C0C',
        borderRadius: '8px',
        direction: 'rtl',

        h4: {
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '10px',
            fontWeight: '400',

            img: {
                width: '20px',
                height: 'auto',
                filter: 'invert(11%) sepia(53%) saturate(5898%) hue-rotate(351deg) brightness(96%) contrast(102%)'
            }
        }
    },

    '& .map_field': {
        marginTop: '20px',

        h3: {
            fontWeight: '300',
            fontSize: '1rem'
        }
    },

    '& .header': {
        padding: '6px',
        width: '100%',
        fontSize: '1rem',
        textAlign: 'center',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        marginTop: '20px',
        marginBottom: '10px',
        fontWeight: '400'
    },

    '& .MuiFormControlLabel-root': {
        direction: 'ltr',
        margin: '0 !important'
    },

    '& .check_box_helper': {
        fontSize: '0.9rem',
        color: '#767676',
        marginBottom: '15px',
        display: 'block',
        marginRight: '38px'
    },

    '& .package_field': {
        width: '100%',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #AFAFAF',
        marginTop: '20px',
        cursor: 'pointer',

        img: {
            width: '40px',
            height: 'auto'
        },

        '& .package_header': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '15px',

            '& .right_field': {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: '400'
            },

            p: {
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }
        },

        '& .radio': {
            width: '15px',
            height: '15px',
            borderRadius: '50px',
            background: 'white',
            border: '2px solid #BEBEBE',
            display: 'inline-block'
        },

        '&.active': {
            border: '1px solid #1B8222',

            '& .radio': {
                background: '#1B8222',
                border: 'none'
            }
        },

        '& .package_content': {
            marginRight: '51px'
        },

        '& .package_content_danger': {
            marginRight: '51px',
            marginTop: '10px',
            color: '#A20000'
        }
    },

    '& .invoice_field': {
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: '8px',
        padding: '10px',
        width: '100%',
        marginTop: '20px',

        '& .invoice_header': {
            padding: '10px',
            background: '#FFF5F5',
            borderRadius: '8px',
            border: '1px dashed #A7A5A5',
            marginBottom: '10px',

            div: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '10px'
            },

            h4: {
                fontWeight: '400'
            }
        },

        '& .final_result': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            '&.special': {
                marginBottom: '15px',
                paddingBottom: '15px',
                borderBottom: '1px dashed #707070'
            }
        }
    }
});
