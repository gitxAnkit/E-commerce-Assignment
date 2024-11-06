import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api";

export const addItemsToCart = createAsyncThunk(
    'cart/addToCart',
    async ({ id, quantity }, { rejectWithValue }) => {
        try {
            const response = await api.get(`/products/${id}`);
            const data = response.data;
            const cartItem = {
                product: data.id,
                name: data.title,
                price: data.price,
                image: data.image,
                quantity,
            };
            // console.log("Cart Item: ", cartItem);
            return cartItem;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
