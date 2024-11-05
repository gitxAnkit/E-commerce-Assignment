import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        shippingInfo: {},
    },
    reducers: {
        removeCartItem: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (i) => i.product !== action.payload
            );
        },
        saveShippingInfo: (state, action) => {
            state.shippingInfo = action.payload;
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addItemsToCart.fulfilled, (state, action) => {
                const item = action.payload;
                const isItemExist = state.cartItems.find((i) => i.product === item.product);

                if (isItemExist) {
                    state.cartItems = state.cartItems.map((i) =>
                        i.product === isItemExist.product ? item : i
                    );
                } else {
                    state.cartItems.push(item);
                }
            })
            .addCase(addItemsToCart.rejected, (state, action) => {
                console.error("Error adding item to cart:", action.payload);
            });
    }
});

export const { removeCartItem, saveShippingInfo, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
