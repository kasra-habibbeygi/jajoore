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

    '& .w-50': {
        width: '50%',
        padding: '15px 10px'
    },

    '& .w-100': {
        width: '100%',
        padding: '15px 10px'
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
    }
});
