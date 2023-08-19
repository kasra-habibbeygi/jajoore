import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '20px',

    '& .main_card_field': {
        width: '33.33%',
        padding: '10px',

        '& .img_field': {
            position: 'relative',
            borderRadius: '8px',
            transform: 'scale(1.02)',
            overflow: 'hidden',
            height: '200px',

            '& .main_img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px'
            },

            '& .delete_icon': {
                padding: '5px',
                width: '30px',
                minHeight: '30px',
                position: 'absolute',
                top: '15px',
                left: '15px',

                img: {
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: '20px',
                    height: 'auto'
                }
            },

            '& .move_icon': {
                padding: '5px',
                width: '30px',
                minHeight: '30px',
                position: 'absolute',
                bottom: '15px',
                left: '15px',

                img: {
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: '20px',
                    height: 'auto'
                }
            }
        },

        '& .body': {
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            borderRadius: '8px',
            position: 'relative'
        }
    },

    '& .number_field': {
        fontSize: '1.2rem',
        position: 'absolute',
        top: '15px',
        right: '15px'
    },

    '& .number': {
        width: '30px',
        height: '30px',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50px',
        paddingTop: '5px',
        position: 'relative',
        zIndex: '2'
    },

    '& .title': {
        zIndex: '1',
        padding: '0 20px',
        paddingRight: '30px',
        borderRadius: '50px',
        backgroundColor: props.theme.palette.colors.yellow,
        fontSize: '0.9rem',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '0',
        position: 'absolute',
        right: '7px',
        width: 'max-content'
    },

    '& .input_field': {
        padding: '15px'
    }
}));
