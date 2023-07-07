/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';

export const TurnoverStyle = styled.div(props => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    '& .success': {
        color: props.theme.palette.colors.green
    },
    '& .error': {
        color: props.theme.palette.colors.alert
    },
    '& .warning': {
        color: props.theme.palette.colors.yellow
    },
    form: {
        display: 'flex',
        gap: '20px',
        '& .checkBoxBorder': {
            border: '1px solid #BFBFBF',
            height: '35px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            padding: '17px',
            span: {
                padding: '0px'
            },
            '& .MuiFormControlLabel-root': {
                flexDirection: 'row',
                gap: '7px'
            },
            label: {
                margin: '0px'
            }
        },
        '& .formBox': {
            width: '50%'
        }
    },
    '& .explain': {
        background: '#EAFAEF',
        padding: '10px 20px',
        borderRadius: '5px',
        direction: 'ltr',
        textAlign: 'right'
    },
    '& .tableDetails': {
        p: {
            fontSize: '1.2rem',
            margin: '10px 0px 20px'
        },
        table: {
            width: '100%',
            tr: {
                borderBottom: '1px solid #BFBFBF'
            },
            th: {
                padding: '20px 10px',
                textAlign: 'center',
                fontWeight: 'normal'
            },
            td: {
                padding: '20px 10px',
                textAlign: 'center'
            },
            '& .blue': {
                color: props.theme.palette.colors.blue
            }
        }
    }
}));
