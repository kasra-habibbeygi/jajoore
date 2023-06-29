import styled from '@emotion/styled';

export const MainField = styled.div<{ ulStatus: boolean; count: number; height: number }>(props => ({
    margin: '50px 0',

    ul: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        maxHeight: props.ulStatus ? `calc(${props.count} * 55px)` : '331px',
        overflow: 'hidden',

        li: {
            minWidth: '33.3333%',

            img: {
                width: '30px',
                height: 'auto'
            },

            div: {
                width: 'max-content',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 10px',
                justifyContent: 'center'
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
                width: '90%',
                height: '1px',
                backgroundColor: '#FF0000'
            }
        }
    },

    '& .layout': {
        background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        width: '100%',
        height: '80px',
        display: !props.ulStatus ? (props.height > 330 ? 'flex' : 'none') : 'none',
        position: 'absolute',
        bottom: '0',
        left: '0'
    },

    '& .show_more': {
        display: props.height > 330 ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',

        img: {
            width: '15px',
            height: 'auto'
        }
    },

    '@media(max-width : 600px)': {
        ul: {
            li: {
                minWidth: '50%',

                p: {
                    fontWeight: '300',
                    fontSize: '0.9rem'
                },

                img: {
                    width: '25px',
                    height: 'auto'
                }
            }
        }
    }
}));
