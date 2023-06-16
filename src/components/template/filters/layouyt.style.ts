import styled from '@emotion/styled';

interface layoutTypes {
    status: boolean;
    boxWidth: number;
    position: 'right' | 'left';
}

export const LayoutField = styled.div<layoutTypes>(props => ({
    width: `${props.boxWidth}px`,
    padding: '13px',
    background: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius: '8px',
    position: 'absolute',
    zIndex: '5',
    top: props.status ? '45px' : '35px',
    right: props.position === 'right' ? '0' : 'unset',
    left: props.position === 'left' ? '0' : 'unset',
    transition: 'all linear 0.1s',
    opacity: props.status ? '1' : '0',
    pointerEvents: props.status ? 'initial' : 'none',

    '& .header': {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
        fontWeight: '300',
        marginBottom: '20px',

        span: {
            position: 'absolute',
            right: '-13px',
            height: '30px',
            width: '6px',
            background: props.theme.palette.colors.primary,
            borderRadius: '5px 0 0 5px'
        }
    },

    '& .footer': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'space-between',
        marginTop: '20px',

        button: {
            fontSize: '0.75rem',
            padding: '0px 10px',
            minHeight: '28px',
            fontWeight: '200',

            img: {
                width: '16px',
                marginLeft: '-5px'
            }
        },

        '& .close_btn': {
            border: '1px dashed #cdcdcd'
        },

        '& .action_group': {
            display: 'flex',
            gap: '4px'
        }
    }
}));
