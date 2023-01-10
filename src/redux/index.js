import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { SliceTestReducer } from "./Slice";


// настройки плагина






const reducers = combineReducers({
    slice: SliceTestReducer
});

export const store = configureStore({
    reducer: reducers
});
