import { createSlice } from "@reduxjs/toolkit";
import { getAllTour, getTourById } from "../thunks/tourThunk";

const tourSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    error: "",
    loading: false,
    tourById: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTour.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(getAllTour.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTour.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTourById.fulfilled, (state, action) => {
        state.tourById = [action.payload];
      });
  },
});

export const { addTour, deleteTour } = tourSlice.actions;

export const tourReducer = tourSlice.reducer;
