import { configureStore } from '@reduxjs/toolkit'
import updateMatchReducer from './matchsSlice'

export default configureStore({
    reducer:{
        matchs : updateMatchReducer
    }
})
