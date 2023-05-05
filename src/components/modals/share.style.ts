import styled from '@emotion/styled';

export const ModalField = styled.div({
    '& .MuiPaper-root': {
        padding: '30px'
    },

    '& .header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        img: {
            width: '30px',
            height: 'auto'
        }
    },

    '& .body': {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap',

        button: {
            width: '47%',
            padding: '10px 0',

            p: {
                color: 'white',
                fontSize: '1.2rem'
            },

            img: {
                width: '40px'
            }
        },

        '& .yellow_one': {
            background: '#CB7C37 !important'
        },

        '& .blue_one': {
            background: '#2B73C5 !important'
        }
    }
});
