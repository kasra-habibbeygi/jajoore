import styled from '@emotion/styled';

export const ProfileAsideStyle = styled.aside({
    width: '300px',
    minHeight: '100vh',
    border: '1px solid #BFBFBF',
    boxShadow: '0px 0px 6px #00000026',
    borderRadius: '20px',
    padding: '20px',

    ul: {
        '& .userInfoLi': {
            width: '100%',
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',

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
    }
});
