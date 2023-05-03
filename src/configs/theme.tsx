/* eslint-disable prettier/prettier */
export const theme = (mode: 'light' | 'dark') => ({
    palette: {
        mode,
        colors : {
            primary : '#C12026',
            yellow : '#FEA503',
            green  :'#1F8E1F',
            lightGray : '#EFEFEF',
            blue : '#42A5F5',
            alert : '#F94A29',
            pale : {
                primary : '#EA5455',
                green : '#549166'
            },
            light : {
                primary : '#FFDCDC',
                yellow : '#FFF4E0'
            },
            dark : {
                yellow : '#A4680C',
                blue : '#00437A'

            },
            text : {
                primary : '#303030',
                secondary : '#4C4C4C',
                light : '#818181'
            }
        } 
    }
});
