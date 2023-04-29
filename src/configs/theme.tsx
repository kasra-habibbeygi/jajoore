/* eslint-disable prettier/prettier */
export const theme = (mode: 'light' | 'dark') => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                color: {
                    primary : '#D4A96C',
                    darkPrimary : '#9C7046',
                    blackAndWhite : '#363636',
                    headerBorderColor : '#B8B8B8',
                    inputBorder : '#d9d9d9',
                    button :{
                        primary : '#D4A96C',
                        danger : '#545454',
                        disabled : '#dddddd',
                        lightPrimary : '#F2E3CE',
                        hover:{
                            primary : '',
                            danger : '#7a7a7a',
                            lightPrimary : '#f3dbb9'
                        }
                    }

                }
            }
            : {
                color: {
                    primary : '#D4A96C',
                    darkPrimary : '#9C7046',
                    blackAndWhite : 'white',
                    headerBorderColor : '#B8B8B8',
                    inputBorder : '#d9d9d9',
                    button :{
                        primary : '#D4A96C',
                        danger : '#545454',
                        disabled : '#dddddd',
                        lightPrimary : '#F2E3CE',
                        hover:{
                            primary : '',
                            danger : '#7a7a7a',
                            lightPrimary : '#f3dbb9'
                        }
                    }

                }
            })
    }
});
