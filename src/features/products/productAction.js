import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, { rejectWithValue }) => {
        try {
            const data = api.get("/products");
            return data;
        } catch (error) {
            const errorMessage = error.response?.data?.message ||
                error.message || 'Failed to fetch products';
            return rejectWithValue(errorMessage);
        }
    }
)