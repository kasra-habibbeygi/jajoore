import styled from '@emotion/styled';

export const ModalField = styled.div(props => ({
    '& .MuiPaper-elevation': {
        paddingTop: '30px'
    },

    h3: {
        fontWeight: '400',
        fontSize: '1.3rem',
        textAlign: 'center'
    },

    '& .MuiCheckbox-root': {
        color: `${props.theme.palette.colors.green} !important`
    },

    '& .checked_all': {
        padding: '0 25px'
    },

    '& .MuiFormControlLabel-root': {
        margin: '0',
        direction: 'ltr',

        span: {
            fontFamily: 'main',
            fontWeight: '300',
            fontSize: '0.9rem'
        }
    },

    ul: {
        listStyle: 'none',
        maxHeight: '350px',
        overflow: 'auto',

        li: {
            padding: '7px 20px',
            borderBottom: '1px solid #ebebeb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            '& .right_field': {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',

                p: {
                    fontWeight: '400',
                    fontSize: '1.1rem'
                }
            }
        }
    },

    '& .button_group': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        padding: '30px 20px',
        boxShadow: 'rgb(0 0 0 / 14%) 0px -7px 28px',

        button: {
            width: '100%'
        }
    }
}));
