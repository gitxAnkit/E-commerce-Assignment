import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        error: "",
        success: false,
        products: [],
        isDeleted: false,
        productsCount: 0,
    },
    reducers: {
        deleteProduct: (state, action) => {
            state.isDeleted = true;
            state.products = state.products.filter(product => product.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})
export const { deleteProduct } = productSlice.actions;
export default productSlice.reducer;