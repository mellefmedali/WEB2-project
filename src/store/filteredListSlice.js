import { createSlice } from "@reduxjs/toolkit";
import articleList from '../components/Sport/SportArticle/SportArticleList.json'

const filteredList = createSlice({
    name:"filteredList",
    initialState: articleList,
    reducers:{
        filterList: (state,action) => articleList.filter(e=>e.type==action.payload),
        filterListByTitle: (state,action) => articleList.filter(e=>e.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
})

export const {filterList, filterListByTitle} = filteredList.actions
export default filteredList.reducer