import styled from '@emotion/styled';

export const MainField = styled.div(props => ({
    '& .header': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

        '& .title_text': {
            background: props.theme.palette.colors.primary,
            color: 'white',
            padding: '1px 10px',
            borderRadius: '50px',
            fontSize: '0.9rem'
        }
    },

    '& .content': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginBottom: '40px',
        marginTop: '20px',

        div: {
            width: '150px',
            borderRadius: '5px',
            boxShadow: '0 0 4px 1px rgb(0 0 0 / 9%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '15px',

            p: {
                fontSize: '0.9rem'
            },

            img: {
                width: '30px',
                height: 'auto'
            }
        }
    },

    '@media(max-width : 700px)': {
        '& .content': {
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            flexWrap: 'nowrap',
            boxShadow: '0 0 4px 1px rgb(0 0 0 / 9%)',
            borderRadius: '5px',
            padding: '15px 10px',

            div: {
                width: '100%',
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
                padding: '15px',
                borderLeft: '1px solid #EBEBEB',
                borderRadius: '0',

                '&:last-of-type': {
                    borderLeft: 'none'
                },

                p: {
                    fontSize: '0.9rem'
                },

                img: {
                    width: '30px',
                    height: 'auto'
                }
            }
        }
    },

    '@media(max-width : 600px)': {
        '& .content': {
            div: {
                p: {
                    fontSize: '0.8rem'
                },

                img: {
                    width: '25px'
                }
            }
        }
    },

    '@media(max-width : 550px)': {
        '& .content': {
            flexWrap: 'wrap',
            div: {
                flex: '1 0 50%',

                '&:nth-of-type(2)': {
                    borderLeft: 'none',
                    borderBottom: '1px solid #EBEBEB'
                },

                '&:nth-of-type(1)': {
                    borderBottom: '1px solid #EBEBEB'
                }
            }
        }
    }
}));
