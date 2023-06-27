import { createSlice } from '@reduxjs/toolkit';

interface informationTypes {
    filterAction: {
        action: 'remove' | 'apply' | '';
        type: string;
    };
}

const initState: informationTypes = {
    filterAction: {
        action: 'remove',
        type: ''
    }
};

export const utilsReducer = createSlice({
    name: 'utils',
    initialState: initState,
    reducers: {
        filterActionHandler: (state, action) => {
            state.filterAction = action.payload;
        }
    }
});

export const { filterActionHandler } = utilsReducer.actions;

export default utilsReducer.reducer;
