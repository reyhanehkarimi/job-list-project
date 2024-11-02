/*eslint-disable*/

import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState  = {
roleFilter :'',
};

const listSlice = createSlice({
    name: 'List',
    initialState,
    reducers : {
       setFilter : (state , action) => {
        state.roleFilter = action.payload;
       }
    }
});

export const { setFilter } = listSlice.actions;
export default listSlice.reducer;

