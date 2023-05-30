import styled from '@emotion/styled';

export const MainField = styled.ul({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    listStyle: 'none',
    gap: '8px',
    marginBottom: '50px',

    img: {
        width: '100%',
        height: 'auto',
        objectFit: 'contain'
    },

    li: {
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        display: 'flex',

        '& .layout': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: '#0000008c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            button: {
                padding: '5px 15px',

                img: {
                    width: '25px',
                    position: 'relative',
                    top: '-2px'
                }
            }
        }
    }
});

export const HeaderField = styled.header({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    padding: '2px 10px',
    borderRadius: '8px',

    h3: {
        fontWeight: '300'
    },

    button: {
        padding: '0 10px',

        img: {
            position: 'relative',
            top: '-2px'
        }
    }
});
