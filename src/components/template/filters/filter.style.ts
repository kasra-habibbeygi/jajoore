import styled from '@emotion/styled';

export const FilterField = styled.div(props => ({
    padding: '20px 0',
    background: '#F3F3F3',

    '& .main_field': {
        padding: '0 20px'
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

    '& .top_field': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },

    '& .right_field': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: '20px'
    },

    '& .left-field': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

        '& .support_btn': {
            background: 'white',
            padding: '5px 0',
            border: '1px solid #BBBBBB',
            borderRadius: '8px',
            color: 'black',
            minWidth: '45px',
            minHeight: '45px',
            position: 'relative',

            img: {
                width: '26px',
                height: 'auto'
            }
        },

        '& .notif_count': {
            position: 'absolute',
            right: '-6px',
            bottom: '-6px',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.6rem',
            background: props.theme.palette.colors.primary,
            width: '17px',
            height: '17px',
            color: 'white'
        }
    },

    '& .filter_field': {
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        marginTop: '20px'
    },
    '@media(max-width : 900px)': {
        '& .right_field': {
            gap: '10px'
        },

        '& .top_field': {
            gap: '10px'
        }
    }
}));
