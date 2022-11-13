import { configureStore } from '@reduxjs/toolkit'
import updateMatchReducer from './matchsSlice'
import addItemReducer from './cartSlice'
import filterListReducer from './filteredListSlice'

export default configureStore({
    reducer:{
        matchs : updateMatchReducer,
        cartItems : addItemReducer,
        filteredList : filterListReducer,
        }
})
