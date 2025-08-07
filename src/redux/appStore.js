import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import mapSlice from "./mapSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
reducer:{
    app:appSlice,
    search:searchSlice,
    map:mapSlice,
    chat:chatSlice
}
})

export default store