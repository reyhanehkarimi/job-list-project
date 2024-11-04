import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name: "list",
    initialState: {
        filterRole: [] 
    },
    reducers: {
        setFilter: (state, action) => {
            const filter = action.payload;
            if (state.filterRole.includes(filter)) {
                state.filterRole = state.filterRole.filter(item => item !== filter);
            } else {
                state.filterRole.push(filter);
            }
        },
        clearFilters: (state) => {
            state.filterRole = [];
        },
        deleteRole: (state, action) => {
            const deleteFilter = action.payload;
            state.filterRole = state.filterRole.filter(item => item !== deleteFilter);
        }
    }
});

export const { setFilter, clearFilters, deleteRole } = listSlice.actions;
export default listSlice.reducer;
