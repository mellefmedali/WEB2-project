import { createSlice } from "@reduxjs/toolkit";
const initialState = "fitness"

const filterType = createSlice({
    name:"filterType",
    initialState: initialState,
    reducers:{
        setFilterBy: (state,action)=>action.payload
        }
})

export const {setFilterBy} = filterType.actions
export default filterType.reducer