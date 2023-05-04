import styled from '@emotion/styled';

export const ArticleCardField = styled.div({
    width: '100%',
    height: '200px',
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',

    img: {
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    },

    '& .info': {
        position: 'absolute',
        zIndex: '2',
        bottom: '0',
        right: '0',
        width: '100%',
        background: '#ffffffb3',
        padding: '10px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: '0.9rem'
    },

    '& .author_field': {
        position: 'absolute',
        top: '20px',
        right: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        img: {
            background: '#000000a8',
            borderRadius: '50px',
            position: 'absolute',
            right: '0px',
            width: '40px',
            height: '40px'
        },

        p: {
            background: '#ffffff8f',
            fontSize: '0.9rem',
            padding: '5px 50px 5px 10px',
            borderRadius: '70px'
        }
    }
});
