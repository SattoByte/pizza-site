import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './slices/filterSlice'
import userReducer from './slices/userSlice.js'
import cartReducer from './slices/cartSlice.js'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    user: userReducer,
    cart: cartReducer
  },
})