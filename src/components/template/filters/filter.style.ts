import styled from '@emotion/styled';

export const FilterField = styled.div({
    padding: '20px 0',
    background: '#F3F3F3',

    '& .container': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    '& .panel_btn': {
        gap: '3px',
        background: 'white',
        padding: '5px 13px',
        border: '1px solid #BBBBBB',
        borderRadius: '8px',
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

    '& .right_field': {
        width: '100%',

        '& .top_field': {
            width: '100%'
        }
    },

    '& .left_field': {
        button: {
            background: 'white',
            padding: '5px 0',
            border: '1px solid #BBBBBB',
            borderRadius: '8px',
            color: 'black',
            minWidth: '50px',
            minHeight: '50px',

            img: {
                width: '30px',
                height: 'auto'
            }
        }
    },

    '& .top_field': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '20px',

        '& .form_group': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            width: '600px',

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
                borderRadius: '10px',
                height: '40px',
                border: '1px solid #BBBBBB',
                padding: '14px',
                color: '#525252',
                fontWeight: '300',
                fontSize: '0.9rem',

                '&::placeholder': {
                    color: '#adadad',
                    fontWeight: '300',
                    fontSize: '0.9rem'
                }
            }
        }
    },

    '& .filter_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginTop: '20px'
    }
});
