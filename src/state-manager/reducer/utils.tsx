import { createSlice } from '@reduxjs/toolkit';

export const utilsReducer = createSlice({
    name: 'utils',
    initialState: {
        consultationModalStatus: false
    },
    reducers: {
        consultationModalHandler: (state, action) => {
            state.consultationModalStatus = action.payload;
        }
    }
});

export const { consultationModalHandler } = utilsReducer.actions;

export default utilsReducer.reducer;
