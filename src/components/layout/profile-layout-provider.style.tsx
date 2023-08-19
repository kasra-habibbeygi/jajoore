import styled from '@emotion/styled';

export const MainField = styled.div({
    width: '100%',
    display: 'flex',
    gap: '20px',
    padding: '50px 0',

    '& .content': {
        width: 'calc(100% - 300px) ',
        border: '1px solid #BFBFBF',
        boxShadow: '0px 0px 5px #00000026',
        borderRadius: '20px',
        padding: '30px',
        height: 'max-content'
    },

    '& .panel_btn': {
        width: 'max-content',
        padding: '5px 13px',
        border: '1px solid #BBBBBB',
        display: 'none',

        '& .avatar': {
            background: '#6c6c6c',
            borderRadius: '50px',
            width: '30px',
            height: '30px'
        }
    },

    '@media(max-width : 1100px)': {
        flexDirection: 'column',

        '& .content': {
            width: '100%'
        },

        '& .panel_btn': {
            display: 'flex'
        }
    }
});
