import styled from '@emotion/styled';

export const MainField = styled.div({
    margin: '50px 0',

    ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '25px 2%',

        li: {
            width: '31.3333%',

            img: {
                width: '30px',
                height: 'auto'
            },

            div: {
                width: 'max-content',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            },

            p: {
                fontWeight: '300'
            }
        },

        '& .removed': {
            position: 'relative',

            '&:after': {
                content: '""',
                position: 'absolute',
                left: '-10px',
                width: '110%',
                height: '1px',
                backgroundColor: '#FF0000'
            }
        }
    }
});
