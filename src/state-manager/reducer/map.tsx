import { createSlice } from '@reduxjs/toolkit';

interface informationTypes {
    list: any[];
}

const initState: informationTypes = {
    list: []
};

export const MapReducer = createSlice({
    name: 'map',
    initialState: initState,
    reducers: {
        locationList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { locationList } = MapReducer.actions;

export default MapReducer.reducer;
