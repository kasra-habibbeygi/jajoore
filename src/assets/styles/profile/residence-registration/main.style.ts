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
    }
});
