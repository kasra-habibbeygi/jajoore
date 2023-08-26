import styled from '@emotion/styled';

export const ReservationDetailsStyle = styled.div(props => ({
    '& .titleBox': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        h2: {
            fontWeight: '300'
        }
    },

    '& .main_content': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2 , 1fr)',
        columnGap: '40px',
        margin: '30px 0px'
    },

    '& .right_box': {
        '& .advertising_title': {
            display: 'flex',
            gap: '20px',

            p: {
                fontSize: '1.1rem !important'
            },

            '& .botton_field': {
                background: '#05857C',
                color: '#fff',
                padding: '3px 7px',
                borderRadius: '5px',
                fontSize: '.9rem'
            }
        },

        '& .details': {
            display: 'grid',
            gridTemplateColumns: 'repeat(2 , 1fr)',
            marginTop: '40px',

            section: {
                display: 'flex',
                gap: '10px',
                marginBottom: '40px',
                alignItems: 'center'
            }
        },

        '& .price': {
            section: {
                display: 'flex',
                gap: '10px',
                marginBottom: '20px',
                alignItems: 'center'
            }
        },

        '& .alert': {
            padding: '10px 30px',
            border: `1px solid ${props.theme.palette.colors.yellow}`,
            borderRadius: '10px',
            textAlign: 'justify',
            color: props.theme.palette.colors.yellow
        }
    },

    '& .left_box': {
        img: {
            width: '100%',
            borderRadius: '10px'
        },

        '& .btn_box': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',

            '& .code': {
                padding: '10px 15px',
                borderRadius: '5px',
                border: `1px solid ${props.theme.palette.colors.text.secondary}`,
                width: '100%',
                textAlign: 'center'
            },

            '& .status': {
                borderRadius: '5px',
                padding: '10px 15px',
                color: 'white',
                width: '100%',
                textAlign: 'center',

                '&.red_status': {
                    background: props.theme.palette.colors.primary
                },

                '&.greenStatus': {
                    background: props.theme.palette.colors.green
                }
            }
        }
    },

    '& .user_details': {
        width: '100%',
        borderRadius: '10px',
        boxShadow: '0px 0px 5px #00000026',
        border: '1px solid #BFBFBF',
        display: 'grid',
        justifyItems: 'center',
        gridTemplateColumns: 'repeat(2 , 1fr)',
        padding: '40px',

        '& .right_box_user_details': {
            '& .user': {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                gap: '7px',
                img: {
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    boxShadow: '0px 0px 5px #00000026',
                    border: '1px solid #BFBFBF'
                }
            },

            '& .time': {
                display: 'flex',
                gap: '7px',
                marginBottom: '20px',
                alignItems: 'center'
            },

            '& .time_box': {
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
            }
        },

        '& .left_box_user_details': {
            '& .reservation_number': {
                background: props.theme.palette.colors.lightGray,
                width: 'max-content',
                border: '1px solid #BFBFBF',
                borderRadius: '5px',
                padding: '5px 20px',
                marginBottom: '20px'
            },

            '& .time': {
                display: 'flex',
                gap: '7px',
                marginBottom: '20px',
                alignItems: 'center'
            },

            '& .guest': {
                display: 'flex',
                gap: '7px',
                marginBottom: '20px',
                alignItems: 'center'
            }
        }
    }
}));
