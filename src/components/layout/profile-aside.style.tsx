import styled from '@emotion/styled';

export const ProfileAsideStyle = styled.aside<any>(props => ({
    width: '300px',
    border: '1px solid #BFBFBF',
    boxShadow: '0px 0px 6px #00000026',
    borderRadius: '20px',
    padding: '20px',
    height: 'max-content',

    ul: {
        '& .userInfoLi': {
            width: '100%',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',

            button: {
                width: '100%',
                marginBottom: '20px'
            },

            img: {
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                border: '1px solid #BFBFBF'
            },

            '& .role': {
                background: '#062251',
                color: '#fff',
                padding: '3px 10px',
                borderRadius: '7px',
                marginTop: '-15px'
            },

            '& .walletDetails': {
                border: '1px solid #BFBFBF',
                padding: '5px 15px',
                borderRadius: '20px'
            }
        },

        li: {
            listStyleType: 'none',
            width: '100%',
            padding: '7px 10px',

            a: {
                button: {
                    width: '100%',
                    textAlign: 'right',
                    justifyContent: 'flex-start',
                    padding: '10px',
                    gap: '10px',

                    p: {
                        fontSize: '1rem'
                    },

                    '&:hover': {
                        background: 'rgba(25, 118, 210, 0.04)'
                    }
                }
            }
        }
    },

    '@media(max-width : 1100px)': {
        position: 'fixed',
        right: props.status ? '0' : '-300px',
        top: '0',
        height: '100vh',
        overflow: 'auto',
        background: 'white',
        zIndex: '100',
        borderRadius: '0',
        transition: 'all 0.8s cubic-bezier(0, 0, 0.2, 1.11) 0s'
    }
}));

export const Layout = styled.div<any>(props => ({
    width: '100%',
    height: '100vh',
    background: '#00000091',
    cursor: 'pointer',
    position: 'fixed',
    top: '0',
    left: '0',
    zIndex: '90',
    transition: 'all 0.8s cubic-bezier(0, 0, 0.2, 1.11) 0s',
    pointerEvents: props.status ? 'initial' : 'none',
    opacity: props.status ? '1' : '0'
}));
