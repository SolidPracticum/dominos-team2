import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: 'SliceTest',
    initialState: {
        data: []
    },
    reducers: {

    }
})

export const SliceTestActions = Slice.actions;
export const SliceTestReducer = Slice.reducer;