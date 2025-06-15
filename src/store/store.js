import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from './slice/categorySlice'
import { searchSlice } from './slice/searchSlice'

export const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        search: searchSlice.reducer
    }
})