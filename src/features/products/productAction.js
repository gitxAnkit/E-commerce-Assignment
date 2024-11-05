import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../app/api";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/products");
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message ||
                error.message || 'Failed to fetch products';
            return rejectWithValue(errorMessage);
        }
    }
);
export const getProductsInCategory = createAsyncThunk(
    'products/getProductsInCategory',
    async ({ category }, { rejectWithValue }) => {
        try {
            const response = await api.get(`/products/category/${category}`);
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message ||
                error.message || 'Failed to fetch products';
            return rejectWithValue(errorMessage);
        }
    }
);
export const getProductDetails = createAsyncThunk(
    'products/getProductDetails',
    async ({ id }, { rejectWithValue }) => {
        try {
            const response = await api.get(`/products/${id}`);
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message ||
                error.message || 'Failed to fetch product details';
            return rejectWithValue(errorMessage);
        }
    }
);



export const getCategories = createAsyncThunk(
    'products/categories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/products/categories");
            return response.data;
        } catch (error) {
            const errorMessage = error.response?.data?.message ||
                error.message || 'Failed to fetch categories';
            return rejectWithValue(errorMessage);
        }
    }
)