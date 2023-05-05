import styled from '@emotion/styled';

interface AsideFieldTypes {
    status: boolean;
}

interface AsideLayoutTypes {
    status: boolean;
}

export const AsideField = styled.div<AsideFieldTypes>(props => ({
    width: '300px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    right: props.status ? '0' : '-300px',
    backgroundColor: 'white',
    padding: '30px 20px 10px 20px',
    transition: 'all 0.8s cubic-bezier(0, 0, 0.2, 1.11) 0s',
    zIndex: '100',

    '& .header': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

        '& .avatar_img': {
            width: '80px',
            height: 'auto'
        }
    },

    '& .seprator': {
        width: '80%',
        height: '1px',
        background: '#DCDCDC',
        borderRadius: '5px',
        display: 'flex',
        margin: '30px auto 30px auto'
    },

    '& .main_list_field': {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        height: 'calc(100% - 160px)',
        overflow: 'auto',

        a: {
            display: 'flex',
            color: 'black',
            gap: '10px',
            borderRadius: '8px',
            padding: '10px',

            img: {
                width: '20px',
                height: 'auto'
            },

            '&:hover': {
                background: '#f1f1f1'
            }
        }
    }
}));

export const AsideLayout = styled.div<AsideLayoutTypes>(props => ({
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    background: '#00000091',
    opacity: props.status ? '1' : '0',
    pointerEvents: props.status ? 'initial' : 'none',
    transition: 'all 0.8s cubic-bezier(0, 0, 0.2, 1.11) 0s',
    zIndex: '90',
    cursor: 'pointer'
}));
