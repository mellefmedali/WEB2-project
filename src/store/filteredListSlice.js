import { createSlice } from "@reduxjs/toolkit";
import articleList from '../components/Sport/SportArticle/SportArticleList.json'


const filteredList = createSlice({
    name:"filteredList",
    initialState: articleList,
    reducers:{
        filterList: (state,action)=>state.filter(e=>e.type==action.payload)
        }
})

export const {filterList} = filteredList.actions
export default filteredList.reducer