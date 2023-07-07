import styled from '@emotion/styled';

export const MainField = styled.div({
    width: '90%',
    display: 'flex',
    gap: '20px',
    margin: '68px auto',
    '& .content': {
        width: 'calc(100% - 300px) ',
        minHeight: '100vh',
        border: '1px solid #BFBFBF',
        boxShadow: '0px 0px 5px #00000026',
        borderRadius: '20px',
        padding: '30px'
    }
});
