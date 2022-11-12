import { createSlice } from "@reduxjs/toolkit";
const initialState = ""

const filterType = createSlice({
    name:"filterType",
    initialState: initialState,
    reducers:{
        setFilterBy: (state,action)=>action.payload
        }
})

export const {setFilterBy} = filterType.actions
export default filterType.reducer