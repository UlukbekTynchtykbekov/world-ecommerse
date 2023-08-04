import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios-utils";

export const verifyEmail = createAsyncThunk(
    "auth/fetchOtp",
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await axios.post("/api/users/verify", params);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const otpSlice = createSlice({
    name: "otp",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(verifyEmail.pending, (state) => {
                state.loading = true;
                state.data = null;
                state.error = null;
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(verifyEmail.rejected, (state, action) => {
                state.loading = false;
                state.data = null;
                state.error = action.payload;
            });
    },
});

export const selectAuth = (state) => Boolean(state.otp.data)
export const otpReducer = otpSlice.reducer;