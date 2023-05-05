import styled from '@emotion/styled';

export const DoubleCol = styled.div({
    width: '100%',
    display: 'flex',
    gap: '20px',
    margin: '50px 0',

    '& .content_field': {
        width: 'calc(100% - 300px)',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        borderRadius: '5px'
    },

    '& .aside': {
        width: '300px',

        '& .symbol_field': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            img: {
                width: '110px',
                height: 'auto'
            }
        }
    },

    '& .instant_booking_field': {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    }
});
