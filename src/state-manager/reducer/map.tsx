import { createSlice } from '@reduxjs/toolkit';

interface informationTypes {
    list: any[];
    selected: {
        lat: string;
        lng: string;
    };
}

const initState: informationTypes = {
    list: [],
    selected: {
        lat: '',
        lng: ''
    }
};

export const MapReducer = createSlice({
    name: 'map',
    initialState: initState,
    reducers: {
        locationListHandler: (state, action) => {
            state.list = action.payload;
        },
        selectedLocationHandler: (state, action) => {
            state.selected = action.payload;
        }
    }
});

export const { locationListHandler, selectedLocationHandler } = MapReducer.actions;

export default MapReducer.reducer;
