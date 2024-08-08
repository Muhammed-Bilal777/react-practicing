// store.js
import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../redux/slices/productSlice"

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;