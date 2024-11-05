import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getProductsInCategory, getProducts, getProductDetails } from "./productAction";

const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        error: "",
        success: false,
        products: [],
        product: {},
        isDeleted: false,
        productsCount: 0,
        categories: [],
        resultPerPage: 10,
        filteredProductsCount: 20,
    },
    reducers: {
        deleteProduct: (state, action) => {
            state.isDeleted = true;
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        clearErrors: (state) => {
            state.error = "";
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
            .addCase(getProductsInCategory.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProductsInCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProductsInCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(getCategories.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getProductDetails.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getProductDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(getProductDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})
export const { deleteProduct, clearErrors } = productSlice.actions;
export default productSlice.reducer;