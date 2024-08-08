import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products :[],
    },
    reducers: {
       fetchProducts : (state,action)=>{
        state.products = action.payload;
       }
       }
    
})




export async function fetchProductsItems  (dispatch){
    try {
          const res = await fetch('https://dummyjson.com/products')
          const data = await res.json();
          dispatch(fetchProducts(data.products))

    } catch (error) {
        console.log(error);
    }
}

 

export const { fetchProducts } = productSlice.actions;
export default  productSlice.reducer;