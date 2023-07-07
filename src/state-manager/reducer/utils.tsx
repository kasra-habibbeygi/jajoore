import { createSlice } from '@reduxjs/toolkit';

interface informationTypes {
    filterAction: {
        action: 'remove' | 'apply' | '';
        type: string;
    };
    mapModalStatus: boolean;
    authModalStatus: 'otp' | 'login' | 'register' | 'forget_password' | 'mobile_login_register' | '';
}

const initState: informationTypes = {
    filterAction: {
        action: 'remove',
        type: ''
    },
    mapModalStatus: false,
    authModalStatus: ''
};

export const utilsReducer = createSlice({
    name: 'utils',
    initialState: initState,
    reducers: {
        filterActionHandler: (state, action) => {
            state.filterAction = action.payload;
        },
        mapModalStatusHandler: (state, action) => {
            state.mapModalStatus = action.payload;
        },
        authModalStatusHandler: (state, action) => {
            state.authModalStatus = action.payload;
        }
    }
});

export const { filterActionHandler, mapModalStatusHandler, authModalStatusHandler } = utilsReducer.actions;

export default utilsReducer.reducer;
