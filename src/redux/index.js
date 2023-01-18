import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { SliceTestReducer } from "./Slice";


const reducers = combineReducers({
    slice: SliceTestReducer
});

export const store = configureStore({
    reducer: reducers
});
