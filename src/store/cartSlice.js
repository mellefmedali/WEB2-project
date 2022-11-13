import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        additem: (state, action) => [...state, action.payload],
        deleteitem: (state, action) => {state.splice(action.payload,1)},
        deleteAllItems: () => initialState
    }
})

export const { additem, deleteitem, deleteAllItems } = cartSlice.actions
export default cartSlice.reducer