import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import mapSlice from "./mapSlice";

const store=configureStore({
reducer:{
    app:appSlice,
    search:searchSlice,
    map:mapSlice
}
})

export default store