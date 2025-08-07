import { createSlice } from "@reduxjs/toolkit";

const mapSlice=createSlice({
    name:"mapSelect",
    initialState:{
        show:[]
    },
    reducers:{
        addSelect: (state, action) => {
            console.log("payload:", action.payload); // Should be an array of video items
            state.show = action.payload; // Direct replace
          }
    }
})
export const {addSelect} =mapSlice.actions
export default mapSlice.reducer