import styled from '@emotion/styled';

export const AsideMainField = styled.aside({
    position: 'relative',
    minWidth: '370px',
    maxWidth: '370px',

    '& .main_field': {
        position: 'sticky',
        boxShadow: '0 0 6px rgb(0, 0 , 0 , 0.10)',
        borderRadius: '8px',
        overflow: 'hidden',
        top: '20px'
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
        fontWeight: '300'
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
