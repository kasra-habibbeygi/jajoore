import { createSlice } from '@reduxjs/toolkit';

interface informationTypes {
    filterAction: {
        action: 'remove' | 'apply' | '';
        type: string;
    };
    mapModalStatus: boolean;
}

const initState: informationTypes = {
    filterAction: {
        action: 'remove',
        type: ''
    },
    mapModalStatus: false
};

export const utilsReducer = createSlice({
    name: 'utils',
    initialState: initState,
    reducers: {
        filterActionHandler: (state, action) => {
            state.filterAction = action.payload;
        },
        mapModalStatushandler: (state, action) => {
            state.mapModalStatus = action.payload;
        }
    }
});

export const { filterActionHandler, mapModalStatushandler } = utilsReducer.actions;

export default utilsReducer.reducer;
