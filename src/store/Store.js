import { configureStore } from '@reduxjs/toolkit'
import updateMatchReducer from './matchsSlice'
import addItemReducer from './cartSlice'

export default configureStore({
    reducer:{
        matchs : updateMatchReducer,
        cartItems : addItemReducer
    }
})
