import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        trigger:false
    },
    reducers:{
        toggleMenu:(state)=>{
            console.log("call received")
            
            state.isMenuOpen=!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        },
        handleSidebar:(state)=>{
            console.log("triggered");
            
            console.log("triggerbefore",state.trigger);
            state.trigger=!state.trigger
            // state.trigger=true
            console.log("triggerafter",state.trigger);
            
        }
    }
})

export default appSlice.reducer
export const {toggleMenu,closeMenu,handleSidebar}=appSlice.actions