import styled from '@emotion/styled';

export const ModalField = styled.div({
    '& .MuiPaper-elevation': {
        paddingTop: '30px'
    },

    h3: {
        fontWeight: '400',
        fontSize: '1.3rem',
        textAlign: 'center'
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

                h3: {
                    fontWeight: '400',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',

                    span: {
                        color: ' #424242',
                        fontSize: '0.8rem',
                        fontWeight: '200'
                    }
                }
            },

            img: {
                width: '50px',
                height: '50px',
                borderRadius: '8px',
                objectFit: 'cover'
            }
        }
    }
});
