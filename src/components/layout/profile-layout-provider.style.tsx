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
    }
});
