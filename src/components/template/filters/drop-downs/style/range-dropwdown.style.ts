import styled from '@emotion/styled';

export const RangeField = styled.div(props => ({
    position: 'relative',

    '& .form_group': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginTop: '10px',

        input: {
            textAlign: 'left',
            paddingLeft: '50px'
        },

        '& .form_field': {
            display: 'flex',
            alignItems: 'center',
            position: 'relative',

            p: {
                position: 'absolute',
                left: '8px',
                bottom: '5px',
                fontSize: '0.9rem',
                color: '#5F738C'
            }
        }
    },

    '& .slider_field': {
        padding: ' 0 20px',

        '& .MuiSlider-rail': {
            color: '#BAC7D5'
        },

        '& .MuiSlider-track': {
            color: props.theme.palette.colors.primary
        },

        '& .MuiSlider-thumb': {
            color: props.theme.palette.colors.primary,
            border: '11px solid white',
            boxShadow: 'rgba(37, 42, 49, 0.16) 0px 0px 2px 0px, rgba(37, 42, 49, 0.12) 0px 1px 4px 0px',
            width: '30px',
            height: '30px',

            '&:hover': {
                boxShadow: 'rgba(37, 42, 49, 0.16) 0px 1px 4px 0px, rgba(37, 42, 49, 0.12) 0px 4px 8px 0px'
            }
        },

        '& .MuiSlider-valueLabel': {
            background: '#ffffff',
            color: '#6a6a6a',
            fontWeight: '300',
            fontFamily: 'main',
            boxShadow: 'rgba(37, 42, 49, 0.16) 0px 0px 2px 0px, rgba(37, 42, 49, 0.12) 0px 1px 4px 0px'
        }
    }
}));
