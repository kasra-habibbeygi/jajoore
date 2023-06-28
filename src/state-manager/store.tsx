import { configureStore } from '@reduxjs/toolkit';
import UserInfo from './reducer/user';
import Utils from './reducer/utils';
import Map from './reducer/map';

const store = configureStore({
    reducer: {
        UserInfo: UserInfo,
        Utils: Utils,
        Map: Map
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
