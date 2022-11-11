import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        stadium : "Sydney Cricket Ground",
        country: "Australia",
        region: "",
        tournament: "ICC Men's T20 World Cup 2022 Semi Final",
        start: "2022-11-09 08:00",
        match: "New Zealand vs Pakistan"
    }
]

const matchsSlice = createSlice({
    name: "matchs",
    initialState,
    reducers: {
        updateMatchs:(state, action) => action.payload
    }
});

export const {updateMatchs } = matchsSlice.actions

export default matchsSlice.reducer