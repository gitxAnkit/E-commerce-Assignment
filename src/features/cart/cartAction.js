import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api";
import { addToCart } from "./cartSlice";

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
            return cartItem;

        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
