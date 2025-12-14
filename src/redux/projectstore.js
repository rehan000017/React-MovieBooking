import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import searchReducer from './slices/searchSlice';

const projectstore = configureStore({
    reducer: {
        cart:cartReducer , search:searchReducer
    },
})

export default projectstore;