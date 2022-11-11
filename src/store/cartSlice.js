import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        additem: (state,action)=>[...state,action.payload]
        }
})

export const {additem} = cartSlice.actions
export default cartSlice.reducer